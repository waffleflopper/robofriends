import React from 'react';
import Card from './Card';

const CardList = ({robots}) =>  {
    return (
        <div className="tc ma5">
            <Card id={robots[0].id} name={robots[0].name} username={robots[0].username} email={robots[0].email}/>
            <Card id={robots[1].id} name={robots[1].name} username={robots[1].username} email={robots[1].email}/>
            <Card id={robots[2].id} name={robots[2].name} username={robots[2].username} email={robots[2].email}/>
        </div>
    );
}

export default CardList;