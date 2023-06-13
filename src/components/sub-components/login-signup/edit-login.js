import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FocusTrap from "focus-trap-react";
import { FormField, Input } from "@fluentui/react-northstar";
import closeIcon from "../../asset/images/cross-white.png";
// import "./header-modal.scss";

const EditLoginModal =(props)=>{
	
  const [errorMsgEdit, setErrorMsgEdit] = useState({});
	const{close, data} = props;
  const navigationlogin = useNavigate();
  const [loginData, setLoginData] = useState(data);
console.log(loginData, "edit propssss");
  const handleSubmit = (event) => {
    const { name, value } = event.target;
    console.log(event.target.name, "target name");
    if (event.target.name === "user-label") {
        setLoginData({ ...loginData, userValue: event.target.value });
      }
      if (event.target.name === "password-label") {
        setLoginData({ ...loginData, passValue : event.target.value });
      }
      if (event.target.name === "btnwidth") {
        setLoginData({ ...loginData, formValue : event.target.value });
      }
      if (event.target.name === "theme") {
        setLoginData({ ...loginData, themeValue : event.target.value });
      }
  };

  let editError = {};
  
  const loginProps = loginData;   
  const checkValidation = () => {
     
     let errorflag = true;
     if(!loginData.userValue ){
        editError.user = "Lable is required ";
        errorflag = false;
        }
        if(!loginData.passValue ){
          editError.pass = "Lable is required ";
          errorflag = false;
          }
   
     setErrorMsgEdit(editError);
     return errorflag;
   };
const onSubmit =  (event)=>{
  event.preventDefault();
  const checkEditValid =   checkValidation();
  console.log(checkEditValid, "valid value");

  if(checkEditValid){
    close();
    navigationlogin("/login", {state: {loginProps}});
  }
}

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
        <button className="close-button" aria-label="Close"  onClick={close} >
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
                      value={loginData.userValue}
                      onChange={handleSubmit}
                    />
                  </label>
                  {errorMsgEdit.user ?<span className="error">{errorMsgEdit.user}</span>:""}
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
                      value={loginData.passValue}
                      onChange={handleSubmit}
                    />
                  </label>
                  {errorMsgEdit.pass ?<span className="error">{errorMsgEdit.pass}</span>:""}
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
                      value={loginData.formValue}
                      onChange={handleSubmit}
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
                value={loginData.themeValue}
                onChange={handleSubmit}
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
              onClick={onSubmit}
            >
              Update
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  </FocusTrap>
);
};

 export default EditLoginModal;