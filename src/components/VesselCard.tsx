import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';

// This component renders the vessel cards in the search results

interface VesselCardProps {
    vesselName: string;
    imoNumber: number;
    certificates: any[];
}

export const VesselCard: React.FC<VesselCardProps> = ({
  vesselName,
  imoNumber,
  certificates
}) => {
  const bcCertificates = certificates.filter((certificate) => certificate.certificateType === 'BC');
  const mlcCertificates = certificates.filter((certificate) => certificate.certificateType === 'MLC');

  return (
    <Card sx={{ width: 750, height: 1, border: 1, borderColor: 'dark-gray', borderRadius: 1, px: 0.5, bgcolor: '#e0e0e0', marginTop: '0.5%',marginBottom:'0.5%' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {vesselName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          IMO: {imoNumber}
        </Typography>
        {certificates.length==0 && (
          <Typography variant="body2" sx={{fontStyle:"italic"}}>No certificates</Typography>
          
        ) }
        {certificates.length > 0 && (
          <Typography>
            {bcCertificates.length > 0 && (
              <List>
                <Typography variant="subtitle1" sx={{fontWeight:"bold"}}>BC:</Typography>
                {bcCertificates.map((certificate) => (
                  <li key={certificate.certificateId}>{certificate.certificateName} - {certificate.startDate} to {certificate.endDate}</li>
                ))}
              </List>
            )}
            {mlcCertificates.length > 0 && (
              <List>
                <Typography variant="subtitle1" sx={{fontWeight:"bold"}}>MLC:</Typography>
                {mlcCertificates.map((certificate) => (
                  <li key={certificate.certificateId}>{certificate.certificateName} - {certificate.startDate} to {certificate.endDate}</li>
                ))}
              </List>
            )}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};
export default VesselCard;