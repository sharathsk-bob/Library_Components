import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FormField, Input, Alert, TextArea, SplitButton, itemLayoutSlotClassNames } from "@fluentui/react-northstar";

import closeIcon from "../../../asset/images/cross-icon.png";
import "./header-modal.scss";

const HeaderModal =(props)=>{
	const [titleValue, setTitleValue] = useState();
  const [profileValue, setProfileValue] = useState();
  const [cgLogoValue, setCgLogoValue] = useState("");
  const [imageValue, setImageValue] = useState(null);
  const [errorMsg, setErrorMsg] = useState({});
  const [isValid, setIsValid] = useState(false);
	const{close} = props;
	

  const headerProps = {
   titleValue,
   profileValue,
   cgLogoValue,
   imageValue 
  };


  // const handleImageValue = (event) => {
  //   const file = event.target.files[0];
  //   setImageValue(file);
  // };
  let errors = {};


   const checkValidation = () => {
     if (titleValue === undefined) {
       errors.title = "Title is required";
     }
     if (profileValue === undefined) {
       errors.profile = "Profile Name is required";
     }
     if (cgLogoValue === "") {
       errors.logoValue = "Please select the above field";
     } else {
       setIsValid(true);
     }

     setErrorMsg(errors);
   };
  
return (
  <div className="modal_wapper">
    <div className="modal-content form-modalcontainer">
      <div className="form-header">
        <p>Header</p>
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
             Application Title *
              <Input
                id="title"
                className="text_modal__input"
                autoComplete="off"
                name="title"
                aria-required="true"
                maxLength="25"
                aria-describedby="name-err-title"
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
              aria-label="Title for Asterik-Required"
              for="profile name"
            >
              Profile Name *
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
          <p>Will you like to have Capgemini logo in the header section</p>
          <div className="modal-checkbox">
            <FormField className="modal-content-checkbox">
              <label className="modal-label">
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
              <label className="modal-label">
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
        
        {/* <div className="input-field-container">
			<p>Would you like to have App logo in the header section. If Yes please add the image.</p>
      <FormField className="form-modal__content">
            <label
              className="wbh-modal__label"
              aria-label="Title for Asterik-Required"
              for="img"
            >
              <Input
          type="file"
          accept="image/*"
          id="img"
          onChange={handleImageValue}
          
        />
            </label>
          </FormField>
        </div> */}
        <div className="button-section">
          <div className="link-button">
            {isValid == true ?
            <Link
              to="header"
              state={headerProps}
              className="btn btn-primary btn-lg"
              onClick={checkValidation}
            >
              Submit
            </Link>
            :<Link
            // to="header"
            state={headerProps}
            className="btn btn-primary btn-lg"
            onClick={checkValidation}
          >
            Submit
          </Link>}
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

 export default HeaderModal;