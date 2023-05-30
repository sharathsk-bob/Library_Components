import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FocusTrap from "focus-trap-react";
import { FormField, Input } from "@fluentui/react-northstar";
import { useNavigate } from 'react-router-dom';
import closeIcon from "../../../asset/images/cross-white.png";

const TextAreaForm =(props)=>{
    const navigate = useNavigate()
    const {close} = props;
    const [inputs, setInputs] = useState({});
    const [inputErrors, setInputErrors] = useState({});
    const [themeValue, setThemeValue] = useState();
    const [textboxWidth, setTextboxWidth] = useState();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };

    const checkValidation = (values) => {

        let errors = {};

        if (values.textareaLabel == undefined || values.textareaLabel === '') {
            errors.textareaLabel = "Label for Text area is required"; 
        } else if (values.textareaLabel !== undefined) {
            if(values.textareaLabel.length > 15){
                errors.textareaLabel = "Label for Text area should be shorter"; 
            } 
        }

        if(textboxWidth === undefined || textboxWidth === ''){
            errors.textboxWidth = "Please select the width of Text area from the dropdown";
        } else {
            inputs.Choice_textboxWidth = textboxWidth;
        }

        if(themeValue === undefined || themeValue === ''){
            errors.theme = "Please select the value from the dropdown";
        } else {
            inputs.Choice_Theme = themeValue;
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
        } else {
        }
        
    };

    const TextAreaProps = {
        TextAreaLabel: inputs.textareaLabel,
        Choice_textboxWidth: inputs.textboxWidth,
        Choice_Theme: inputs.theme,
    };


return (
    <FocusTrap
        focusTrapOptions={{
            //escapeDeactivates: false
            onDeactivate: close
        }}
    >
    <div className="modal_wapper">
        <div className="modal-content form-modalcontainer">
            <div className="form-header">
            <p>Text Area</p>
                <button className="close-button" aria-label="close create text area modal" onClick={close}>
                    <img src={closeIcon}></img>
                </button>
            </div>

        <div className="modal-container tool-tipcontainer">

        <div className="input-field-container">
            <FormField className="form-modal__content">
                <label
                className="wbh-modal__label"
                aria-label="Text for the Text area label Asterik-Required"
                for="textareaLabel"
                >
                Text for the Label of Text Area: <span className="asterik">*</span> 
                <Input
                    id="textareaLabel"
                    className="text_modal__input"
                    autoComplete="off"
                    name="textareaLabel"
                    maxLength="15"
                    value={inputs.textareaLabel || ""} 
                    onChange={handleChange}
                    aria-required="true"
                />
                </label>
                <p className='error' aria-atomic="true">{inputErrors.textareaLabel}</p>
            </FormField>
        </div>

        <div className="input-field-container size-field" >
            <div className="modal-checkbox">
            <FormField className="modal-content-theme">
                <label for="textboxWidth" aria-label="Select date picker width value Asterik-Required"> 
                <p>Please select width of the text area: <span className="asterik">*</span> </p>
                </label>
                    <select name="textboxWidth" id="textboxWidth"  value={textboxWidth} onChange={(event) => setTextboxWidth(event.target.value)}>
                        <option value="">--</option>         
                        <option value="25">25 %</option>
                        <option value="50">50 %</option>
                        <option value="75">75 %</option>
                        <option value="100">100 %</option>
                    </select>
            </FormField>
            </div>
            <p className='error'>{inputErrors.textboxWidth}</p>
        </div>

        <div className="input-field-container theme-field size-field">
            <div className="modal-checkbox">
            <FormField className="modal-content-theme">
                <label for="theme" aria-label="Select the theme for the date picker Asterik-Required"> 
                <p>Please select the theme colour.<span className="asterik">*</span> </p>
                    <select name="theme" id="theme"  value={themeValue} onChange={(event) => setThemeValue(event.target.value)}>
                        <option value="">--</option>         
                        <option value="Normal">Light</option>
                        <option value="Dark">Dark</option>
                        <option value="cg1">Blue</option>
                        <option value="cg2">Purple</option>
                    </select>
                </label>
            </FormField>
            </div>
            <p className="error">{inputErrors.theme}</p>
        </div>

        <div className="button-section">
            <div className="link-button">
                <Link state={TextAreaProps} props={inputs} className="btn btn-primary btn-lg" onClick={OnSubmit}>
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

export default TextAreaForm;