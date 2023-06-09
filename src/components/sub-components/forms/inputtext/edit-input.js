
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FocusTrap from "focus-trap-react";
import { FormField, Input } from "@fluentui/react-northstar";
import closeIcon from "../../../asset/images/cross-white.png";




const EditInputModal =(props)=>{
	
  
  
    const{close, data} = props;
    const navigationeditInput = useNavigate();
    const [inputData, setInputData] = useState(data);
    const [errorMsgEdit, setErrorMsgEdit] = useState({});
   

     const handleSubmit = (event) => {
       const { name, value } = event.target;
      //  console.log(name, "event value");
       if (event.target.name === "label-text") {
         setInputData({ ...inputData, labelValue: event.target.value });
       }
       if (event.target.name === "type") {
         setInputData({ ...inputData, typeValue: event.target.value });
       }
       if (event.target.name === "btnwidth") {
         setInputData({ ...inputData, boxsizeValue: event.target.value });
       }
       if (event.target.name === "theme") {
         setInputData({ ...inputData, themeValue: event.target.value });
       }
     };
  
     let editError = {};
     const inputProps = inputData;  
 const checkValidation =()=>{
  let errorflag = true;
  if (!inputData.labelValue) {
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
    navigationeditInput("", {state: {inputProps}});
  }
}
  console.log(inputData, "edit dataa");
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
          <p> Edit Input-Text</p>
          <button className="close-button" aria-label="close edit input text modal" onClick={close} >
            <img src={closeIcon}></img>
          </button>
        </div>
  
        <div className="modal-container inputModal">
              <div className="input-field-container">
                <FormField className="form-modal__content">
                  <label
                    className="wbh-modal__label"
                    aria-label="Title for Header Asterik-Required"
                    for="label-text"
                  >
                    Label Text: <span className="asterik">*</span>
                    <Input
                      id="label-text"
                      className="text_modal__input" 
                      autoComplete="off"
                      name="label-text"
                      aria-required="true"
                      maxLength="15"
                      // aria-describedby="name-err-title"
                      value={inputData.labelValue}
                      onChange={handleSubmit}
                    />
                  </label>
                  {errorMsgEdit.editTitle ?<span className="error">{errorMsgEdit.editTitle}</span>:""}
                </FormField>
              </div>
              <div className="input-field-container theme-field">
                <div className="modal-checkbox modal-select">
                  <FormField className="modal-content-theme">
                    <label
                      for="type"
                      aria-label="Select theme Asterik-Required"
                    >
                      <p>
                        Please select the type of input text.
                        <span className="asterik">*</span>{" "}
                      </p>
                      <select
                        name="type"
                        id="type"
                        value={inputData.typeValue}
                        onChange={handleSubmit}
                      >
                        <option value="text" selected>
                          Text
                        </option>
                        <option value="email">Email</option>
                        <option value="password">Password</option>
                      </select>
                    </label>
                  </FormField>
                </div>
                {/* {errorMsg.theme ? <span className="error">{errorMsg.theme}</span>: ""} */}
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
                      value={inputData.boxsizeValue}
                      onChange={handleSubmit}
                    >
                      <option value="25" selected>25%</option>
                      <option value="50">50%</option>
                      <option value="75">75%</option>
                      <option value="100">100%</option>
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
                        value={inputData.themeValue}
                        onChange={handleSubmit}
                      >
                       
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
  
   export default EditInputModal;