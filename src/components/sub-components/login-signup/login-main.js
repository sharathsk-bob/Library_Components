import React, { useState } from 'react';
import useModal from "../../sub-components/use-modal/use-modal";
import { Link } from "react-router-dom";
import ShowSuccess from './showsuccess';
import "./login-main.scss";

function LoginMain(props) {
  const[passWordvalue, setPassWordValue] = useState("");
  const[usernameValue, setUserNameValue] = useState("");
  const[confrimpass, setconfrimPass] = useState("");
  const[passwordError, setpassWordError] = useState({});
  const [passwordType, setPasswordType] = useState("password");
  const [confirmpasswordType, setConfirmPasswordType] = useState("password");
  console.log(props, "props in main");

  const { open: openShow, close: closeShow, ModalWrapper: ModalWrapperShowSuccess } = useModal();


  let passError = {};
  const passwordCheck =()=>{
    let flag= true;
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g;
    
  if(!usernameValue){
    passError.user = " Please enter the user Name";
  flag= false;
  }
  if(!confrimpass){
    passError.confirm = " Please enter the confirm password";
  flag= false;
  }
  if(!passWordvalue){
  console.log("password is empty");
  passError.text=" Please enter the password";
  flag= false;
  }else{
    // console.log("password  not is empty");
  
    if(props.loginVal.captialValue === "Yes"){
      console.log(passWordvalue, confrimpass, "valueeee");
      if(!upperCaseLetters.test(passWordvalue)){
        console.log("password  cpaital matched");
        passError.capital=" Password must contain atleast one capital alphabet";
      flag= false;
      }
    }
    if(props.loginVal.numericValue === "Yes"){
      console.log(passWordvalue, confrimpass, "valueeee");
      if(!numbers.test(passWordvalue)){
        console.log("password numeric matched");
        passError.number=" Password must contain atleast one numeric value ";
      flag= false;
      }
    }
    if(props.loginVal.specialValue === "Yes"){
      console.log(passWordvalue, confrimpass, "valueeee");
      if(!specialChars.test(passWordvalue)){
        console.log("password special matched");
        passError.special=" Password must contain atleast one special character ";
      flag= false;
      }
    }
    if(props.loginVal.minRange > passWordvalue.length || props.loginVal.maxRange < passWordvalue.length){
      console.log("min range",props.loginVal.minRange,passWordvalue.length,props.loginVal.maxRange );
      passError.range=`Password must contain minimum ${props.loginVal.minRange} and maximum ${props.loginVal.maxRange} characters`;
      flag= false;
    }
    if(passWordvalue != confrimpass){
      console.log(passWordvalue, confrimpass, "va;uess");
      flag= false;
      passError.confirm="Confirm password and password value should match";
    }
  }

  setpassWordError(passError);
  //  console.log(flag ,passError, "flag valueee");
      return flag;
      

  };

 const onSubmit =(event)=>{
  event.preventDefault();
  const checkEditValid =   passwordCheck();
  console.log(checkEditValid, "valid value");
  if(checkEditValid){
    // alert("You have login successfully");
    openShow();
  }

 }
 const displayPassword = ()=> {
  if(passwordType ==="password")
      {
       setPasswordType("text")
       
      }else{
        setPasswordType("password")
      }
     
};
const displayConfirmPassword = ()=> {
  if(confirmpasswordType ==="password")
      {
       setConfirmPasswordType("text")
       
      }else{
        setConfirmPasswordType("password")
      }
     
};




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
             value={usernameValue}
             onChange={(event)=> setUserNameValue(event.target.value)}
             
           />
           {/* <label for="firstName">{props.loginVal.userValue}</label> */}
           {passwordError.user? <p className="error">{passwordError.user}</p>: ""}
       </div>
       <p>{props.loginVal.passValue}</p>
       <div  className= "form-floating">
     
       <input
             type={passwordType}
             className= "form-control form-control-lg"
             id="password-set"
             value={passWordvalue}
             onChange={(event) => setPassWordValue(event.target.value)}
             autocomplete="off"
             maxLength="15"
             
           />
           {/* <label for="firstName">{props.loginVal.passValue}</label>  */}
           <div class="form-floating-bottom px-3">
             <span class="form-control-char-size"><input  type="checkbox" onClick={displayPassword} /><span>Show Password</span></span>
           </div>
           
       </div>
       {passwordError.text? <p className="error">{passwordError.text}</p>: ""}
           {passwordError.capital? <p className="error">{passwordError.capital}</p>: ""}
           {passwordError.number? <p className="error">{passwordError.number}</p>: ""}
           {passwordError.special? <p className="error">{passwordError.special}</p>: ""}
           {passwordError.range? <p className="error">{passwordError.range}</p>: ""}
       <p>Confirm Password</p>
       <div className= "form-floating">
      
       <input
             type={confirmpasswordType}
             className= " form-control form-control-lg"
             id="passwordValue"
             value={confrimpass}
             onChange={(event) => setconfrimPass(event.target.value)}
             autocomplete="off"
             maxLength="15"
             
           />
           {/* <label for="firstName">Confirm Password</label>  */}
           <div class="form-floating-bottom px-3">
             <span class="form-control-char-size"><input  type="checkbox" onClick={displayConfirmPassword} /><span>Show Confirm Password</span></span>
           </div>
           {passwordError.confirm? <p className="error">{passwordError.confirm}</p>: ""}
       </div>
       
   </div>
   <div className='login-button'>
     <div className="link-button">
   <button className='submit-button' 
   onClick={onSubmit}
    >
              Login
             
             </button>
             </div>
   </div>
          </div>
        
    

    </div>
  </div>

    <ModalWrapperShowSuccess >
      <ShowSuccess close={closeShow}/>
    </ModalWrapperShowSuccess>
  </>
  );
};

export default LoginMain;