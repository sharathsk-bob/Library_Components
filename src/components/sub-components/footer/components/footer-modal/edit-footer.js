import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";

import FocusTrap from "focus-trap-react";

import { FormField, Input } from "@fluentui/react-northstar";
import closeIcon from "../../../../asset/images/cross-white.png";
import "./footer-modal.scss";

const EditFooterModal =(props)=>{
	
  const [errorMsgEdit, setErrorMsgEdit] = useState({});
  const [multiselectOption, setMultiselectOption] = useState();


	const{close, data} = props;
	   

  const navigationFooter = useNavigate();
  const [footerData, setFooterData] = useState(data);
console.log(footerData, "footer dataa");


  const handleSubmit = (event) => {
    console.log(event, "event");
    if (event.target.id ==="text") {
      setFooterData({ ...footerData, textValue: event.target.value });
    } else if (event.target.name === "icon-value") {
      setFooterData({ ...footerData, iconsValue: event.target.value });
    } else if(event.target.id === "theme") {
      setFooterData({ ...footerData, footertheme: event.target.value });
    }
  };

  const handleSelect =(options)=>{
setMultiselectOption(options);
setFooterData({...footerData, multiselectValue: multiselectOption
})
  };
  
  let editError = {};
  //  let headerProps ={
  //   headerData
  //  };
  const footerProps = footerData;
//  ]
const onSubmit =  (event)=>{
  event.preventDefault();
  // const checkEditValid =   checkValidation();
  // setHeaderProps(headerData);


  // if(checkEditValid){
   
    close();
    // console.log( headerProps.headerData, "err value");
    navigationFooter("/footer", {state: {footerProps}});
    
  // }
 
   
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
        <p> Edit Footer</p>
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
                value={footerData.textValue}
                onChange={handleSubmit}
              />
              
            </label>
            {/* {errorMsg.title ?<span className="error">{errorMsg.title}</span>:""} */}
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
                  checked={footerData.iconsValue === "Yes"}
                onChange={handleSubmit}
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
                  checked={footerData.iconsValue === "No"}
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
        {footerData.iconsValue === "Yes"?
        <div className="input-field-container multi-field">
          <p>Please select the social icons <span className="asterik">*</span> </p>
          <div className="modal-checkbox modal-select">
            <FormField className="modal-content-theme">
             <lable>
            <Multiselect
  isObject={false}
  onKeyPressFn={function noRefCheck(){}}
  onRemove={function noRefCheck(){}}
id ="multiselect"
  selectedValues={footerData.multiselectValue}
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
          {/* {errorMsg.theme ? <span className="error">{errorMsg.theme}</span>: ""} */}
        </div>
        :""}
        <div className="input-field-container theme-field">
          
          <div className="modal-checkbox modal-select">
            <FormField className="modal-content-theme">
             
            <label for="theme" aria-label="Select theme Asterik-Required"> 
            <p>Please select the theme colour.<span className="asterik">*</span> </p>
  <select name="theme" id="theme" value={footerData.themeValue}
                // onChange={(event) => setFootertheme(event.target.value)}
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

 export default EditFooterModal;