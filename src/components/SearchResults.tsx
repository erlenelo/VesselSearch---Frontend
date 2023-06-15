import React, { useEffect, useState } from 'react';
import '../styles/SearchResults.css'
import { VesselCard } from './VesselCard';
import Button from '@mui/material/Button';


// This component handles the search functionality, and renders the results in a VesselCard component

interface Vessel {
    id: number;
    vesselName: string;
    imoNumber: number;
    certificates: any;
}

interface Certificate {
    certificateId: number;
    certificateName: string;
    certificateType: string;
    vesselId: number;
    startDate: Date;
    endDate: Date;
}

export const SearchResults = () => {
    const [searchWord, setSearchWord] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [isSearched, setIsSearched] = useState(false);
    const [vesselList, setVesselList] = useState<Vessel[]>([]);

    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSearchTerm(event.target.value);
    };
    //This function handles the search when the user presses enter, executing the fetch request after search term is set
    const handleEnter = (event: { key: string }) => {
        if (event.key === 'Enter') {
          setSearchWord(searchTerm);
          if (searchTerm !== '') {
            setIsSearched(true);
      
            fetch(`http://localhost:8080/vessel/search?searchTerm=${searchTerm}`)
              .then(res => res.json())
              .then(result => {
                console.log(result);
                setVesselList(result);
              })
              .catch(error => {
                console.error(error);
              });
          } else {
            setIsSearched(false);
          }
        }
      };
      // This function fetches all vessels in the DB, along with their certificates.
    const handleFetchAll=()=>{
        fetch("http://localhost:8080/vessel/getAllWithCertificates")
        .then(res=>res.json())
        .then((result)=>{
            setVesselList(result)
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });

    }

    return (
        <div className = "mainContainer">
            <input  type="text" placeholder="Search for a vessel in the database..." onChange = {handleChange} className="sf" onKeyDown={handleEnter}/>
            <Button variant='contained' onClick={handleFetchAll} sx={{marginTop:"10px"}}>Fetch All Vessels</Button>
            {isSearched ? <h5>Results for '{searchWord}': </h5> : <h5>       </h5>}
            <div className = "cardContainer">
                {/* The following code maps the vesselList array to a VesselCard component, which is then rendered in the cardContainer div */}
                {vesselList.map((vessel => {
                    return (
                        <div className="card" key={vessel.id} >
                            <VesselCard vesselName = {vessel.vesselName} imoNumber = {vessel.imoNumber} certificates={vessel.certificates}  />
                        </div>
                    )
                }))}
            </div>
        </div>
    );
}


export default SearchResults;
