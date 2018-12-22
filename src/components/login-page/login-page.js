import React from 'react';
import './login-page.css';

const LoginPage = ({ isLoggedIn, onLogin}) => {

    if(isLoggedIn){
        return(
            <div className="centerLog"><h1>You allready logged in</h1></div>
        )
    }

  return(
      <div className='centerLog'>
          <h2>login to see secret page</h2>
          <button
              className='btn btnOrange'
              onClick={onLogin}>Login</button>
      </div>
  )  ;
};

export default LoginPage;