import React from 'react';
import Hero from './Hero';
import Award from './Award';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';

import OpenAccount from '../OpenAccount';



function HomePage() {
    return ( 
        <>
        <Hero></Hero>
        <Award></Award>
        <Stats></Stats>
        <Pricing></Pricing>
        <Education></Education>
        <OpenAccount></OpenAccount>
        </>
     );
}

export default HomePage;