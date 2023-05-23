import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FocusTrap from "focus-trap-react";
import useModal from "../../sub-components/use-modal/use-modal";
import { FormField, Input } from "@fluentui/react-northstar";
import AlertComponent from "./alert";
import closeIcon from "../../asset/images/cross-white.png";


const AlertForm =(props)=>{

    const {close} = props;
    const navigate = useNavigate()

    const [inputs, setInputs] = useState({});
    const [inputErrors, setInputErrors] = useState({});
    const [themeValue, setThemeValue] = useState();
    const [alertType, setAlertType] = useState();
    // const [headerIf, setHeaderIf] = useState("");
    const [alertWidth, setAlertWidth] = useState();
    const [isBtnCheck, setBtnCheck] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };

    const checkValidation = (values) => {

        let errors = {};

        if (values.alerttext == undefined || values.alerttext === '') {
        errors.alerttext = "Alert Text is required"; 
        } else if (values.alerttext !== undefined) {
            if(values.alerttext.length > 50){
                errors.alerttext = "Alert Text should be shorter"; 
            } 
        }

        // if(headerIf === ""){
        //     errors.Headerif = "Please make decision for Header field";
        // } else {
        //     inputs.Choice_HeaderIf = headerIf;
        // }

        // if( headerIf === "Yes" ) {
        //     if (values.alerthead == undefined || values.alerthead === '' ) {
        //         errors.alerthead = "Alert heading is required";
        //     } else if (values.alerthead !== undefined) {
        //         if(values.alerthead.length > 15){
        //             errors.alerthead = "Alert Heading Text should be shorter"; 
        //         } 
        //     }
        // }   

        if(alertType === undefined || alertType === ''){
            errors.alerttype = "Please select the choice for alert from the dropdown";
        } else {
            inputs.Choice_Alerttype = alertType;
        }

        if (alertWidth === undefined) { 
            errors.alertWidth = "Please select a width for button";
        } else {
            inputs.Choice_Width = alertWidth;
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
        navigate("/alert", {state: {inputs}});
        } else {
        }   
    };

    const AlertProps = {
        alerttext: inputs.alerttext,
        Choice_Alerttype: inputs.alerttype,
        // Choice_HeaderIf: inputs.headerIf,
        // alerthead: inputs.alerthead,
        Choice_Width: inputs.Choice_Width,
        Choice_Theme: inputs.theme,
    };

    return (
        <>
        <FocusTrap
            focusTrapOptions={{
                //escapeDeactivates: false
                onDeactivate: close
            }}
        >
        <div className="modal_wapper">
            <div className="modal-content form-modalcontainer">
                <div className="form-header">
                <p>Alert</p>
                    <button className="close-button" aria-label="close create alert modal" onClick={close}>
                        <img src={closeIcon}></img>
                    </button>
                </div>

            <div className="modal-container tool-tipcontainer">

            <div className="input-field-container">
                <FormField className="form-modal__content">
                    <label
                    className="wbh-modal__label"
                    aria-label="Text for the Alert Asterik-Required"
                    for="alerttext"
                    >
                    Text for the Alert: <span className="asterik">*</span> 
                    <Input
                        id="alerttext"
                        className="text_modal__input"
                        autoComplete="off"
                        name="alerttext"
                        maxLength="50"
                        value={inputs.alerttext || ""} 
                        onChange={handleChange}
                        aria-required="true"
                        aria-describedby="alert-err-text"
                    />
                    </label>
                    <p id="alert-err-text" className='error' aria-atomic="true">{inputErrors.alerttext}</p>
                </FormField>
            </div>

            <div className="input-field-container theme-field size-field">
                <div className="modal-checkbox">
                <FormField className="modal-content-theme">
                    <label for="alerttype" aria-label="Please select the choice of alert needed Asterik-Required"> 
                    <p>Please select the choice of alert needed<span className="asterik">*</span> </p>
                        <select name="alerttype" id="alerttype"  value={alertType} onChange={(event) => setAlertType(event.target.value)}>
                            <option value="">--</option>         
                            <option value="success">Success</option>
                            <option value="warning">Warning</option>
                            <option value="info">Information</option>
                            <option value="error">Error</option>
                        </select>
                    </label>
                </FormField>
                </div>
                <p className="error">{inputErrors.alerttype}</p>
            </div>

            {/* <div className="input-field-container logo-field">
                <p>Would you like to have Header in Alert? <span className="asterik">*</span></p>
                <div className="modal-checkbox">
                <FormField className="modal-content-checkbox">
                <label className="modal-label" htmlFor="Headerifyes" aria-label="Select Yes if header is needed Asterik-Required">
                    <input
                        id="Headerifyes"
                        className="modal-input"
                        type="radio"
                        value="Yes"
                        name="Headerif"
                        checked={headerIf === "Yes"}
                        onChange={(e) => {setHeaderIf("Yes");}}
                    />
                    <div className="tag">
                    <span className="tag__cat">Yes </span>
                    </div>            
                </label>
                </FormField>
                <FormField className="modal-content-checkbox" htmlFor="Headerifno" aria-label="Select No if header is not needed">
                <label className="modal-label">
                    <input
                        id="Headerifno"
                        className="modal-input"
                        type="radio"
                        value="No"
                        name="Headerif"
                        checked={headerIf === "No"}
                        onChange={(e) => {setHeaderIf("No");}}
                    />
                    <div className="tag">
                    <span className="tag__cat">No</span>
                    </div>
                </label>
                </FormField>
            </div>
            <p id="btn-err-ifheader" className='error' aria-atomic="true">{inputErrors.Headerif}</p>
            </div> */}

            {/* { headerIf === "Yes" ?
            <div className="input-field-container">
                <FormField className="form-modal__content">
                    <label
                    className="wbh-modal__label"
                    aria-label="Text for the Alert Heading Asterik-Required"
                    for="alerthead"
                    >
                    Text for the Alert Heading: <span className="asterik">*</span> 
                    <Input
                        id="alerthead"
                        className="text_modal__input"
                        autoComplete="off"
                        name="alerthead"
                        maxLength="15"
                        value={inputs.alerthead || ""} 
                        onChange={handleChange}
                        aria-required="true"
                        aria-describedby="alerthead-err-text"
                    />
                    </label>
                    <p id="alerthead-err-text" className='error' aria-atomic="true">{inputErrors.alerthead}</p>
                </FormField>
            </div>
            : ""} */}

            <div className="input-field-container size-field" >
                <div className="modal-checkbox">
                <FormField className="modal-content-theme">
                    <label for="alertwidth" aria-label="Select button width value Asterik-Required"> 
                    <p>Please select width of the Button: <span className="asterik">*</span> </p>
                    </label>
                        <select name="alertwidth" id="alertwidth"  value={alertWidth} onChange={(event) => setAlertWidth(event.target.value)}>
                            <option value="">--</option>         
                            <option value="25">25 %</option>
                            <option value="50">50 %</option>
                            <option value="75">75 %</option>
                            <option value="100">100 %</option>
                        </select>
                </FormField>
                </div>
                <p className='error'>{inputErrors.alertWidth}</p>
            </div>

            <div className="input-field-container theme-field size-field">
                <div className="modal-checkbox">
                <FormField className="modal-content-theme">
                    <label for="theme" aria-label="Select the theme for the button Asterik-Required"> 
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
                    <Link props={inputs} className="btn btn-primary btn-lg" onClick={OnSubmit}>
                        Submit
                    </Link>
                </div>
            </div>

            </div>
            </div>
        </div>
        </FocusTrap>

        </>
    );
};

export default AlertForm;