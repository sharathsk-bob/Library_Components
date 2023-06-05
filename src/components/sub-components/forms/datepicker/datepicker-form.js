import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FocusTrap from "focus-trap-react";
import { FormField, Input } from "@fluentui/react-northstar";
import { useNavigate } from 'react-router-dom';
import closeIcon from "../../../asset/images/cross-white.png";


const DatePickerForm =(props)=>{
    const navigate = useNavigate()

    const {close} = props;
    const [inputs, setInputs] = useState({});
    const [inputErrors, setInputErrors] = useState({});
    const [themeValue, setThemeValue] = useState();
    const [dpWidth, setdpWidth] = useState();
    const [datepickerType, setDatepickerType] = useState();
    const [isBtnCheck, setBtnCheck] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
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

        if(datepickerType === undefined || datepickerType === ''){
            errors.datepickerType = "Please select the type of Date Picker from the dropdown";
        } else {
            inputs.Choice_DateType = datepickerType;
        }

        if(dpWidth === undefined || dpWidth === ''){
            errors.dpWidth = "Please select the width of Date Picker from the dropdown";
        } else {
            inputs.Choice_DPWidth = dpWidth;
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
        setBtnCheck(true);
        console.log("Inputs Sent!!!", inputs);
        navigate("/formcomponents/datepicker", {state: {inputs}});
        } else {
        }
        
    };

    const DatePickerProps = {
        DateLabel: inputs.datepickerLabel,
        Choice_DateType: inputs.datepickerType,
        Choice_DPWidth: inputs.dpWidth,
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
            <p>Date Picker</p>
                <button className="close-button" aria-label="close create date picker modal" onClick={close}>
                    <img src={closeIcon}></img>
                </button>
            </div>

        <div className="modal-container tool-tipcontainer">

        <div className="input-field-container">
            <FormField className="form-modal__content">
                <label
                className="wbh-modal__label"
                aria-label="Text for the Date picker label Asterik-Required"
                for="datepickerLabel"
                >
                Text for the Label of Date Picker: <span className="asterik">*</span> 
                <Input
                    id="datepickerLabel"
                    className="text_modal__input"
                    autoComplete="off"
                    name="datepickerLabel"
                    maxLength="15"
                    value={inputs.datepickerLabel || ""} 
                    onChange={handleChange}
                    aria-required="true"
                />
                </label>
                <p className='error' aria-atomic="true">{inputErrors.datepickerLabel}</p>
            </FormField>
        </div>

        <div className="input-field-container theme-field size-field">
            <div className="modal-checkbox">
            <FormField className="modal-content-theme">
                <label for="datepickertype" aria-label="Select the date picker type Asterik-Required"> 
                <p>Please select the date picker type<span className="asterik">*</span> </p>
                    <select name="datepickertype" id="datepickertype"  value={datepickerType} onChange={(event) => setDatepickerType(event.target.value)}>
                        <option value="">--</option>         
                        <option value="date">Date</option>
                        <option value="time">Time</option>
                        <option value="date-time">Date-Time</option>
                    </select>
                </label>
            </FormField>
            </div>
            <p className="error">{inputErrors.datepickerType}</p>
        </div>

        <div className="input-field-container size-field" >
            <div className="modal-checkbox">
            <FormField className="modal-content-theme">
                <label for="dpwidth" aria-label="Select date picker width value Asterik-Required"> 
                <p>Please select width of the date picker: <span className="asterik">*</span> </p>
                </label>
                    <select name="dpwidth" id="dpwidth"  value={dpWidth} onChange={(event) => setdpWidth(event.target.value)}>
                        <option value="">--</option>         
                        <option value="25">25 %</option>
                        <option value="50">50 %</option>
                        <option value="75">75 %</option>
                        <option value="100">100 %</option>
                    </select>
            </FormField>
            </div>
            <p className='error'>{inputErrors.dpWidth}</p>
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
                <Link state={DatePickerProps} props={inputs} className="btn btn-primary btn-lg" onClick={OnSubmit}>
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

export default DatePickerForm;