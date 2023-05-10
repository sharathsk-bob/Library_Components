import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../app-context";
import FocusTrap from "focus-trap-react";

import { FormField, Input, Alert, TextArea, SplitButton, itemLayoutSlotClassNames } from "@fluentui/react-northstar";
import closeIcon from "../../../../asset/images/cross-white.png";
import "./header-modal.scss";

const EditHeaderModal =(props)=>{
	
  const [errorMsgEdit, setErrorMsgEdit] = useState({});

  // const { headerProps, setHeaderProps } = useContext(AppContext);
	const{close, data} = props;
	   

  const navigationheader = useNavigate();
  const [headerData, setHeaderData] = useState(data);
  const handleSubmit = (event) => {
    if (event.target.id === "title") {
      setHeaderData({ ...headerData, titleValue: event.target.value });
    } else if (event.target.id === "profile name") {
      setHeaderData({ ...headerData, profileValue: event.target.value });
    } else if (event.target.name === "FilterType") {
      setHeaderData({ ...headerData, cgLogoValue: event.target.value });
    } else if (event.target.name === "applogo") {
      setHeaderData({ ...headerData, imageValue: event.target.value });
    } else if (event.target.name === "profilelogo") {
      setHeaderData({ ...headerData, profileLogo: event.target.value });
    } else {
      setHeaderData({ ...headerData, themeValue: event.target.value });
    }
  };

  
  
  let editError = {};
  //  let headerProps ={
  //   headerData
  //  };
  const headerProps = headerData;
   const checkValidation = () => {
     
     let errorflag = true;
     if (!headerData.profileValue || !headerData.titleValue) {
       if (!headerData.titleValue) {
         editError.editTitle = "Title is required";
         errorflag = false;
       }
       if (!headerData.profileValue) {
         editError.editProfile = "Profile Name is required ";

         errorflag = false;
       }
     }
    //  console.log(editError, "object value");
     setErrorMsgEdit(editError);
     return errorflag;
   };
const onSubmit =  (event)=>{
  event.preventDefault();
  const checkEditValid =   checkValidation();
  // setHeaderProps(headerData);


  if(checkEditValid){
   
    close();
    // console.log( headerProps.headerData, "err value");
    navigationheader("/header", {state: {headerProps}});
    
  }
 
   
}



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
        <p> Edit Header</p>
        <button className="close-button" onClick={close}>
          <img src={closeIcon}></img>
        </button>
      </div>

      <div className="modal-container">
        <div className="input-field-container">
          <FormField className="form-modal__content">
            <label
              className="wbh-modal__label"
              aria-label="Title for Asterik-Required"
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
                aria-describedby="name-err-title"
                value={headerData.titleValue}
                onChange={handleSubmit}
              />
              
            </label>
            {/* {editError.editTitle!=undefined ? <span className="error">{editError.editTitle}</span>:""} */}
          {errorMsgEdit.editTitle ? <span className="error">{errorMsgEdit.editTitle}</span>:""}
          </FormField>
        </div>
        <div className="input-field-container">
          <FormField className="form-modal__content">
            <label
              className="modal__label"
              aria-label="Title for Asterik-Required"
              for="profile name"
            >
              Profile Name: <span className="asterik">*</span> 
              <Input
                id="profile name"
                className=" text_modal__input"
                autoComplete="off"
                name="profile name"
                aria-required="true"
                maxLength="10"
                aria-describedby="name-err-title"
                value={headerData.profileValue}
                onChange={handleSubmit}
              />
              
            </label>
            { errorMsgEdit.editProfile ? <span className="error">{errorMsgEdit.editProfile}</span>: ""}
          </FormField>
        </div>
        <div className="input-field-container logo-field">
          <p>Would you like to have Capgemini logo in the header section <span className="asterik">*</span> </p>
          <div className="modal-checkbox">
            <FormField className="modal-content-checkbox">
              <label className="modal-label">
                <input
                  className="modal-input"
                  type="radio"
                  value="Yes"
                  name="FilterType"
                  checked={headerData.cgLogoValue === "Yes"}
                  onChange={handleSubmit}
                />
                <div className="tag">
                  <span className="tag__cat">Yes </span>
                </div>
              </label>
            </FormField>
            <FormField className="modal-content-checkbox">
              <label className="modal-label">
                <input
                  className="modal-input"
                  type="radio"
                  value="No"
                  name="FilterType"
                  checked={headerData.cgLogoValue === "No"}
                  onChange={handleSubmit}
                />
                <div className="tag">
                  <span className="tag__cat">No</span>
                </div>
              </label>
            </FormField>
          
          </div>
          {/* {errorMsg.logoValue ? <span className="error">{errorMsg.logoValue}</span>: ""} */}
        </div>
        <div className="input-field-container logo-field">
          <p>Would you like to have App logo in the header section<span className="asterik">*</span> </p>
          <div className="modal-checkbox">
            <FormField className="modal-content-checkbox">
              <label className="modal-label">
                <input
                  className="modal-input"
                  type="radio"
                  value="Yes"
                  name="applogo"
                  checked={headerData.imageValue === "Yes"}
                  onChange={handleSubmit}
                />
                <div className="tag">
                  <span className="tag__cat">Yes </span>
                </div>
              </label>
            </FormField>
            <FormField className="modal-content-checkbox">
              <label className="modal-label">
                <input
                  className="modal-input"
                  type="radio"
                  value="No"
                  name="applogo"
                  checked={headerData.imageValue === "No"}
                  onChange={handleSubmit}
                />
                <div className="tag">
                  <span className="tag__cat">No</span>
                </div>
              </label>
            </FormField>
          
          </div>
          {/* {errorMsg.appLogo ? <span className="error">{errorMsg.appLogo}</span>: ""} */}
        </div>
        <div className="input-field-container logo-field">
          <p>Would you like to have profile logo in the header section <span className="asterik">*</span> </p>
          <div className="modal-checkbox">
            <FormField className="modal-content-checkbox">
              <label className="modal-label">
                <input
                  className="modal-input"
                  type="radio"
                  value="Yes"
                  name="profilelogo"
                  checked={headerData.profileLogo === "Yes"}
                  onChange={handleSubmit}
                />
                <div className="tag">
                  <span className="tag__cat">Yes </span>
                </div>
              </label>
            </FormField>
            <FormField className="modal-content-checkbox">
              <label className="modal-label">
                <input
                  className="modal-input"
                  type="radio"
                  value="No"
                  name="profilelogo"
                  checked={headerData.profileLogo === "No"}
                  onChange={handleSubmit}
                />
                <div className="tag">
                  <span className="tag__cat">No</span>
                </div>
              </label>
            </FormField>
          
          </div>
          {/* {errorMsg.profileLogovalue ? <span className="error">{errorMsg.profileLogovalue}</span>: ""} */}
        </div>
        <div className="input-field-container theme-field">
          
          <div className="modal-checkbox">
            <FormField className="modal-content-theme">
             
            <label for="theme"> 
            <p>Please select the theme colour.<span className="asterik">*</span> </p>
  <select name="theme" id="theme"  value={headerData.themeValue}
              onChange={handleSubmit}
                >
                  {/* <option value=""></option> */}
    <option value="Normal"  selected >Transparent</option>
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
          <div className="link-button  update-button">
           
           <Link
              // to="header"
              // state={headerData}
              className="btn btn-primary btn-lg"
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

 export default EditHeaderModal;