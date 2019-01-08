import React from 'react';
import './SearchBox.css';

const SearchBox = ({searchField, searchChange}) => {
    return (
        <div className="pa2">
            <input type="search" 
                className="pa3 ba search"
                placeholder="Search robots..." 
                onChange={searchChange}
                />
        </div>
    );
}

export default SearchBox;