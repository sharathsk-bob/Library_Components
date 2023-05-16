import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../app-context";
import Multiselect from "multiselect-react-dropdown";
import FocusTrap from "focus-trap-react";

import { FormField, Input } from "@fluentui/react-northstar";

import closeIcon from "../../../../asset/images/cross-white.png";
import "./footer-modal.scss";

const FooterModal =(props)=>{
	const [textValue, setTextValue] = useState();
  const [iconsValue, setIconsValue] = useState("");
  const [multiselectValue, setMultiselectValue] = useState();
  const [footertheme, setFootertheme] = useState("Normal");
  const [footerErrorsMsg, setFooterErrorMsg] = useState({});

  
 
	const{close} = props;
	
  const footerProps = {
   textValue,
   multiselectValue,
   iconsValue,
   footertheme
   };
 

 
 const handleSelect = (options)=>{
setMultiselectValue(options);

 };
 let footerErrors = {};
const checkValidation =()=>{
  let isValidFooter = true;
  if (textValue === undefined) {
    footerErrors.title = "Text is required";
    isValidFooter = false;
    // console.log("if condtion for text");
  }
  if (iconsValue === ""){
    footerErrors.icons = "Please select the value";
    isValidFooter = false;
    // console.log("if condtion for sicons");
  }
  if(multiselectValue === undefined && iconsValue === "Yes"){
    footerErrors.multiselect = "Please select the options";
    isValidFooter = false;
    // console.log("if condtion for select");
  }
  console.log(footerErrors, "icon value");
  setFooterErrorMsg(footerErrors);
  return isValidFooter;

};
const navigationFooter = useNavigate();

  const buttonSubmit =(event)=>{
    event.preventDefault();
    const checkFooterValid =   checkValidation();

    console.log(checkFooterValid, "validation");

    if (checkFooterValid) {
   
   
      console.log(footerProps, "value");
     navigationFooter("/footer", {state: {footerProps}})
    }
  };
  
return (
  <FocusTrap
			focusTrapOptions={{
				escapeDeactivates: false
				//onDeactivate: closeModal
			}}
		>
  <div className="modal_wapper">
    <div className="modal-content form-modalcontainer">
      <div className="form-header">
        <p>Footer</p>
        <button className="close-button" aria-label="Close" onClick={close}>
          <img src={closeIcon}></img>
          
        </button>
      </div>

      <div className="modal-container">
        <div className="input-field-container footer-text">
          <FormField className="form-modal__content">
            <label
              className="wbh-modal__label"
              aria-label="Title for Header Asterik-Required"
              for="text"
            >
              Text : <span className="asterik">*</span> 
              <Input
                id="text"
                className="text_modal__input"
                autoComplete="off"
                name="text"
                aria-required="true"
                maxLength="25"
                // aria-describedby="name-err-title"
                value={textValue}
                onChange={(event) => setTextValue(event.target.value)}
              />
              
            </label>
            {footerErrorsMsg.title ?<span className="error">{footerErrorsMsg.title}</span>:""}
          </FormField>
        </div>
        <div className="input-field-container footer-modal">
          <p>Would you like to have Socal Icons in the header section <span className="asterik">*</span> </p>
          <div className="modal-checkbox">
            <FormField className="modal-content-checkbox">
              <label className="modal-label" aria-label="Would you like to have social icons Select yes ">
                <input
                  className="modal-input"
                  type="radio"
                  value="Yes"
                  name="icon-value"
                  checked={iconsValue === "Yes"}
                  onChange={(e) => {
                   setIconsValue("Yes");
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
                  name="icon-value"
                  checked={iconsValue === "No"}
                  onChange={(e) => {
                    setIconsValue("No");
                  }}
                />
                <div className="tag">
                  <span className="tag__cat">No</span>
                </div>
              </label>
            </FormField>
          
          </div>
          {footerErrorsMsg.icons ? <span className="error">{footerErrorsMsg.icons}</span>: ""}
        </div>
        {iconsValue === "Yes"?
        <div className="input-field-container multi-field">
          <p>Please select the social icons <span className="asterik">*</span> </p>
          <div className="modal-checkbox modal-select">
            <FormField className="modal-content-theme">
             <lable>
            <Multiselect
  isObject={false}
  onKeyPressFn={function noRefCheck(){}}
  onRemove={function noRefCheck(){}}
 
  onSelect={handleSelect}
  options={[
    "LinkedIn",
    "Tiwtter",
    "Instagram",
    "Facebook",
    "You Tube",
    "Glass door"
  ]}


 
/></lable>
            </FormField>
          
          </div>
          {footerErrorsMsg.multiselect ? <span className="error">{footerErrorsMsg.multiselect}</span>: ""}
        </div>
        :""}
        <div className="input-field-container theme-field">
          
          <div className="modal-checkbox modal-select">
            <FormField className="modal-content-theme">
             
            <label for="theme" aria-label="Select theme Asterik-Required"> 
            <p>Please select the theme colour.<span className="asterik">*</span> </p>
  <select name="theme" id="theme"  value={footertheme}
                onChange={(event) => setFootertheme(event.target.value)}>
        {/* <option value=""></option>          */}
    <option value="Normal" selected>Light</option>
    <option value="Dark">Dark</option>
    <option value="cg1">Blue</option>
    <option value="cg2">Purple</option>
   
  </select>
  </label>
            </FormField>
          
          </div>
          {/* {errorMsg.theme ? <span className="error">{errorMsg.theme}</span>: ""} */}
        </div>
        <div className="button-section">
          <div className="link-button margin-button">
            
           <Link

              className="btn btn-primary btn-lg"
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

 export default FooterModal;