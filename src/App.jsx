import React from 'react';
import { Paper } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import {
   Header,
   Footer,
   About,
   Resort,
   Resorts,
   Traffic,
   Safety,
   HomeBody,
   NotFoundPage,
} from './components';

import {
   HeavenlyLogo,
   BorealLogo,
   ChinaPeakLogo,
   DiamondPeakLogo,
   HomewoodLogo,
   JuneLogo,
   KirkwoodLogo,
   MammothLogo,
   MtRoseLogo,
   NorthstarLogo,
   PalisadesLogo,
   SierraLogo,
   SugarBowlLogo,
   TahoeDonnerLogo
} from './images';

import background from './images/hero_banner.jpg';


export default function App() {
   const resorts = [{ query: 'boreal', skimapID: '523', image: BorealLogo },
   { query: 'chinapeak', skimapID: '527', image: ChinaPeakLogo },
   { query: 'diamondpeak', skimapID: '359', image: DiamondPeakLogo },
   { query: 'heavenly', skimapID: '544', image: HeavenlyLogo },
   { query: 'northstar', skimapID: '531', image: NorthstarLogo },
   { query: 'kirkwood', skimapID: '537', image: KirkwoodLogo },
   { query: 'homewood', skimapID: '545', image: HomewoodLogo },
   { query: 'june-mountain', skimapID: '540', image: JuneLogo },
   { query: 'mammoth-lakes', skimapID: '530', image: MammothLogo },
   { query: 'mtrose', skimapID: '358', image: MtRoseLogo },
   { query: 'palisades', skimapID: '538', image: PalisadesLogo },
   { query: 'alpine', skimapID: '522', image: PalisadesLogo },
   { query: 'sierra', skimapID: '525', image: SierraLogo },
   { query: 'sugarbowl', skimapID: '543', image: SugarBowlLogo },
   { query: 'tahoe-donner', skimapID: '529', image: TahoeDonnerLogo },]

   return (
      <Paper>
         <Header />
         <Routes>
            <Route path='/' element={<HomeBody style={{
               backgroundImage: `url(${background})`,
            }} />} />
            <Route path='/about' element={<About />} />
            <Route path='/resorts'
               element={<Resorts resorts={resorts} />} />
            <Route path='/resorts/:resortQuery' element={<Resort resorts={resorts} />} />
            <Route path='/traffic' element={<Traffic />} />
            <Route path='/safety' element={<Safety />} />
            {/* Wild card path leads to a 404 not found page. */}
            <Route path='*' element={<NotFoundPage />} />
         </Routes>
         <Footer />
      </Paper>
   )
};