import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./login-main.scss";

function LoginMain(props) {
  const[passWordvalue, setPassWordValue] = useState("");
  const[confrimpass, setconfrimPass] = useState("");

  function passwordCheck() {
   console.log(passWordvalue, confrimpass, "valueeee");
   let flag= false;
   var lowerCaseLetters = /[a-z]/g;
   var upperCaseLetters = /[A-Z]/g;
   var numbers = /[0-9]/g;
   console.log(flag, " flagvalueeee");
   if(passWordvalue != undefined){
    if(passWordvalue.match(lowerCaseLetters) &&  passWordvalue.match(upperCaseLetters) && passWordvalue.match(numbers) && passWordvalue.length>=8 && passWordvalue == confrimpass)  {
    
      flag= true;
      console.log(flag," condtiom 1 flagvalueeee");
    } 
    //  if( passWordvalue == confrimpass){
    //   console.log(flag,passWordvalue, confrimpass," condtiom 2 flagvalueeee");
    //  flag= true;
    // }
   }
  
if(flag=== true){
  alert("You have login successfully")


 
}
   

}
// console.log(props, "props in login");
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
        <button className='submit-button' onClick={passwordCheck} >
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