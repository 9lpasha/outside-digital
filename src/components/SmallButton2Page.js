import React from 'react';
import './SmallButton2Page.css';

export let SmallButton2Page = ({ text, click, hover2Buttons, leave2Buttons, styleProps}) => {
    let propMas = styleProps.split(';')

    let myOnClick = () => {
        click(styleProps.split(';')[4])
    }

    let myOnMouseEnter = () => {
        hover2Buttons(styleProps.split(';')[4])
    }

    let myOnMouseLeave = () => {
        leave2Buttons(styleProps.split(';')[4])
    }

    return (
        <div style={{marginLeft: propMas[0],
            marginRight: propMas[1],
            background: propMas[2],
            color: propMas[3]}}
            onClick={() => {myOnClick()}}
            onMouseEnter={() =>{myOnMouseEnter()}}
            onMouseLeave={() => {myOnMouseLeave()}}
            className="SmallButton2Page">{text}</div>
    );
}