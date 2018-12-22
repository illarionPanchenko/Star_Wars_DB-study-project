import React from 'react';
import './secret-page.css';
import Maestro from './maestro.jpg';

const SecretPage = ({isLoggedIn})=>{
    if (isLoggedIn){
       return(
           <div className='text-center'>
               <h2>Secret Page</h2>
               <img src={Maestro} className="maestro" alt="sreeee"/>
           </div>
       ) ;

    }
    return( <div className="center">
        <h2>LOG IN PLEASE</h2> </div>)
};

export default SecretPage;