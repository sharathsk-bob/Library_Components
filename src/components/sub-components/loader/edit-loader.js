
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FocusTrap from "focus-trap-react";
import { FormField} from "@fluentui/react-northstar";
import closeIcon from "../../asset/images/cross-white.png";
import "./loader-modal.scss";

const EditLoaderModal =(props)=>{
	
    const { close, data } = props;
    const navigationLoader = useNavigate();

    const [loaderData, setLoaderData] = useState(data);
    const [errorMsgEdit, setErrorMsgEdit] = useState({});
   

    const handleSubmit = (event) => {
       const { name, value } = event.target;
       if (event.target.name === "loadertype") {
         setLoaderData({ ...loaderData, loadertype: event.target.value });
       }
       if (event.target.name === "timeoutValue") {
         setLoaderData({ ...loaderData, timeoutValue: event.target.value });
       }
       if (event.target.name === "loadersizeValue") {
         setLoaderData({ ...loaderData, loadersizeValue: event.target.value });
       }
       if (event.target.name === "theme") {
         setLoaderData({ ...loaderData, themeValue: event.target.value });
       }
    };
  
    let editError = {};
    const loaderProps = loaderData;  

    const checkValidation =()=>{
    let errorflag = true;
    // if (!loaderData.labelValue) {
    //     editError.editTitle = "Label text is required";
    //     errorflag = false;
    // }
    setErrorMsgEdit(editError);
    return errorflag;
    };

    const onSubmit = (event)=>{
        event.preventDefault();
        const checkEditValid = checkValidation();
        console.log(checkEditValid, "valid value");
        if(checkEditValid){
            console.log("edit data gaya barar???????", loaderProps);
            navigationLoader("/loader", {state: {loaderProps}});
            close();
        }
    }
    console.log(loaderData, "edit dataa");

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
                <p> Edit Loader</p>
                <button className="close-button" aria-label="close edit loader modal" onClick={close} >
                    <img src={closeIcon}></img>
                </button>
            </div>

            <div className="modal-container inputModal">
                
                <div className="input-field-container type-field">
                    <p>Select the type of loader<span className="asterik">*</span> </p>
                    <div className="modal-checkbox">
                        <FormField className="modal-content-checkbox type-button" htmlFor="loadertype">
                        <label className="modal-label" aria-label="Select the type of loader ">
                            <input
                            className="modal-input"
                            type="radio"
                            value="Horizontal"
                            name="loadertype"
                            checked={ loaderData.loadertype === "Horizontal" }
                            onChange={handleSubmit}
                            />
                            <div className="tag">
                            <span className="tag__cat">Horizontal </span>
                            </div>
                        </label>
                        </FormField>
                        <FormField className="modal-content-checkbox type-button" htmlFor="loadertype">
                        <label className="modal-label"  aria-label=" Select Circular ">
                            <input
                            className="modal-input"
                            type="radio"
                            value="Circular"
                            name="loadertype"
                            checked={ loaderData.loadertype === "Circular" }
                            onChange={handleSubmit}
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
                        for="timeoutValue"
                        aria-label="Select timeout value Asterik-Required"
                        >
                        <p>
                            Please select the timeout value
                            <span className="asterik">*</span>{" "}
                        </p>
                        </label>
                        <select
                        name="timeoutValue"
                        id="timeoutValue"
                        value={loaderData.timeoutValue}
                        onChange={handleSubmit}
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
                        for="loadersizeValue"
                        aria-label="Select button width value Asterik-Required"
                        >
                        <p>
                            Please select the size of the input box:{" "}
                            <span className="asterik">*</span>{" "}
                        </p>
                        </label>
                        <select
                        name="loadersizeValue"
                        id="loadersizeValue"
                        value={loaderData.loadersizeValue}
                        onChange={handleSubmit}
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
                            value={loaderData.themeValue}
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
  
export default EditLoaderModal;