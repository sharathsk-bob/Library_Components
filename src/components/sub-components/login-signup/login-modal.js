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
    const [captialValue, setCapitalValue] = useState("");
    const [numericValue, setNumericValue] = useState("");
    const [specialValue, setSpecialValue] = useState("");
    const [minRange, setMinRange] = useState("");
    const [maxRange, setMaxRange] = useState("");
    const [errorMsg, setErrorMsg] = useState({});
   
	const{close} = props;
	

  const loginProps = {
   userValue,
  passValue,
   formValue,
   captialValue,
   numericValue,
   specialValue,
   themeValue,
   minRange,
   maxRange
  };

  const navigationlogin = useNavigate();
  
  let errors = {};
  


   const checkValidation = (e) => {
    let isValid = true;
    
      
      if(userValue === undefined){
      errors.user = "Lable is required ";
      isValid = false;
      }
      if(captialValue === ""){
        errors.capitalvalue = "Please select the above field";
        isValid = false;
      }
      if(specialValue === ""){
        errors.smallvalue = "Please select the above field";
        isValid = false;
      }
      if(numericValue === ""){
        errors.numbervalue = "Please select the above field";
        isValid = false;
      }
      if(passValue === undefined){
        errors.pass = "Lable is required ";
        isValid = false;
        }
        if(minRange === ""){
          errors.min = "Please select the minimum range ";
        isValid = false; 
        }else if(minRange != ""){
          if (minRange < 8) {
            errors.min = "Minimum character should not be less than 8";
            isValid = false; 
          }
           else if (minRange > 15) {
            errors.min ="Minimum character range should not be greater than 15";
            isValid = false; 
        }
      }
        if(maxRange === ""){
          console.log("if max condtion");
          errors.max= "Please select the maximum range ";
        isValid = false; 
        }else if(maxRange != ""){
          if (maxRange <8) {
            errors.max = "Maximum character should be not be less than 8";
            isValid = false; 
          
          
          } else if (maxRange > 15) {

            errors.max ="Maximum character range should not be greater than 15";
            isValid = false; 
        }
        }
     setErrorMsg(errors);
      return isValid;

      
   };
const buttonSubmit =(event)=>{
  event.preventDefault();
  const checkValid =   checkValidation();
  console.log(loginProps, "valid value")

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
        <button className="close-button" aria-label="close create login and signup modal" onClick={close} >
          <img alt="close modal" src={closeIcon}></img>
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
              <div className="input-field-container logo-field">
          <p>Would you like to have capital letter validation in password <span className="asterik">*</span> </p>
          <div className="modal-checkbox">
            <FormField className="modal-content-checkbox">
              <label className="modal-label" aria-label="Would you like to have capital letter validation in password Select yes ">
                <input
                  className="modal-input"
                  type="radio"
                  value="Yes"
                  name="capital-letter"
                  checked={captialValue === "Yes"}
                  onChange={(e) => {
                    setCapitalValue("Yes");
                  }}
                />
                <div className="tag"> 
                  <span className="tag__cat">Yes </span>
                </div>
              </label>
            </FormField>
            <FormField className="modal-content-checkbox">
              <label className="modal-label" aria-label="Select No">
                <input
                  className="modal-input"
                  type="radio"
                  value="No"
                  name="capital-letter"
                  checked={captialValue === "No"}
                  onChange={(e) => {
                    setCapitalValue("No");
                  }}
                />
                <div className="tag">
                  <span className="tag__cat">No</span>
                </div>
              </label>
            </FormField>
          
          </div>
          {errorMsg.capitalvalue ? <span className="error">{errorMsg.capitalvalue}</span>: ""}
        </div>
        <div className="input-field-container logo-field">
          <p>Would you like to have special character validation in password <span className="asterik">*</span> </p>
          <div className="modal-checkbox">
            <FormField className="modal-content-checkbox">
              <label className="modal-label" aria-label="Would you like to have special character validation in password Select yes ">
                <input
                  className="modal-input"
                  type="radio"
                  value="Yes"
                  name="small-letter"
                  checked={specialValue === "Yes"}
                  onChange={(e) => {
                    setSpecialValue("Yes");
                  }}
                />
                <div className="tag"> 
                  <span className="tag__cat">Yes </span>
                </div>
              </label>
            </FormField>
            <FormField className="modal-content-checkbox">
              <label className="modal-label" aria-label="Select No">
                <input
                  className="modal-input"
                  type="radio"
                  value="No"
                  name="small-letter"
                  checked={specialValue === "No"}
                  onChange={(e) => {
                    setSpecialValue("No");
                  }}
                />
                <div className="tag">
                  <span className="tag__cat">No</span>
                </div>
              </label>
            </FormField>
          
          </div>
          {errorMsg.smallvalue ? <span className="error">{errorMsg.smallvalue}</span>: ""}
        </div>
        <div className="input-field-container logo-field">
          <p>Would you like to have numeric values validation in password <span className="asterik">*</span> </p>
          <div className="modal-checkbox">
            <FormField className="modal-content-checkbox">
              <label className="modal-label" aria-label="Would you like to have numeric values validation in password Select yes ">
                <input
                  className="modal-input"
                  type="radio"
                  value="Yes"
                  name="numeric-letter"
                  checked={numericValue === "Yes"}
                  onChange={(e) => {
                    setNumericValue("Yes");
                  }}
                />
                <div className="tag"> 
                  <span className="tag__cat">Yes </span>
                </div>
              </label>
            </FormField>
            <FormField className="modal-content-checkbox">
              <label className="modal-label" aria-label="Select No">
                <input
                  className="modal-input"
                  type="radio"
                  value="No"
                  name="numeric-letter"
                  checked={numericValue === "No"}
                  onChange={(e) => {
                    setNumericValue("No");
                  }}
                />
                <div className="tag">
                  <span className="tag__cat">No</span>
                </div>
              </label>
            </FormField>
          
          </div>
          {errorMsg.numbervalue ? <span className="error">{errorMsg.numbervalue}</span>: ""}
        </div>
        <div className="input-field-container">
                    <FormField className="form-modal__content">
                        <label
                        className="modal__label"
                        aria-label="Select the minimum characters range Asterik-Required"
                        for="min-range"
                        >
                       Select the minimum characters range: <span className="asterik">*</span> 
                        </label>
                        <Input
                            id="min-range"
                            type="number" 
                            className="text_modal__input"
                            autoComplete="off"
                            name="min-range"
                            min="0"
                            max="15"
                            aria-required="true"
                            value={minRange}
                            onChange={(event) => setMinRange(event.target.value)}      
                        />
                        
                    </FormField>
                    {errorMsg.min ? <span className="error">{errorMsg.min}</span>: ""}
                </div>
                <div className="input-field-container">
                    <FormField className="form-modal__content">
                        <label
                        className="modal__label"
                        aria-label="Select the maximum characters range Asterik-Required"
                        for="max-range"
                        >
                       Select the maximum characters range: <span className="asterik">*</span> 
                        </label>
                        <Input
                            id="max-range"
                            type="number" 
                            className="text_modal__input"
                            autoComplete="off"
                            name="max-range"
                            min="0"
                            maxLength="15"
                            aria-required="true"
                            value={maxRange}
                            onChange={(event) => setMaxRange(event.target.value)}      
                        />
                        
                    </FormField>
                    {errorMsg.max ? <span className="error">{errorMsg.max}</span>: ""}
                </div>
      <div className="input-field-container size-field">
                <div className="modal-checkbox">
                  <FormField className="modal-content-theme">
                    <label
                      for="fieldwidth"
                      aria-label="Please select the size of the form Asterik-Required"
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