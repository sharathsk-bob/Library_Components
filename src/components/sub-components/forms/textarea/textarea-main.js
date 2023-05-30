import React, { useState } from "react";
// import "./inputtext.scss";

function TextArea(props) {

    const [charcount, setCharCount]= useState(0);
    const { TextAreaProps } = props;
    console.log(TextAreaProps, "valuessssssss");

    return (
    <div className= "input-output ">
        <div className= {`form-floating `}>
        <textarea
            className= {`form-control form-control-lg ${TextAreaProps?.themeValue == "Dark"?"Dark":TextAreaProps?.themeValue == "cg1"?"Cg1":TextAreaProps?.themeValue == "cg2"?"Cg2":TextAreaProps?.themeValue == "Normal"?"Normal":"" }`}
            id="textBox"
            placeholder="textBox"
            autocomplete="off"
            maxLength="50"
            onChange={e => setCharCount(e.target.value.length)}
        />
        <label for="textBox">{TextAreaProps.textareaLabel}</label>
        
        <div class="form-floating-bottom px-3">
            <span class="form-control-char-size">{charcount}/50</span>
        </div>
        </div>
    </div>
  )
}

export default TextArea;