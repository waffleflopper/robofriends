import React from 'react';
import styled from 'styled-components';

const Tile = styled.section`
    text-align: center;
    display: inline-block;
    border-radius: .5em;
    border-width: .25rem;
    padding: 3em;
    margin: 1em;	

    -moz-osx-font-smoothing:grayscale
    backface-visibility:hidden
    
    transition: transform 0.25s ease

    :hover, :focus {
        transform: scale(1.05)
    }
    :active {
        transform: scale(0.9);
    }

    box-shadow: 4px 4px 8px 0px rgba( 0, 0, 0, 0.2 );
    cursor: pointer;
    background: rgba(255, 215, 170, .5);
    z-index: 0;
`

//const Card = (props) => {
const Card = ({name, email, id, username}) => {  //destructuring from within
    return (
        <Tile>
            <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{username}</p>
                <p>{email}</p>
            </div>
        </Tile>
    );
}

export default Card;