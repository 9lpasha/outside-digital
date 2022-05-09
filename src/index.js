import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let rerendering = () => {
    ReactDOM.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>,
    document.getElementById('root')
    );
    let hei = "calc(100vh)"
    if(window.innerWidth <= 480)
        hei = window.innerHeight + 'px'
    document.body.style.minHeight = hei
    document.getElementById('root').style.minHeight = hei
}

rerendering()
export let observer = () => {
    rerendering()
}