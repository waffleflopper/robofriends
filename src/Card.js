import React from 'react';

//const Card = (props) => {
const Card = ({name, email, id, username}) => {  //destructuring from within
    return (
        <div className='tc bg-near-white dib br3 pa3 ma2 grow bw2 shadow-5 pointer'>
            <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{username}</p>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;