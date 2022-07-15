import React from 'react';

export default function NotFoundPage() {
   return (
      <div style={{
         fontSize: '1.8rem',
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         flexDirection: 'column',
         margin: '6rem',
      }}>
         <div style={{
            padding: '3.6rem',
         }}>Oops! We couldn't find what you were looking for. (404 error)</div>
         <iframe
            style={{
               borderRadius: '10px',
            }}
            src="https://giphy.com/embed/elyFU4qFMAULiW5SNH"
            width="220" height="220" frameBorder="0" className="giphy-embed"
            allowFullScreen></iframe>
         <p style={{
            fontSize: '1.2rem',
            fontStyle: 'italic',
         }}>French fry when you shoulda pizza? You're gunna have a bad time! :)</p>
      </div>
   );
}