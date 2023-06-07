import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FocusTrap from "focus-trap-react";
import { FormField, Input } from "@fluentui/react-northstar";
import closeIcon from "../../asset/images/cross-white.png";
import "./loader-modal.scss";

const LoaderModal =(props)=>{ 

  const [errorMsg, setErrorMsg] = useState({});
  const [loadersizeValue, setLoaderSizeValue] = useState("Small");
  const [themeValue, setThemeValue] = useState("Normal");
  const [loadertype, setLoaderType] = useState("");
  const [ timeoutValue, setTimeOutValue] = useState("1000");
  // const { headerProps, setHeaderProps } = useContext(AppContext);
	const{close} = props;
	

  const loaderProps = {
   loadersizeValue,
   loadertype,
   timeoutValue,
   themeValue
  };

  const navigationloader = useNavigate();
  
  let errors = {};
  


   const checkValidation = () => {
    let isValid = true;
    
      
      if(loadertype === ""){
      errors.loadertype = "Please select the above field";
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
   
   console.log(loaderProps, "propsss");

  navigationloader("/loader", {state: {loaderProps}});
  
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
        <p>Loader</p>
        <button className="close-button" aria-label="Close" onClick={close} >
          <img src={closeIcon}></img>
          
        </button>
      </div>

      <div className="modal-container headerModal loaderMoadl">
      

        <div className="input-field-container type-field">
          <p>Select the type of loader<span className="asterik">*</span> </p>
          <div className="modal-checkbox">
            <FormField className="modal-content-checkbox">
              <label className="modal-label" aria-label="Select the type of loader ">
                <input
                  className="modal-input"
                  type="radio"
                  value="Horizontal"
                  name="loadertype"
                  checked={ loadertype === "Horizontal"}
                  onChange={(e) => {
                    setLoaderType("Horizontal");
                  }}
                />
                <div className="tag">
                  <span className="tag__cat">Horizontal </span>
                </div>
              </label>
            </FormField>
            <FormField className="modal-content-checkbox">
              <label className="modal-label"  aria-label=" Select Circular ">
                <input
                  className="modal-input"
                  type="radio"
                  value="Circular"
                  name="loadertype"
                  checked={ loadertype === "Circular"}
                  onChange={(e) => {
                    setLoaderType("Circular");
                  }}
                />
                <div className="tag">
                  <span className="tag__cat">Circular</span>
                </div>
              </label>
            </FormField>
          
          </div>
          {/* {errorMsg.appLogo ? <span className="error">{errorMsg.appLogo}</span>: ""} */}
        </div>
      <div className="input-field-container size-field">
                <div className="modal-checkbox">
                  <FormField className="modal-content-theme">
                    <label
                      for="timeout"
                      aria-label="Select timeout value Asterik-Required"
                    >
                      <p>
                        Please select the timeout value
                        <span className="asterik">*</span>{" "}
                      </p>
                    </label>
                    <select
                      name="timeout"
                      id="timeout"
                      value={timeoutValue}
                      onChange={(event) => setTimeOutValue(event.target.value)}
                    >
                      <option value="1000">1000ms</option>
                      <option value="2000">2000ms</option>
                      <option value="5000">5000ms</option>
                     
                    </select>
                  </FormField>
                </div>
                {/* <p className='error'>{inputErrors.btnWidth}</p> */}
              </div>
      <div className="input-field-container size-field">
                <div className="modal-checkbox">
                  <FormField className="modal-content-theme">
                    <label
                      for="fieldwidth"
                      aria-label="Select button width value Asterik-Required"
                    >
                      <p>
                        Please select the size of the input box:{" "}
                        <span className="asterik">*</span>{" "}
                      </p>
                    </label>
                    <select
                      name="btnwidth"
                      id="fieldwidth"
                      value={loadersizeValue}
                      onChange={(event) => setLoaderSizeValue(event.target.value)}
                    >
                      <option value="small">Small</option>
                      <option value="medium">Medium</option>
                      <option value="large">Large</option>
                     
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
  <select name="theme" id="theme"  value={themeValue}
                onChange={(event) => setThemeValue(event.target.value)}>
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

 export default LoaderModal;