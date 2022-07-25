import React from 'react';

import { useParams } from 'react-router-dom';
import { CircularProgress, Container } from '@mui/material';

import ResortDetail from '../ResortDetail/ResortDetail';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

export default function Resort(props) {
   const [isDataLoaded, setIsDataLoaded] = React.useState(false);
   const [isValidResortName, setIsValidResortName] = React.useState(true);
   const { resortQuery } = useParams();
   let skimapID = '';

   let [resortData, setResortData] = React.useState({});
   let [skiMapData, setSkiMapData] = React.useState({});
   const corsProxy = 'https://mighty-scrubland-75189.herokuapp.com';

   React.useEffect(() => {
      //  error check for a valid resort query name first
      // don't call fetch() on an invalid resortQuery
      const validResort = props.resorts.find(resort => resort.query === resortQuery);
      if (validResort === undefined) {
         setIsValidResortName(false);
         return;
      }

      skimapID = props.resorts.find(resort => resort.query === resortQuery).skimapID;
      Promise.all([
         fetch(`${corsProxy}/https://liftie.info/api/resort/${resortQuery}`),
         fetch(`${corsProxy}/https://skimap.org/SkiAreas/view/${skimapID}.json`)
      ])
         .then(responses => {
            return Promise.all(responses.map(response => response.json()))
         })
         .then(data => {
            setResortData(data[0]);
            setSkiMapData(data[1]);
            setTimeout(() => setIsDataLoaded(true), 1000);
         })
         .catch(error => console.log(`Error: ${error}`));
   }, [resortQuery])

   // only display the resort content AFTER the fetch call has returned!
   // Otherwise, display the 404 page if invalid resort name was used.
   let displayContent;
   if (isValidResortName && !isDataLoaded) {
      displayContent = <Container style={{
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         padding: '4.8rem'
      }}>
         <CircularProgress color='inherit' />
      </Container>
   }
   if (!isValidResortName) {
      displayContent = <NotFoundPage />;
   }
   if (isDataLoaded) {
      displayContent = <ResortDetail
         resortData={resortData}
         skiMapData={skiMapData}
      />;
   }

   return (
      displayContent
   );
}