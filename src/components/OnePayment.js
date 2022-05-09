import React from 'react';
import './OnePayment.css'

export let OnePayment = ({ num, info, checkFunc}) => {

    return (
        <div className="OnePayment">
            <div onClick={() => {checkFunc(num - 1)}} className="checkbox">
                <div style={{background: info.background}} className="checkboxQuadro"></div>
                <div className="checkboxMoney">{info.sum}</div>
                <div className="checkboxYear">- {num} год</div>
            </div>
            <div className="horLine"></div>
        </div>
    );
}