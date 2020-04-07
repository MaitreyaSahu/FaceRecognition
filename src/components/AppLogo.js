import React from 'react';
import logo from './AppLogo.png';
import Tilt from 'react-tilt';

const Logo = () => {
    return (
        <div>    
            <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
            <div className="Tilt-inner"> 👽 </div>
            </Tilt>
            <h1>Hi</h1>
            <img src= {logo} alt='Face Recognition'/>
        </div>
    )
}

export default Logo;