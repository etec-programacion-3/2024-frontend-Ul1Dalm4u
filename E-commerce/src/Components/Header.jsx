import React, { useState } from 'react';
import { CiSearch, CiHeart, CiBag1 } from "react-icons/ci";
import { Link } from 'react-router-dom';
import SearchBar from './Searchbar';
import './HomePage.css';

const Header = () => {
    const [searchVisible, setSearchVisible] = useState(false);

    const toggleSearch = () => {
        setSearchVisible(!searchVisible);
    };

    return (
        <>
            <header>
                <p>Perito Moreno 2397, Godoy Cruz</p>
                <Link to='/' className='title-link'>
                    <h3 className='title'>ULI _ TINO</h3>
                </Link>
                <div className='top_right_header'>
                    <Link to='/login' aria-label="Login">
                        <p>Login</p>
                    </Link>
                    <CiSearch aria-label="Search" onClick={toggleSearch} />
                    <CiHeart aria-label="Favorites" />
                    <CiBag1 aria-label="Shopping Cart" />
                </div>
            </header>
            {searchVisible && <SearchBar onClose={toggleSearch} />}
            {searchVisible && <div className="overlay" onClick={toggleSearch}></div>}
        </>
    );
};

export default Header;
