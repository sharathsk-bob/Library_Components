import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FocusTrap from "focus-trap-react";
import { FormField, Input } from "@fluentui/react-northstar";
import closeIcon from "../../asset/images/cross-white.png";
import "./login.scss";

const LogInModal =(props)=>{ 

    const [userValue, setUserValue] = useState();
    const [passValue, setPassValue] = useState();
    const [formValue, setFormValue] = useState("25%");
    const [themeValue, setThemeValue] = useState("Normal");
    const [errorMsg, setErrorMsg] = useState({});
   
	const{close} = props;
	

  const loginProps = {
   userValue,
  passValue,
   formValue,
   themeValue
  };

  const navigationlogin = useNavigate();
  
  let errors = {};
  


   const checkValidation = (e) => {
    let isValid = true;
    
      
      if(userValue === undefined){
      errors.user = "Lable is required ";
      isValid = false;
      }
      if(passValue === undefined){
        errors.pass = "Lable is required ";
        isValid = false;
        }
     setErrorMsg(errors);
      return isValid;

      
   };
const buttonSubmit =(event)=>{
  event.preventDefault();
  const checkValid =   checkValidation();
  console.log(checkValid, "valid value")

  if (checkValid) {
   
   console.log(loginProps, "propsss");

  navigationlogin("/login", {state: {loginProps}});
  
  }
};
  
return (
  <FocusTrap
			focusTrapOptions={{
				// escapeDeactivates: false
				onDeactivate: close
			}}
		>
  <div className="modal_wapper">
    <div className="modal-content form-modalcontainer">
      <div className="form-header">
        <p>Login Form</p>
        <button className="close-button" aria-label="Close" onClick={close} >
          <img src={closeIcon}></img>
          
        </button>
      </div>

      <div className="modal-container headerModal login-modal">
      <div className="input-field-container">
                <FormField className="form-modal__content">
                  <label
                    className="wbh-modal__label"
                    aria-label="Label for UserName Asterik-Required"
                    for="label-text"
                  >
                    Username Label: <span className="asterik">*</span>
                    <Input
                      id="label-text"
                      className="text_modal__input"
                      autoComplete="off"
                      name="user-label"
                      aria-required="true"
                      maxLength="15"
                      aria-describedby="name-err-title"
                      value={userValue}
                      onChange={(event) => setUserValue(event.target.value)}
                    />
                  </label>
                  {errorMsg.user ?<span className="error">{errorMsg.user}</span>:""}
                </FormField>
              </div>

              <div className="input-field-container">
                <FormField className="form-modal__content">
                  <label
                    className="wbh-modal__label"
                    aria-label="Label for Password Asterik-Required"
                    for="label-password"
                  >
                    Password Label: <span className="asterik">*</span>
                    <Input
                      id="label-password"
                      className="text_modal__input"
                      autoComplete="off"
                      name="password-label"
                      aria-required="true"
                      maxLength="15"
                      aria-describedby="name-err-title"
                      value={passValue}
                      onChange={(event) => setPassValue(event.target.value)}
                    />
                  </label>
                  {errorMsg.pass ?<span className="error">{errorMsg.pass}</span>:""}
                </FormField>
              </div>
      <div className="input-field-container size-field">
                <div className="modal-checkbox">
                  <FormField className="modal-content-theme">
                    <label
                      for="fieldwidth"
                      aria-label="Select button width value Asterik-Required"
                    >
                      <p>
                        Please select the size of the form :{" "}
                        <span className="asterik">*</span>{" "}
                      </p>
                    </label>
                    <select
                      name="btnwidth"
                      id="fieldwidth"
                      value={formValue}
                      onChange={(event) => setFormValue(event.target.value)}
                    >
                      <option value="25%">25 %</option>
                      <option value="50%">50 %</option>
                      <option value="75%">75 %</option>
                      <option value="100%">100 %</option>
                    </select>
                  </FormField>
                </div>
                {/* <p className='error'>{inputErrors.btnWidth}</p> */}
              </div>
        <div className="input-field-container theme-field">
          
          <div className="modal-checkbox modal-select">
            <FormField className="modal-content-theme">
             
            <label for="theme" aria-label="Select theme Asterik-Required"> 
            <p>Please select the theme colour.<span className="asterik">*</span> </p>
  <select name="theme" id="theme"  
                value={themeValue}
                onChange={(event) => setThemeValue(event.target.value)}
                >
        {/* <option value=""></option>          */}
    <option value="Normal" selected>Light</option>
    <option value="Dark">Dark</option>
    <option value="cg1">Blue</option>
    <option value="cg2">Purple</option>
   
  </select>
  </label>
            </FormField>
          
          </div>
          
        </div>
       
        <div className="button-section">
          <div className="link-button margin-button">
            
           <Link

              className="btn btn-primary"
              onClick={buttonSubmit}
            >
              Submit
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  </FocusTrap>
);
};

 export default LogInModal;