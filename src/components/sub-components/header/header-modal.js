import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FocusTrap from "focus-trap-react";
import { FormField, Input } from "@fluentui/react-northstar";
import closeIcon from "../../asset/images/cross-white.png";
import "./header-modal.scss";

const HeaderModal =(props)=>{
	const [titleValue, setTitleValue] = useState();
  const [profileValue, setProfileValue] = useState();
  const [cgLogoValue, setCgLogoValue] = useState("");
  const [imageValue, setImageValue] = useState("");
  const [profileLogo, setProfileLogo] = useState("");
  const [errorMsg, setErrorMsg] = useState({});
  const [themeValue, setThemeValue] = useState("Normal");
  // const { headerProps, setHeaderProps } = useContext(AppContext);
	const{close} = props;
	

  const headerProps = {
   titleValue,
   profileValue,
   cgLogoValue,
   imageValue,
   profileLogo,
   themeValue
  };

  const navigationheader = useNavigate();
  
  let errors = {};
  


   const checkValidation = () => {
    let isValid = true;
     if (titleValue === undefined) {
       errors.title = "Title is required";
       isValid = false;
     }
     if (profileValue === undefined) {
       errors.profile = "Profile Name is required";
       isValid = false;
     }
     if (cgLogoValue === "") {
       errors.logoValue = "Please select the above field";
       isValid = false;
     }if(imageValue === ""){
      errors.appLogo = "Please select the above field";
      isValid = false;
     }if(profileLogo === ""){
      errors.profileLogovalue = "Please select the above field";
      isValid = false;
     }if(themeValue === undefined){
      
      errors.theme = "Please select the value from the dropdown";
      isValid = false;
     }
     setErrorMsg(errors);
      return isValid;

    
   };
const buttonSubmit =(event)=>{
  event.preventDefault();
  const checkValid =   checkValidation();
  // setHeaderProps(propsValue);
  if (checkValid) {
   
   
   console.log(headerProps, "value");
  navigationheader("/header", {state: {headerProps}});
  
  }else{
    console.log(checkValid,"elsecondition");
  }
  console.log(themeValue, "theme valuee");
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
        <p>Header</p>
        <button className="close-button" aria-label="Close" onClick={close}>
          <img src={closeIcon}></img>
          
        </button>
      </div>

      <div className="modal-container headerModal">
        <div className="input-field-container">
          <FormField className="form-modal__content">
            <label
              className="wbh-modal__label"
              aria-label="Title for Header Asterik-Required"
              for="title"
            >
              Title: <span className="asterik">*</span> 
              <Input
                id="title"
                className="text_modal__input"
                autoComplete="off"
                name="title"
                aria-required="true"
                maxLength="15"
                // aria-describedby="name-err-title"
                value={titleValue}
                onChange={(event) => setTitleValue(event.target.value)}
              />
              
            </label>
            {errorMsg.title ?<span className="error">{errorMsg.title}</span>:""}
          </FormField>
        </div>
        <div className="input-field-container">
          <FormField className="form-modal__content">
            <label
              className="modal__label"
              aria-label="Profile Name Asterik-Required"
              for="profile name"
            >
              Profile Name:<span className="asterik">*</span> 
              <Input
                id="profile name"
                className=" text_modal__input"
                autoComplete="off"
                name="profile name"
                aria-required="true"
                maxLength="10"
                aria-describedby="name-err-title"
                value={profileValue}
                onChange={(event) => setProfileValue(event.target.value)}
              />
              
            </label>
            {errorMsg.profile ? <span className="error">{errorMsg.profile}</span>: ""}
          </FormField>
        </div>
        <div className="input-field-container logo-field">
          <p>Would you like to have Capgemini logo in the header section <span className="asterik">*</span> </p>
          <div className="modal-checkbox">
            <FormField className="modal-content-checkbox">
              <label className="modal-label" aria-label="Would you like to have capegeimi Logo Select yes ">
                <input
                  className="modal-input"
                  type="radio"
                  value="Yes"
                  name="FilterType"
                  checked={cgLogoValue === "Yes"}
                  onChange={(e) => {
                    setCgLogoValue("Yes");
                  }}
                />
                <div className="tag">
                  <span className="tag__cat">Yes </span>
                </div>
              </label>
            </FormField>
            <FormField className="modal-content-checkbox">
              <label className="modal-label" aria-label=" Select No ">
                <input
                  className="modal-input"
                  type="radio"
                  value="No"
                  name="FilterType"
                  checked={cgLogoValue === "No"}
                  onChange={(e) => {
                    setCgLogoValue("No");
                  }}
                />
                <div className="tag">
                  <span className="tag__cat">No</span>
                </div>
              </label>
            </FormField>
          
          </div>
          {errorMsg.logoValue ? <span className="error">{errorMsg.logoValue}</span>: ""}
        </div>
        <div className="input-field-container logo-field">
          <p>Would you like to have App logo in the header section<span className="asterik">*</span> </p>
          <div className="modal-checkbox">
            <FormField className="modal-content-checkbox">
              <label className="modal-label" aria-label="Would you like to have app Logo Select yes ">
                <input
                  className="modal-input"
                  type="radio"
                  value="Yes"
                  name="applogo"
                  checked={imageValue === "Yes"}
                  onChange={(e) => {
                    setImageValue("Yes");
                  }}
                />
                <div className="tag">
                  <span className="tag__cat">Yes </span>
                </div>
              </label>
            </FormField>
            <FormField className="modal-content-checkbox">
              <label className="modal-label"  aria-label=" Select No ">
                <input
                  className="modal-input"
                  type="radio"
                  value="No"
                  name="applogo"
                  checked={imageValue === "No"}
                  onChange={(e) => {
                    setImageValue("No");
                  }}
                />
                <div className="tag">
                  <span className="tag__cat">No</span>
                </div>
              </label>
            </FormField>
          
          </div>
          {errorMsg.appLogo ? <span className="error">{errorMsg.appLogo}</span>: ""}
        </div>
        <div className="input-field-container logo-field">
          <p>Would you like to have profile logo in the header section <span className="asterik">*</span> </p>
          <div className="modal-checkbox">
            <FormField className="modal-content-checkbox">
              <label className="modal-label" aria-label="Would you like to have profile Logo Select yes ">
                <input
                  className="modal-input"
                  type="radio"
                  value="Yes"
                  name="profilelogo"
                  checked={profileLogo === "Yes"}
                  onChange={(e) => {
                    setProfileLogo("Yes");
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
                  name="profilelogo"
                  checked={profileLogo === "No"}
                  onChange={(e) => {
                    setProfileLogo("No");
                  }}
                />
                <div className="tag">
                  <span className="tag__cat">No</span>
                </div>
              </label>
            </FormField>
          
          </div>
          {errorMsg.profileLogovalue ? <span className="error">{errorMsg.profileLogovalue}</span>: ""}
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
          {errorMsg.theme ? <span className="error">{errorMsg.theme}</span>: ""}
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

 export default HeaderModal;