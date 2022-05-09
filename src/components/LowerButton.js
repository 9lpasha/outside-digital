import React from 'react';
import './LowerButton.css';

export let LowerButton = ({finish}) => {
    return (
        <div onClick={() => {finish()}} className="LowerButton">Добавить</div>
    );
}