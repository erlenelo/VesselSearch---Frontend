# Frontend for Vessel Search
This repository contains the frontend for VesselSearch. The majority of documentation is found in the backend repository, [here.](https://github.com/erlenelo/VesselSearch-Backend).

The website is a simple React Typescript app that contains a search input field, which is used to browse a database of vessels, and their respective certificates. All vessels that meet the search criteria are displayed below the search field, rendered as cards that contain the vessel's name, IMO number, and a list of certificates. The certificates are distinguished into two separate categories, MLC and BC Certificates, and displayed accordingly in separate fields in the card.

## Installation and running the application ##
To run the frontend, you need to have [Node.js](https://nodejs.org/en/) installed. Once installed, navigate to the root folder of the frontend, and run the following commands:
```sh
npm install
npm start
```
The frontend will run on localhost:3000, and can be viewed in the browser.
