import React, { useState } from "react";
import "./inputtext.scss";

function InputMains(props) {
     const [charcount, setCharCount]= useState(0);
    const { inputVals }=props;
    console.log(inputVals, "valuessssssss");
  return (
   <div className= "input-output ">
    <div   className= {`form-floating ${inputVals?.boxsizeValue == "100"?"full-width":inputVals?.boxsizeValue == "75"?"width-option":inputVals?.boxsizeValue == "50"?"halfwidth":inputVals?.boxsizeValue == "25"?"one-fourth":"" }`}>
  <input
    type={inputVals.typeValue}
    className= {`form-control form-control-lg ${inputVals?.themeValue == "Dark"?"Dark":inputVals?.themeValue == "cg1"?"cg1":inputVals?.themeValue == "cg2"?"Cg2":inputVals?.themeValue == "Normal"?"light-theme":"" }`}
    id="firstName"
    placeholder="First name"
    autocomplete="off"
    maxLength="50"
    onChange={e => setCharCount(e.target.value.length)}
  />
  <label for="firstName">{inputVals.labelValue}</label>
  
  <div class="form-floating-bottom px-3">
  <span class="form-control-char-size">{charcount}/50</span>
  </div>
</div>
</div>
  )
}

export default InputMains;