import React from 'react';
import Card from './Card';
import styled from 'styled-components';

const Section = styled.section`
    text-align: center;
`

const CardList = ({robots}) =>  {
    
    const cardComponent = robots.map((user,i) => {
        return (<Card 
        key={i} 
        id={robots[i].id} 
        name={robots[i].name} 
        username={robots[i].username} 
        email={robots[i].email}
        />);
    });

    return (
        <Section>
            {cardComponent}
        </Section>
    );
}

export default CardList;