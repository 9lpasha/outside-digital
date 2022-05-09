import React, {useEffect, useRef} from 'react';
import './Tax.css';
import {SmallButton2Page} from "./SmallButton2Page";
import {LowerButton} from "./LowerButton";
import close from '../images/Vector.svg';
import {AllPayments} from "./AllPayments";

export let Tax = ({go21, addPayments, checkOneBox, payments, twoButtons, click2Buttons, hover2Buttons, leave2Buttons, finish}) => {

    useEffect(()=>{
        document.querySelector('.App').onmousedown = (e) => {
            const withinBoundaries = e.composedPath().includes(document.querySelector('.Tax'));
            if (!withinBoundaries) {
                go21()
                document.querySelector('.App').onmousedown = {}
            }
        }
    },[])

    let ZPinput = useRef()

    let hei = ""
    if (window.innerWidth <= 480)
        hei = window.innerHeight - 32 + 'px'
    return (
        <div style={{minHeight: hei}} className="Tax">
            <div className="title">
                <div className="titleText">Налоговый вычет</div>
                <img onClick={() => {
                    go21()/*;
                    observer()*/
                }} src={close} width={'40px'} height={'40px'} alt="close" className="close"/>
            </div>
            <div className="description">Используйте налоговый вычет чтобы погасить ипотеку досрочно.<br/>
                Размер налогового вычета составляет не более 13% от своего официального годового дохода.
            </div>
            <div className="inputZP">
                <div onClick={()=>{ZPinput.current.focus()}} className="inputZPtext">Ваша зарплата в месяц</div>
                <input ref={ZPinput} placeholder={'Введите данные'} type='text' className="inputZPinput"></input>
                <div onClick={() => {
                    addPayments()/*;
                    observer()*/
                }} className="calculateButton">Рассчитать
                </div>
            </div>
            <AllPayments checkFunc={checkOneBox} info={payments}></AllPayments>
            <div className="twoButtons">
                <div className="twoButtonsText">Что уменьшаем?</div>
                <div className="flex2buttons">
                    <SmallButton2Page styleProps={`;16px;${twoButtons.first.background}
                ;${twoButtons.first.color};first`}
                                      click={click2Buttons} text={'Платёж'}
                                      hover2Buttons={hover2Buttons}
                                      leave2Buttons={leave2Buttons}></SmallButton2Page>

                    <SmallButton2Page styleProps={`;;${twoButtons.second.background}
                ;${twoButtons.second.color};second`}
                                      click={click2Buttons} text={'Срок'}
                                      leave2Buttons={leave2Buttons}
                                      hover2Buttons={hover2Buttons}></SmallButton2Page>
                </div>
            </div>
            <LowerButton finish={() => {
                finish();
                go21()/*;
                observer()*/
            }}></LowerButton>
        </div>
    );
}