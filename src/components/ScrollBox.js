import React from 'react';
import styled from 'styled-components';

const ScrollBox = styled.section`
    padding: 1em;
    overflow-y: scroll;
    position: fixed;
    bottom: 10px;
    top: 230px;
    width: ${props => props.width || "500px"};
    height: ${props => props.height || "500px"};
    z-index: 0;
`

/* const ScrollBox = (props) => {
    //return props.children;  //how to return everything between the two <Scroll> tags

    return (

        <div className="scrollBox" style={{height: props.height}}>
            {props.children}
        </div>

    );
} */

export default ScrollBox;