import React from 'react';
import { CiSearch, CiHeart, CiBag1 } from "react-icons/ci";
import { Link } from 'react-router-dom';
import './HomePage.css'; // si tienes estilos específicos

const Header = () => {
    return (
        <header>
            <p>Perito Moreno 2397, Godoy Cruz</p>
            <h3 className='title'>ULI _ TINO</h3>
            <div className='top_right_header'>
                <Link to='/login'><p>Login</p></Link>
                <CiSearch />
                <CiHeart /> 
                <CiBag1 />
            </div>
        </header>
    );
};

export default Header;
