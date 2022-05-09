import React from 'react';
import './StartButton.css';

export let StartButton = ({click}) => {
    return (
        <div onClick={() => {click()}} className="StartButton">Налоговый вычет</div>
    );
}