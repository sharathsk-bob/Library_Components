import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FocusTrap from "focus-trap-react";
import { FormField, Input } from "@fluentui/react-northstar";
import { useNavigate } from 'react-router-dom';
import closeIcon from "../../../asset/images/cross-white.png";
// import "../header/header-modal.scss";

const EditTextAreaModal = (props)=>{

    const{close, data} = props;
    console.log("Check Input in edit component", data);

    const initialValues = {
        textareaLabel: data.textareaLabel,
        Choice_BorderRadius: data.Choice_BorderRadius,
        Choice_textboxWidth: data.Choice_textboxWidth,
        Choice_Theme: data.Choice_Theme,
    }
    //console.log("Check Initial values in edit component", initialValues);

    const [inputs, setInputs] = useState(initialValues);
    const navigate = useNavigate()
    const [inputErrors, setInputErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };

    const TextAreaProps = {
        textareaLabel: inputs.textareaLabel,
        Choice_BorderRadius: inputs.Choice_BorderRadius,
        Choice_textboxWidth: inputs.textboxWidth,
        Choice_Theme: inputs.theme,
    };


    const checkValidation = (values) => {

        let errors = {};

        if (values.textareaLabel == undefined || values.textareaLabel === '') {
            errors.textareaLabel = "Label for date picker is required"; 
        } else if (values.textareaLabel !== undefined) {
            if(values.textareaLabel.length > 15){
                errors.textareaLabel = "Label for date picker should be shorter"; 
            } 
        }

        if (values.Choice_BorderRadius === "") {
            errors.BorderRadius = "Please make decision for Border Radius field";
        }

        if(values.Choice_textboxWidth === undefined || values.Choice_textboxWidth === ""){
            errors.textboxWidth = "Please select the width of Date Picker from the dropdown";
        }  

        if(values.Choice_Theme === undefined || values.Choice_Theme === ""){
            errors.theme = "Please select the value from the dropdown";
        }
        return errors;
    };

    async function OnSubmit (e)  {

        e.preventDefault();
        let validerrors= await checkValidation(inputs);
        setInputErrors(validerrors);

        if(Object.keys(validerrors).length === 0)
        {
        console.log("Inputs Sent!!!", inputs);
        navigate("/formcomponents/textarea", {state: {inputs}});
        close();
        } else {
        }
    };


    return (
        <FocusTrap
            focusTrapOptions={{
            onDeactivate: close
            }}
        >
        <div className="modal_wapper">
            <div className="modal-content form-modalcontainer">
                <div className="form-header">
                <p>Text Area</p>
                    <button className="close-button" aria-label="close edit text area modal" onClick={close}>
                        <img alt="close modal" src={closeIcon}></img>
                    </button>
                </div>

            <div className="modal-container button-modal-conatiner">
    
            <div className="input-field-container">
                <FormField className="form-modal__content">
                    <label
                    className="wbh-modal__label"
                    aria-label="Text for the Text Area label Asterik-Required"
                    for="textareaLabel"
                    >
                    Text for the label of text area: <span className="asterik">*</span> 
                    </label>
                    <Input
                        id="textareaLabel"
                        className="text_modal__input"
                        autoComplete="off"
                        name="textareaLabel"
                        maxLength="15"
                        value={inputs.textareaLabel} 
                        onChange={handleChange}
                        aria-required="true"
                    />   
                    <p className='error' aria-atomic="true">{inputErrors.textareaLabel}</p>
                </FormField>
            </div>

            <div className="input-field-container logo-field">
            <p>Would you like to have border radius for text area?<span className="asterik">*</span></p>
            <div className="modal-checkbox">
            <FormField className="modal-content-checkbox">
              <label className="modal-label" htmlFor="Choice_BorderRadiusyes" aria-label="Select Yes forBorder radius value">
                <input
                    id="Choice_BorderRadiusyes"
                    className="modal-input"
                    type="radio"
                    value="Yes"
                    name="Choice_BorderRadius"
                    checked={inputs.Choice_BorderRadius === "Yes"}
                    onChange={handleChange}
                />
                <div className="tag">
                  <span className="tag__cat">Yes </span>
                </div>         
              </label>
            </FormField>
            <FormField className="modal-content-checkbox">
              <label className="modal-label" htmlFor="Choice_BorderRadiusno" aria-label="Select No for Border radius value">
                <input
                    id="Choice_BorderRadiusno"
                    className="modal-input"
                    type="radio"
                    value="No"
                    name="Choice_BorderRadius"
                    checked={inputs.Choice_BorderRadius === "No"}
                    onChange={handleChange}
                />
                <div className="tag">
                  <span className="tag__cat">No</span>
                </div>
              </label>
            </FormField>
          </div>
          <p className="error">{inputErrors.BorderRadius}</p>
        </div>

            <div className="input-field-container theme-field">
                <div className="modal-checkbox">
                <FormField className="modal-content-theme">
                    <label for="Choice_textboxWidth" aria-label="Edit text area width value Asterik-Required"> 
                    <p>Please select width of the text area: <span className="asterik">*</span> </p>
                    </label>
                        <select name="Choice_textboxWidth" id="Choice_textboxWidth"  value={inputs.Choice_textboxWidth} onChange={handleChange}>
                            <option value="">--</option>         
                            <option value="25">25 %</option>
                            <option value="50">50 %</option>
                            <option value="75">75 %</option>
                            <option value="100">100 %</option>
                        </select>
                </FormField>
                </div>
                <p className="error">{inputErrors.textboxWidth}</p>
            </div>


            <div className="input-field-container theme-field">
                <div className="modal-checkbox">
                <FormField className="modal-content-theme">
                    <label for="Choice_Theme" aria-label="Edit the theme for the text area Asterik-Required"> 
                    <p>Please select the theme colour.<span className="asterik">*</span> </p>
                    </label>
                        <select name="Choice_Theme" id="Choice_Theme" value={inputs.Choice_Theme} onChange={handleChange}>
                            <option value="">--</option>         
                            <option value="Normal">Light</option>
                            <option value="Dark">Dark</option>
                            <option value="cg1">Blue</option>
                            <option value="cg2">Purple</option>
                        </select>
                </FormField>
                </div>
                <p className="error">{inputErrors.theme}</p>
            </div>

            <div className="button-section">
                <div className="link-button">
                    <Link state={TextAreaProps} className="btn btn-primary btn-lg" onClick={OnSubmit}>
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

export default EditTextAreaModal;