import React from 'react';
import './ScrollBox.css'

const ScrollBox = (props) => {
    //return props.children;  //how to return everything between the two <Scroll> tags

    return (

        <div className="scrollBox" style={{height: props.height}}>
            {props.children}
        </div>

    );
}

export default ScrollBox;