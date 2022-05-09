import React from 'react';
import './AllPayments.css'
import {OnePayment} from "./OnePayment";

export let AllPayments = ({info, checkFunc}) => {
        if(info.length != 0) {
            let payments = []
            for(let i = 0; i < info.length; i++){
                payments.push(<OnePayment key={i} checkFunc={checkFunc} num={i+1} info={info[i]}></OnePayment>)
            }
            return (
                <div className="AllPayments">
                    <div className="beginText">Итого можете внести в качестве досрочных:</div>
                    {payments}
                </div>
            );
        } else{
            return (
                <div className="AllPayments"></div>
            );
        }
}