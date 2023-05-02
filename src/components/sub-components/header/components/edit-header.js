import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FormField, Input, Alert, TextArea, SplitButton, itemLayoutSlotClassNames } from "@fluentui/react-northstar";

import closeIcon from "../../../asset/images/cross-icon.png";
import "./header-modal.scss";

const EditHeaderModal =(props)=>{
	
  const [errorMsg, setErrorMsg] = useState({});
  const [isValid, setIsValid] = useState(false);
	const{close, data} = props;
	

  
console.log(isValid, "valid value");

  const [headerData,setHeaderData] = useState(data);
const handleSubmit =(event)=>{
// console.log(event.target.id, "onchange");
// const updatevalue =event.target.value;
if(event.target.id === "title"){
    setHeaderData({...headerData, titleValue : event.target.value,
       
    })
}else if(event.target.id === "profile name"){
    setHeaderData({...headerData, profileValue : event.target.value,
       
    })
}else{
    setHeaderData({...headerData, cgLogoValue : event.target.value,
       
    })
}


};
  let errors = {};
console.log(headerData, "valueee");

   const checkValidation = () => {
     if (headerData.titleValue === "") {
        
       errors.title = "Title is required";
     }
     if (headerData.profileValue === "") {
       errors.profile = "Profile Name is required";
     }
     if (headerData.cgLogoValue === "") {
       errors.logoValue = "Please select the above field";
     } else {
       setIsValid(true);
     }

     setErrorMsg(errors);
   };
   console.log(isValid, "valid value");
return (
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
             Application Title *
              <Input
                id="title"
                className="text_modal__input"
                autoComplete="off"
                name="title"
                aria-required="true"
                maxLength="25"
                aria-describedby="name-err-title"
                value={headerData.titleValue}
                onChange={handleSubmit}
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
                value={headerData.profileValue}
                onChange={handleSubmit}
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
          {errorMsg.logoValue ? <span className="error">{errorMsg.logoValue}</span>: ""}
        </div>
        
    
        <div className="button-section">
          <div className="link-button">
            {isValid == true ?
            <Link
              to="header"
              state={headerData}
              className="btn btn-primary btn-lg"
              onClick={checkValidation}
            >
              Submit
            </Link>
            :<Link
            // to="header"
            state={headerData}
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

 export default EditHeaderModal;