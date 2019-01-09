import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    padding: 1em;
    border: solid 1px rgb(128, 42, 21);
    background: rgba(255, 215, 170, 0.6);
    font-size: 1.25em;
`

const SearchBox = ({searchField, searchChange}) => {
    return (
            <Input type="search" 
                placeholder="Search robots..." 
                onChange={searchChange} />
    );
}

export default SearchBox;