import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FocusTrap from "focus-trap-react";
import { FormField, Input } from "@fluentui/react-northstar";
import closeIcon from "../../../asset/images/cross-white.png";
// import "./input-modal.scss";
// import "../header-modal.scss";
import "./file-select-modal.scss";
const SelectModal =(props)=>{


  const [selectlabelValue, setSelectLabelValue] = useState();
  const [inputerrorMsg, setInputErrorMsg] = useState({});
  const [typeValue, setTypeValue] = useState("");

  const [selectsizeValue, setSelectSizeValue] = useState("25%");
  const [themeValue, setThemeValue] = useState("Normal");
    const{close} = props;



    const fileProps = {
        selectlabelValue,
        typeValue,
       selectsizeValue,
        themeValue,
        
       };

        console.log(fileProps, "props value");
       const navigationFile = useNavigate();
       let errors = {};
       const checkValidation = () => {
        let isValid = true;
         if (selectlabelValue === undefined) {
           errors.title = "Title is required";
           isValid = false;
         }
         if (typeValue === "") {
          errors.logoValue = "Please select the above field";
          isValid = false;
         }
         setInputErrorMsg(errors);
          return isValid;
    
        
       };

       const buttonSubmit =(event)=>{
        event.preventDefault();
        const checkValid =   checkValidation();
        console.log(checkValid, "valid value");
        // setHeaderProps(propsValue);
        if (checkValid) {
            close();
        navigationFile("file", {state: {fileProps}});
        
        }
      };
    return (
      <FocusTrap
        focusTrapOptions={{
          // escapeDeactivates: false
          onDeactivate: close,
        }}
      >
        <div className="modal_wapper">
          <div className="modal-content form-modalcontainer ">
            <div className="form-header">
              <p>File Select</p>
              <button
                className="close-button"
                aria-label="Close"
                onClick={close}
              >
                <img src={closeIcon}></img>
              </button>
            </div>

            <div className="modal-container inputModal select-modal">
              <div className="input-field-container">
                <FormField className="form-modal__content">
                  <label
                    className="wbh-modal__label"
                    aria-label="Title for Header Asterik-Required"
                    for="label-text"
                  >
                    Label Text: <span className="asterik">*</span>
                    <Input
                      id="input-text"
                      className="text_modal__input"
                      autoComplete="off"
                      name="label-text"
                      aria-required="true"
                      maxLength="15"
                      // aria-describedby="name-err-title"
                      value={selectlabelValue}
                      onChange={(event) => setSelectLabelValue(event.target.value)}
                    />
                  </label>
                  {inputerrorMsg.title ?<span className="error">{inputerrorMsg.title}</span>:""}
                </FormField>
              </div>
              <div className="input-field-container type-field">
          <p>Type of file upload<span className="asterik">*</span> </p>
          <div className="modal-checkbox">
            <FormField className="modal-content-checkbox">
              <label className="modal-label" aria-label="Would you like to have app Logo Select yes ">
                <input
                  className="modal-input"
                  type="radio"
                  value="Single"
                  name="fileUpload"
                  checked={typeValue === "Single"}
                  onChange={(e) => {
                    setTypeValue("Single");
                  }}
                />
                <div className="tag">
                  <span className="tag__cat">Single </span>
                </div>
              </label>
            </FormField>
            <FormField className="modal-content-checkbox">
              <label className="modal-label"  aria-label=" Select No ">
                <input
                  className="modal-input"
                  type="radio"
                  value="Multiple"
                  name="fileUpload"
                  checked={typeValue === "Multiple"}
                  onChange={(e) => {
                    setTypeValue("Multiple");
                  }}
                />
                <div className="tag">
                  <span className="tag__cat">Multiple</span>
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
                      for="fieldwidth"
                      aria-label="Select button width value Asterik-Required"
                    >
                      <p>
                        Please select the size of the text box:{" "}
                        <span className="asterik">*</span>{" "}
                      </p>
                    </label>
                    <select
                      name="btnwidth"
                      id="fieldwidth"
                      value={selectsizeValue}
                      onChange={(event) => setSelectSizeValue(event.target.value)}
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
                    <label
                      for="theme"
                      aria-label="Select theme Asterik-Required"
                    >
                      <p>
                        Please select the theme colour.
                        <span className="asterik">*</span>{" "}
                      </p>
                      <select
                        name="theme"
                        id="theme"
                        value={themeValue}
                        onChange={(event) => setThemeValue(event.target.value)}
                      >
                        {/* <option value=""></option>          */}
                        <option value="Normal" selected>
                          Light
                        </option>
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


export default SelectModal;