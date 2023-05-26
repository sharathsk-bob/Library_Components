import React from 'react';
import "./inputtext.scss";

function InputMains(props) {
    
    const { inputVals }=props;
    console.log(inputVals, "valuessssssss");
  return (
   <div className="input-output">
    <div  class="form-floating">
  <input
    type={inputVals.typeValue}
    class="form-control form-control-lg"
    id="firstName"
    placeholder="First name"
    autocomplete="off"
  />
  <label for="firstName">{inputVals.labelValue}</label>
  
  <div class="form-floating-bottom px-3"></div>
</div>
</div>
  )
}

export default InputMains;