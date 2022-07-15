import React from 'react';

import './Footer.css';

export default function Footer() {
   const currentYear = new Date().getFullYear();

   return (
      <div className='footer'>
         <div>Chris Cheng {currentYear}</div>
         <div>Built with ❤️ in 🏴󠁵󠁳󠁣󠁡󠁿</div>
      </div>
   );
}