import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FocusTrap from "focus-trap-react";
import { FormField, Input } from "@fluentui/react-northstar";
import { useNavigate } from 'react-router-dom';
import closeIcon from "../../../asset/images/cross-white.png";
// import "../header/header-modal.scss";

const EditDatePickerModal = (props)=>{

    const{close, data} = props;
    console.log("Check Input in edit component", data);

    const initialValues = {
        datepickerLabel: data.datepickerLabel,
        Choice_DateType: data.Choice_DateType,
        Choice_BoxSize: data.Choice_BoxSize,
        Choice_Theme: data.Choice_Theme,
    }
    //console.log("Check Initial values in edit component", initialValues);

    const [inputs, setInputs] = useState(initialValues);
    const navigate = useNavigate()
    const [inputErrors, setInputErrors] = useState({});
    const [isBtnCheck, setBtnCheck] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };

    const DatePickerProps = {
        DateLabel: inputs.datepickerLabel,
        Choice_DateType: inputs.datepickerType,
        Choice_BoxSize: inputs.boxSize,
        Choice_Theme: inputs.theme,
    };


    const checkValidation = (values) => {

        let errors = {};

        if (values.datepickerLabel == undefined || values.datepickerLabel === '') {
            errors.datepickerLabel = "Label for date picker is required"; 
        } else if (values.datepickerLabel !== undefined) {
            if(values.datepickerLabel.length > 15){
                errors.datepickerLabel = "Label for date picker should be shorter"; 
            } 
        }

        if(values.Choice_DateType === undefined || values.Choice_DateType === ""){
            errors.datepickerType = "Please select the type of Date Picker from the dropdown";
        }

        if(values.Choice_BoxSize === undefined || values.Choice_BoxSize === ""){
            errors.boxsize = "Please select the type of Date Picker from the dropdown";
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
        setBtnCheck(true);
        console.log("Inputs Sent!!!", inputs);
        navigate("/formcomponents/datepicker", {state: {inputs}});
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
                <p>Date Picker</p>
                    <button className="close-button" aria-label="close edit date picker modal" onClick={close}>
                        <img src={closeIcon}></img>
                    </button>
                </div>

            <div className="modal-container button-modal-conatiner">
    
            <div className="input-field-container">
                <FormField className="form-modal__content">
                    <label
                    className="wbh-modal__label"
                    aria-label="Text for the Date picker label Asterik-Required"
                    for="datepickerLabel"
                    >
                    Text for the Label of Date Picker: <span className="asterik">*</span> 
                    </label>
                    <Input
                        id="datepickerLabel"
                        className="text_modal__input"
                        autoComplete="off"
                        name="datepickerLabel"
                        maxLength="15"
                        value={inputs.datepickerLabel} 
                        onChange={handleChange}
                        aria-required="true"
                    />   
                    <p className='error' aria-atomic="true">{inputErrors.datepickerLabel}</p>
                </FormField>
            </div>

            <div className="input-field-container theme-field">
                <div className="modal-checkbox">
                <FormField className="modal-content-theme">
                    <label for="Choice_DateType" aria-label="Edit the date picker type Asterik-Required"> 
                    <p>Please select the date picker type.<span className="asterik">*</span> </p>
                    </label>
                        <select name="Choice_DateType" id="Choice_DateType" value={inputs.Choice_DateType} onChange={handleChange}>
                            <option value="">--</option>
                            <option value="date">Date</option>
                            <option value="time">Time</option>
                            <option value="date-time">Date-Time</option>
                        </select>
                </FormField>
                </div>
                <p className="error">{inputErrors.datepickerType}</p>
            </div>

            <div className="input-field-container theme-field">
                <div className="modal-checkbox">
                <FormField className="modal-content-theme">
                    <label for="Choice_BoxSize" aria-label="Edit box size for date picker Asterik-Required"> 
                    <p>Please select box size of the Date Picker: <span className="asterik">*</span> </p>
                    </label>
                        <select name="Choice_BoxSize" id="Choice_BoxSize" value={inputs.Choice_BoxSize} onChange={handleChange}>
                            <option value="">--</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </select>
                </FormField>
                </div>
                <p className="error">{inputErrors.boxsize}</p>
            </div>


            <div className="input-field-container theme-field">
                <div className="modal-checkbox">
                <FormField className="modal-content-theme">
                    <label for="Choice_Theme" aria-label="Edit the theme for the date picker Asterik-Required"> 
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
                    <Link state={DatePickerProps} className="btn btn-primary btn-lg" onClick={OnSubmit}>
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

export default EditDatePickerModal;