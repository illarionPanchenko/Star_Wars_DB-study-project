import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';

const Header = ()=>{
return(
    <div className='header d-flex'>
        <Link to='/' className="h3"> Star wars DB</Link>


        <Link className="btn btn-secondary" to='/people/'>people</Link>

        <Link className="btn btn-secondary" to='/planets/'>planets</Link>

        <Link className="btn btn-secondary" to="/starships/">starships</Link>

        <Link className='btn btn-secondary' to='/secret/' >secret</Link>

        <Link className="btn  btnOrange" to="/log/"> Log in</Link>




    </div>
)
};

export default Header;