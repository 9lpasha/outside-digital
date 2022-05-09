import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import {StartButton} from './components/StartButton.js'
import {Tax} from "./components/Tax";
import check from "./images/check.svg";

function App() {

    useEffect(()=>{
        document.body.addEventListener('keydown', (e) => {
            if (e.key == 'Escape'){
                go21()
                console.log('fasfafas')
            }
        })
    },[])

    let [pageNow, setPageNow] = useState(1)
    let [payments, setPayments] = useState([])
    let appComponent = useRef()
    let go22 = function () {
        setPageNow(2)
        appComponent.current.style.background = 'rgba(0, 0, 0, 0.3)'
    }
    let go21 = function () {
        setPageNow(1)
        appComponent.current.style.background = 'linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56'
        setPayments([])
    }
    let [twoButtons, setTwoButtons] = useState({
        first: {
            activity: 'Active',
            background: 'linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56',
            color: 'white'
        },
        second: {
            activity: 'notActive',
            background: '#EEF0F2',
            color: 'black'
        }
    })

    let click2Buttons = function (number) {
        let newTwoButtons = JSON.parse(JSON.stringify(twoButtons))
        newTwoButtons.first.background = '#EEF0F2'
        newTwoButtons.second.background = '#EEF0F2'
        newTwoButtons.first.color = 'black'
        newTwoButtons.second.color = 'black'
        if (number == 'first') {
            newTwoButtons.first.background = 'linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56'
            newTwoButtons.first.color = 'white'
        } else {
            newTwoButtons.second.background = 'linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56'
            newTwoButtons.second.color = 'white'
        }
        setTwoButtons(newTwoButtons)
    }
    let hover2Buttons = function (number) {
        let newTwoButtons = JSON.parse(JSON.stringify(twoButtons))
        if (number == 'first') {
            if (newTwoButtons.first.background == '#EEF0F2')
                newTwoButtons.first.background = '#DFE3E6';
        } else {
            if (newTwoButtons.second.background == '#EEF0F2')
                newTwoButtons.second.background = '#DFE3E6';
        }
        setTwoButtons(newTwoButtons)
    }
    let leave2Buttons = function (number) {
        let newTwoButtons = JSON.parse(JSON.stringify(twoButtons))
        if (number == 'first') {
            if (newTwoButtons.first.background == '#DFE3E6')
                newTwoButtons.first.background = '#EEF0F2';
        } else {
            if (newTwoButtons.second.background == '#DFE3E6')
                newTwoButtons.second.background = '#EEF0F2';
        }
        setTwoButtons(newTwoButtons)
    }
    let addPayments = function () {
        let ZP = document.querySelector('.inputZPinput').value
        if (!isNaN(ZP) && ZP >= 13890) {
            setPayments([])
            console.log(ZP)
            let s = 260000
            while (s > 0) {
                let sum = ZP * 0.13 * 12
                console.log(sum)
                if (sum < s) {
                    let obj = {
                        sum: sum.toFixed(2),
                        checked: 'no',
                        background: ''
                    }
                    setPayments((prev) => {
                        return [...prev, obj]
                    })
                    console.log(sum)
                } else {
                    let obj = {
                        sum: s.toFixed(2),
                        checked: 'no',
                        background: ''
                    }
                    setPayments((prev) => {
                        console.log([...prev, obj]);
                        return [...prev, obj]
                    })
                    console.log(sum)
                }
                s -= sum
            }
            if (document.querySelector('.redElement'))
                document.querySelector('.inputZP').removeChild(document.querySelector('.redElement'))
        } else {
            if (!document.querySelector('.redElement')) {
                let redElement = document.createElement('div')
                redElement.classList.add('redElement')
                redElement.style.color = '#EA0029'
                redElement.style.fontSize = '10px';
                redElement.style.lineHeight = '12px';
                redElement.style.fontWeight = 'normal';
                document.querySelector('.inputZP').insertBefore(redElement, document.querySelector('.calculateButton'))
                if(isNaN(ZP)){
                    redElement.textContent = 'Введите числовое значение'
                }
                else if(ZP == '') {
                    redElement.textContent = 'Поле обязательно для заполнения'
                }
                else if(ZP < 13890){
                    redElement.textContent = 'Введите число, большее чем МРОТ (13890 рублей)'
                }
            }
            else{
                let redElement = document.querySelector('.redElement')
                if(isNaN(ZP)){
                    redElement.textContent = 'Введите числовое значение'
                }
                else if(ZP == '') {
                    redElement.textContent = 'Поле обязательно для заполнения'
                }
                else if(ZP < 13890){
                    redElement.textContent = 'Введите число, большее чем МРОТ (13890 рублей)'
                }
            }
        }
    }

    let checkOneBox = function (number) {
        if (payments[number].checked == 'no') {
            let newPayments = payments.slice()
            newPayments[number].checked = 'yes'
            newPayments[number].background = `no-repeat 0 0/20px 20px url(${check})`
            newPayments[number].border = '0 solid black'
            setPayments([...newPayments])
        } else {
            let newPayments = payments.slice()
            newPayments[number].checked = 'no'
            newPayments[number].background = ''
            newPayments[number].border = '1px solid black'
            setPayments([...newPayments])
        }
    }

    let finish = function () {
        let result = []
        let k = 1
        payments.forEach((el) => {
            if (el.checked == 'yes')
                result.push({
                    sum: el.sum,
                    numYear: k
                })
            k += 1
        })
        setPayments([])
        console.log('Результаты!!!\n')
        result.forEach(el => console.log(el))
    }

    let hei = "calc(100vh)"
    let alIt = "center"
    if (window.innerWidth <= 480) {
        hei = window.innerHeight + 'px'
        alIt = "flex-start"
    }

    if (pageNow == 1)
        return (
            <div ref={appComponent} style={{minHeight: hei, alignItems: alIt}} className="App">
                <StartButton click={go22

                }></StartButton>
            </div>
        );
    if (pageNow == 2)
        return (
            <div ref={appComponent} style={{minHeight: hei, alignItems: alIt}} className="App">
                <Tax go21={go21} addPayments={addPayments} checkOneBox={checkOneBox} payments={payments}
                     twoButtons={twoButtons} click2Buttons={click2Buttons} hover2Buttons={hover2Buttons}
                     leave2Buttons={leave2Buttons} finish={finish}></Tax>
            </div>
        )
            ;
}

export default App;