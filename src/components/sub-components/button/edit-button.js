import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CustomButton } from "./CustomButton";
import { FormField, Input } from "@fluentui/react-northstar";

import closeIcon from "../../asset/images/cross-white.png";
import "../header/components/header-modal.scss";

const EditButtonModal = (props)=>{

    const{close, data} = props;
    const [inputs, setInputs] = useState(data);

    console.log("Check Input", inputs);
    const [inputErrors, setInputErrors] = useState({});

    const [BorderRadius, setBorderRadius] = useState("");
    const [BoxShadow, setBoxShadow] = useState("");
    const [themeValue, setThemeValue] = useState();
    const [sizeValue, setSizeValue] = useState();
    const [isBtnCheck, setBtnCheck] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        // console.log("event :", e.target.type);
        setInputs({ ...inputs, [name]: value });
        //console.log("In handleChange>>>",inputs);
    };

    const checkValidation = (values) => {

        let errors = {};
        // console.log("Errors are being checked");

        // if (!values.btnnum) {
        // errors.btnnum = "Number of buttons needs to be specified!"; 
        // }

        if (values.btntext == undefined) {
        errors.btntext = "Text is required!"; 
        } else if (values.btntext !== undefined) {
            if(values.btntext.length > 15){
                errors.btntext = "Text should be shorter!"; 
            } 
        }   

        if (BorderRadius === "") {
            errors.BorderRadius = "Please make decision for Border Radius field";
        } else {
            inputs.Choice_BorderRadius = BorderRadius;
        }

        if (values.border_radius == undefined) {
            errors.border_radius = "Please enter a Border Radius value";
        } else if (values.border_radius != undefined) {
            if (values.border_radius < 0) {
                errors.border_radius = "Please enter a positive Border Radius value";
            } else if (values.border_radius > 15) {
                errors.border_radius = "Border Radius shouldn't exceed 15px";
            }
        }
        
        // if (!values.border_width) { 
        // errors.border_width = "Please enter a Border width value";
        // }
       
        if(BoxShadow === ""){
            errors.BoxShadow = "Please make decision for Box Shadow field";
        } else {
            inputs.Choice_BoxShadow = BoxShadow;
        }

        // if (!values.box_shadow) { 
        //     errors.box_shadow = "Please enter a Box Shadow value"; 
        // } 
    
        if (sizeValue === undefined) { 
            errors.size = "Please select a button size";
        } else {
            inputs.Choice_Size = sizeValue;
        }

        if(themeValue === undefined){
            errors.theme = "Please select the value from the dropdown";
        }

        // console.log("In Validation function>>>",errors);  
        return errors;
    };

    async function OnSubmit (e)  {

        e.preventDefault();
        let validerrors= await checkValidation(inputs);
        setInputErrors(validerrors);

        //console.log("OnSubmit>>>",Object.keys(validerrors).length);

        if(Object.keys(validerrors).length === 0)
        {
        // console.log("Validation Success >>>> Errors Gone", validerrors);
        //alert("Successfully Submitted");
        setBtnCheck(true);
        console.log("Inputs Sent!!!", inputs);
        //window.location.reload(true);
        } else {
        // console.log("Validation Failed >>>> Errors Present", validerrors);
        }
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
            {/* <p>
            Please select the attributes according your preference to create Customized Button.
            </p> */}
  
        <div className="input-field-container">
            <FormField className="form-modal__content">
                <label
                className="wbh-modal__label"
                aria-label="Text for the Button Asterik-Required"
                for="btntext"
                >
                Text for the Button: <span className="asterik">*</span> 
                <Input
                    id="btntext"
                    className="text_modal__input"
                    autoComplete="off"
                    name="btntext"
                    value={""} 
                    onChange={handleChange}
                    aria-required="true"
                    // aria-describedby="name-err-title"
                />
                </label>
                <p className='error'>{inputErrors.btntext}</p>
            </FormField>
        </div>

        <div className="input-field-container logo-field">
            <p>Would you like to have Border Radius for Button?</p>
            <div className="modal-checkbox">
            <FormField className="modal-content-checkbox">
              <label className="modal-label">
                <input
                    className="modal-input"
                    type="radio"
                    value="Yes"
                    name="FilterType"
                    checked={BorderRadius === "Yes"}
                    onChange={(e) => {
                        setBorderRadius("Yes");
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
                    checked={BorderRadius === "No"}
                    onChange={(e) => {
                        setBorderRadius("No");
                    }}
                />
                <div className="tag">
                  <span className="tag__cat">No</span>
                </div>
              </label>
            </FormField>
          </div>
          <p className="error">{inputErrors.BorderRadius}</p>
        </div>

        <div className="input-field-container">
            <FormField className="form-modal__content">
                <label
                className="modal__label"
                aria-label="Border Radius Asterik-Required"
                for="border_radius"
                >
                Border Radius for the Button: <span className="asterik">*</span> 
                <Input
                    id="border_radius"
                    type="number" 
                    className="text_modal__input"
                    autoComplete="off"
                    name="border_radius"
                    aria-required="true"
                    value={""} 
                    onChange={handleChange}         
                />
                </label>
                <p className='error'>{inputErrors.border_radius}</p>
            </FormField>
        </div>

        {/* <div className="input-field-container">
            <FormField className="form-modal__content">
                <label
                className="modal__label"
                aria-label="Border Width Asterik-Required"
                for="border_width"
                >
                Border Width for the Button:
                <Input
                    id="border_width"
                    type="number" 
                    className="modal__input"
                    autoComplete="off"
                    name="border_width"
                    aria-required="true"
                    value={inputs.border_width || ""} 
                    onChange={handleChange}         
                />
                </label>
                <p className='error'>{inputErrors.border_width}</p>
            </FormField>
        </div> */}

        <div className="input-field-container logo-field">
            <p>Would you like to have Box Shadow for Button?</p>
            <div className="modal-checkbox">
            <FormField className="modal-content-checkbox">
              <label className="modal-label">
                <input
                    className="modal-input"
                    type="radio"
                    value="Yes"
                    name="FilterType"
                    checked={BoxShadow === "Yes"}
                    onChange={(e) => {
                        setBoxShadow("Yes");
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
                    checked={BoxShadow === "No"}
                    onChange={(e) => {
                        setBoxShadow("No");
                    }}
                />
                <div className="tag">
                  <span className="tag__cat">No</span>
                </div>
              </label>
            </FormField>
          </div>
          <p className="error">{inputErrors.BoxShadow}</p>
        </div>

        {/* <div className="input-field-container">
            <FormField className="form-modal__content">
                <label
                className="modal__label"
                aria-label="Title for Asterik-Required"
                for="box_shadow"
                >
                Box Shadow for the Button:
                <Input
                    id="box_shadow"
                    type="number" 
                    className="modal__input"
                    autoComplete="off"
                    name="box_shadow"
                    aria-required="true"
                    value={inputs.box_shadow || ""} 
                    onChange={handleChange}         
                />
                </label>
                <p className='error'>{inputErrors.box_shadow}</p>
            </FormField>
        </div> */}

        <div className="input-field-container">
            <div className="modal-checkbox">
            <FormField className="modal-content-theme">
                <label for="size"> 
                <p>Please select size of the Button: <span className="asterik">*</span> </p>
                    <select name="size" id="size"  value={sizeValue} onChange={(event) => setSizeValue(event.target.value)}>
                        <option value="">--</option>         
                        <option value="0.5em">0.5 em</option>
                        <option value="1em">1 em</option>
                        <option value="Half width">Half width</option>
                        <option value="Full width">Full width</option>
                    </select>
                </label>
            </FormField>
            </div>
            <p className='error'>{inputErrors.size}</p>
        </div>

        <div className="input-field-container theme-field">
            <div className="modal-checkbox">
            <FormField className="modal-content-theme">
                <label for="theme"> 
                <p>Please select the theme colour.<span className="asterik">*</span> </p>
                    <select name="theme" id="theme"  value={themeValue} onChange={(event) => setThemeValue(event.target.value)}>
                        <option value="">--</option>         
                        <option value="Normal">Normal</option>
                        <option value="Dark">Dark</option>
                        <option value="cg1">Capgemini-blue</option>
                        <option value="cg2">Capgemini-purple</option>
                    </select>
                </label>
            </FormField>
            </div>
            <p className="error">{inputErrors.theme}</p>
        </div>

        
            
        {/* {
            isBtnCheck ? <CustomButton{...inputs}/> : "Button not displayed"
        } */}

        <div className="button-section">
            <div className="link-button">
                {/* <button className="btn btn-primary btn-lg" onClick={OnSubmit}> 
                    Submit
                </button> */}
                {isBtnCheck == true ?
                    <Link to="button" state={inputs} className="btn btn-primary btn-lg" onClick={checkValidation}>
                        Update
                    </Link>
                    :
                    <Link state={inputs} className="btn btn-primary btn-lg" onClick={checkValidation}>
                        Update
                    </Link>
                }
            </div>
        </div>
        
        </div>
        </div>
    </div>
    );
};

export default EditButtonModal;