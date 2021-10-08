import React from 'react';
import HeroSection from '../../../HeroSection';
import Pricing from '../../../Pricing';
import { homeObjTwo } from '../Data';

function SignUp() {
    return (
        <>
          <HeroSection {...homeObjTwo} />  
          <Pricing/>
        </>
    )
}

export default SignUp;
