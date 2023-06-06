import React, { useState } from "react";
import "./textarea.scss";

function TextArea(props) {

    const [charcount, setCharCount]= useState(0);
    const { TextAreaProps } = props;
    console.log(TextAreaProps, "valuessssssss");

    return (
    <div className= "input-output text-output ">
        <div className= {`form-floating `}>
        <textarea
            className= {`form-control form-control-lg textarea-input 
            ${TextAreaProps?.Choice_Theme == "Dark"?"ta-dark":TextAreaProps?.Choice_Theme == "cg1"?"ta-blue":TextAreaProps?.Choice_Theme == "cg2"?"ta-purple":TextAreaProps?.Choice_Theme == "Normal"?"ta-normal":"" }
            ${TextAreaProps?.Choice_BorderRadius == "Yes" ? "cls-bordRadius" : TextAreaProps?.Choice_BorderRadius == "No"?"cls-noRadius":"" }
            ${TextAreaProps?.Choice_textboxWidth == "25"?"ta-w25":TextAreaProps?.Choice_textboxWidth == "50"?"ta-w50":TextAreaProps?.Choice_textboxWidth == "75"?"ta-w75":TextAreaProps?.Choice_textboxWidth == "100"?"ta-w100":"" }`}
            id="textBox"
            placeholder="textBox"
            autocomplete="off"
            maxLength="200"
            rows="4"
            cols="60"
            onChange={e => setCharCount(e.target.value.length)}
        />
        <label for="textBox">{TextAreaProps.textareaLabel}</label>
        
        <div className={`form-floating-bottom px-3
        ${TextAreaProps?.Choice_textboxWidth == "25"?"positionw-25":TextAreaProps?.Choice_textboxWidth == "50"?"positionw-50":TextAreaProps?.Choice_textboxWidth == "75"?"positionw-75":TextAreaProps?.Choice_textboxWidth == "100"?"positionw-100":"" }`}>
            <span class="form-control-char-size">{charcount}/200</span>
        </div>
        </div>
    </div>
  )
}

export default TextArea;