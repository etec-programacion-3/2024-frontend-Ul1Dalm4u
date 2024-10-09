import React, { useState } from 'react';
import './Searchbar.css';

const SearchBar = ({ onClose }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isHovered, setIsHovered] = useState(false);

    const handleSearchInput = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log("Searching for:", searchQuery);
        onClose();
        setSearchQuery('');
    };

    return (
        <div 
            className='search-bar'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                if (!searchQuery) {
                    setIsHovered(false);
                    onClose();
                }
            }}
        >
            <form onSubmit={handleSearchSubmit} className='search-form'>
                <input 
                    type="text" 
                    placeholder="Buscar..." 
                    className='search-input'
                    value={searchQuery}
                    onChange={handleSearchInput}
                    onBlur={() => {
                        if (!isHovered) {
                            onClose();
                        }
                    }}
                />
                <button type="submit" className='search-button'>Buscar</button>
            </form>
        </div>
    );
};

export default SearchBar;
