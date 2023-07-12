import React, { useState } from "react";
import "./FormInput.css"
const FormInput =(props) => {

    const[focused, setFocused] = useState(false);
    const{label,errorMessage, onChange,id, ...inputProps} =props;
    
    const handleFocus =(e) => {
        setFocused(true);    
    };
    return(
    <div className="formInput">
    <label>{label}</label> 
    <input{...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>inputProps.name === "PhoneNumber" && setFocused(true)}
        focused={focus.toString()}/>
    <span >{errorMessage}</span>
    
    </div>
    );

};

export default FormInput