import React, {useState} from "react";
import { Container, Screen, Current, Previous, Button } from "./Styled";

export default function Calculator() {

    // storing state for values using array constant
    const [previous, setPrevious] = useState ('')
    const [current, setCurrent] = useState ('')
    const [operation, setOperation] = useState ('')

    // displays called operations
    const appendValue = (el) => {
        const value = el.target.getAttribute('data')

        //user level: double input prevention 
        if (value == '.' && current.includes('.')) return 
        // concatenate both C(current value on the screen) 
        // & V(data value currently being passed by user) strings 
        setCurrent(current + value) 
    }

    //Handling user deletes
    const handleDelete = () => {
        setCurrent(String(current).slice(0, -1))
    }

    //Clear user screen on request
    const handleAllClear = () => {
        setCurrent('')
        setPrevious('')
        setOperation('')
    }

    // handles on request user operations example addition
    const chooseOperation = (el) => {
        if(current === '') return
        if(previous !== '') {
            let value = compute();
            setPrevious(value)
        } else{
            setPrevious(current)
        }

        setCurrent('')
        setOperation(el.target.getAttribute('data'))
    }

    const equals = () => {
        let value = compute();
        if(value == undefined || value == null) return

        setCurrent(value)
        setPrevious('')
        setOperation('')
    }

    const compute = () => {
        let result
        // parseFloat: JS string to number dataType convertion
        let previousNumber = parseFloat(previous)
        let currentNumber = parseFloat(current)

        if(isNaN(previousNumber) || isNaN(currentNumber)) return

        switch(operation) {
            case '÷':
                result = previousNumber / currentNumber;
                break;
            case '×':
                result = previousNumber * currentNumber;
                break;
            case '+':
                result = previousNumber + currentNumber;
                break;
            case '-':
                result = previousNumber - currentNumber;
                break;
            default:
                return
        }

        return result;
    }

    
    return (
        <Container>
            <Screen>
                <Previous>{previous} {operation}</Previous>
                <Current>{current}</Current>
            </Screen>
            <Button onClick={handleAllClear} gridSpan={2} control>AC</Button>
            <Button onClick={handleDelete} control>DEL</Button>
            <Button data={'÷'} onClick={chooseOperation} operation>÷</Button>
            <Button data={'7'} onClick={appendValue}>7</Button>
            <Button data={'8'} onClick={appendValue}>8</Button>
            <Button data={'9'} onClick={appendValue}>9</Button>
            <Button data={'×'} onClick={chooseOperation} operation>×</Button>
            <Button data={'4'} onClick={appendValue}>4</Button>
            <Button data={'5'} onClick={appendValue}>5</Button>
            <Button data={'6'} onClick={appendValue}>6</Button>
            <Button data={'+'} onClick={chooseOperation} operation>+</Button>
            <Button data={'1'} onClick={appendValue}>1</Button>
            <Button data={'2'} onClick={appendValue}>2</Button>
            <Button data={'3'} onClick={appendValue}>3</Button>
            <Button data={'-'} onClick={chooseOperation} operation>-</Button>
            <Button data={'.'} period onClick={appendValue}>.</Button>
            <Button data={'0'} onClick={appendValue}>0</Button>
            <Button gridSpan={2} onClick={equals} equals>=</Button>

        </Container>
    )
}