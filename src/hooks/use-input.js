import {useState} from "react";

const UseInput = (validateValue) => {

    const [enteredValue, setEnteredValue] = useState('');
    const [isTouch, setIsTouch] = useState(false);
    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouch;

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value)
    };
    const inputFocusHandler = (event) => {
        setIsTouch(true);
    };
    const reset= ()=>{
        setEnteredValue('');
        setIsTouch(false);
    }
    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputFocusHandler,
        reset
    };
};
export default UseInput;