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
    const [isBtnCheck, setBtnCheck] = useState(false);

    const { open: openAlert, close: closeAlert, ModalWrapper: ModalWrapperAlert } = useModal();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };

    const checkValidation = (values) => {

        let errors = {};

        if (values.alerttext == undefined || values.alerttext === '') {
        errors.alerttext = "Alert Text is required"; 
        } else if (values.alerttext !== undefined) {
            if(values.alerttext.length > 20){
                errors.alerttext = "Alert Text should be shorter"; 
            } 
        }

        if(alertType === undefined || alertType === ''){
            errors.alerttype = "Please select the choice for alert from the dropdown";
        } else {
            inputs.Choice_Alerttype = alertType;
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
        // navigate("/alert");
        // alert("This is success!!!");
        // <AlertComponent {...inputs}/>
        //openAlert( {props} );

        } else {
        }
        
    };

    const AlertProps = {
        AlertText: inputs.alerttext,
        Choice_Alerttype: inputs.alerttype,
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
                    maxLength="20"
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
                        <option value="alertinfo">Information and Messages</option>
                        <option value="alertaction">Confirmation Popup</option>
                    </select>
                </label>
            </FormField>
            </div>
            <p className="error">{inputErrors.alerttype}</p>
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
                <Link to="/alert" props={inputs} element={<AlertComponent/>} className="btn btn-primary btn-lg" onClick={OnSubmit}>
                    Submit
                </Link>
            </div>
        </div>

        </div>
        </div>
    </div>
    </FocusTrap>

    <ModalWrapperAlert >
        <AlertComponent close={closeAlert} data={inputs} />
    </ModalWrapperAlert >
    </>
    );
};

export default AlertForm;