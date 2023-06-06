import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FocusTrap from "focus-trap-react";
import { FormField, Input } from "@fluentui/react-northstar";
import closeIcon from "../../../asset/images/cross-white.png";


const EditFileModal =(props)=>{
	
  
  
    const{close, data} = props;
    const navigationeditFile = useNavigate();
    const [fileData, setFileData] = useState(data);
    const [errorMsgEdit, setErrorMsgEdit] = useState({});
   

     const handleSubmit = (event) => {
       const { name, value } = event.target;
       console.log(name, "event value");
       if (event.target.name === "label-text") {
         setFileData({ ...fileData, selectlabelValue: event.target.value });
       }
       if (event.target.name === "fileUpload") {
        setFileData({ ...fileData, typeValue: event.target.value });
       }
       if (event.target.name === "btnwidth") {
        setFileData({ ...fileData, selectsizeValue : event.target.value });
       }
       if (event.target.name === "theme") {
        setFileData({ ...fileData, themeValue: event.target.value });
       }
     };
  
     let editError = {};
     const fileProps = fileData;  
 const checkValidation =()=>{
  let errorflag = true;
  if (!fileData.selectlabelValue) {
    editError.editTitle = "Label text is required";
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
    navigationeditFile("", {state: {fileProps}});
  }
}
//   console.log(inputData, "edit dataa");
  return (
    <FocusTrap
    focusTrapOptions={{
      // escapeDeactivates: false
      onDeactivate: close
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
                      value={fileData.selectlabelValue }
                      onChange={handleSubmit}
                    />
                  </label>
                  {errorMsgEdit.editTitle ?<span className="error">{errorMsgEdit.editTitle}</span>:""}
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
                  checked={fileData.typeValue === "Single"}
                  onChange={handleSubmit}
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
                  checked={fileData.typeValue === "Multiple"}
                  onChange={handleSubmit}
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
                      value={fileData.selectsizeValue }
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
                        value={fileData.themeValue}
                        onChange={handleSubmit}
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
  
   export default EditFileModal;