import React from 'react';
// Import the CSS file

function Herocom({ star, backdrop }) {
    return (
        <header className='text-white p-5 bg-black' style={{opacity:0.8}}>
            <h1>{star}</h1>
            
        </header>
    );
}
export default Herocom;