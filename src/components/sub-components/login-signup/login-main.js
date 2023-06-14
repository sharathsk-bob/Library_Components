import React, { useState } from 'react';

import "./login-main.scss";
import { Link } from "react-router-dom";
function LoginMain(props) {
 const[passWordvalue, setPassWordValue] = useState("");
const[confrimpass, setconfrimPass] = useState("");
const[passwordError, setpassWordError] = useState({});
console.log(props, "props in main");

let passError = {};
const passwordCheck =()=>{
  let flag= false;
  var lowerCaseLetters = /[a-z]/g;
   var upperCaseLetters = /[A-Z]/g;
   var numbers = /[0-9]/g;
   const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g;

 if(!passWordvalue){
console.log("password is empty");
passError.text=" Please Enter the password";
flag= false;
 }else{
  console.log("password  not is empty");
 
  if(props.loginVal.captialValue === "Yes"){
    console.log(passWordvalue, confrimpass, "valueeee");
    if(passWordvalue.match(upperCaseLetters)){
      console.log("password  cpaital matched");
      
    flag= true;
    }else{
        passError.text=" Password must contain Capital alphabet ";
        console.log("password not  cpaital matched");
        flag= false;
    }
  }
  if(props.loginVal.numericValue === "Yes"){
    console.log(passWordvalue, confrimpass, "valueeee");
    if(passWordvalue.match(numbers)){
      console.log("password numeric matched");
      
    flag= true;
    }else{
        passError.text=" Password must contain atleast one numeric value ";
        flag= false;
        console.log("password not  numeric matched");
    }
  }
  if(props.loginVal.specialValue === "Yes"){
    console.log(passWordvalue, confrimpass, "valueeee");
    if(passWordvalue.match(specialChars)){
      console.log("password special matched");
      
    flag= true;
    }else{
        passError.text=" Password must contain atleast one special character ";
        flag= false;
        console.log("password not special matched");
    }
  }
  if(props.loginVal.minRange > passWordvalue.length || props.loginVal.maxRange < passWordvalue.length){
    console.log("min range",props.loginVal.minRange,passWordvalue.length,props.loginVal.maxRange );
    passError.text=`Password must contain atleast ${props.loginVal.minRange} and ${props.loginVal.maxRange}`;
    flag= false;
  }else{
    flag= true;
    console.log("else condition");

  }
 
 }

 setpassWordError(passError);
 console.log(flag , "flag valueee");
     return flag;
     

};

//  const onSubmit =(event)=>{
//   event.preventDefault();
//   const checkEditValid =   passwordCheck();
//   console.log(checkEditValid, "valid value");
//  }





  return (
   <>
  <div className='login-container'>

    <div  className={`login-form ${
            props.loginVal?.themeValue === "Dark"
              ? "form-Dark"
              : props.loginVal?.themeValue === "cg1"
              ? "form-Cg1"
              : props.loginVal?.themeValue === "cg2"
              ? "form-Cg2"
              : props.loginVal?.themeValue === "Normal"
              ? "form-Normal"
              : ""
          }`}
        >
          <div 
          className={`login-subcontainer ${
            props.loginVal?.formValue === "100%"
              ? "full-form"
              : props.loginVal?.formValue === "75%"
              ? "width-form"
              : props.loginVal?.formValue === "50%"
              ? "half-form"
              : props.loginVal?.formValue === "25%"
              ? "one-fourth-form"
              : ""
          }`}>
          <div className='form-header'> <p>Login Here</p></div>
   
   <div className='form-container'>
    <p>{props.loginVal.userValue}</p>
       <div className= "form-floating">
      
       <input
             type="text"
             className= " form-control form-control-lg"
             id="firstName"
             // placeholder="First name"
             autocomplete="off"
             maxLength="50"
             
           />
           <label for="firstName">{props.loginVal.userValue}</label>
       </div>
       <p>{props.loginVal.passValue}</p>
       <div  className= "form-floating">
     
       <input
             type="password"
             className= "form-control form-control-lg"
             id="firstName"
             value={passWordvalue}
             onChange={(event) => setPassWordValue(event.target.value)}
             autocomplete="off"
             maxLength="15"
             
           />
           <label for="firstName">{props.loginVal.passValue}</label> 
           <div class="form-floating-bottom px-3">
             <span class="form-control-char-size"></span>
           </div>
           {passwordError.text? <span className="error">{passwordError.text}</span>: ""}
       </div>
       <p>Confirm Password</p>
       <div className= "form-floating">
      
       <input
             type="password"
             className= " form-control form-control-lg"
             id="passwordValue"
             value={confrimpass}
             onChange={(event) => setconfrimPass(event.target.value)}
             autocomplete="off"
             maxLength="15"
             
           />
           <label for="firstName">Confirm Password</label> 
       </div>
        
   </div>
   <div className='login-button'>
     <div className="link-button">
   <button className='submit-button' 
   onClick={passwordCheck}
    >
              Login
             
             </button>
             </div>
   </div>
          </div>
        
    

    </div>

    
  </div>
  </>
  );
};

export default LoginMain;