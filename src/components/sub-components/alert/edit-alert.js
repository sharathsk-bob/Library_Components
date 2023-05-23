import React, { useState } from "react";
import { Link } from "react-router-dom";
import FocusTrap from "focus-trap-react";
import { FormField, Input } from "@fluentui/react-northstar";
import { useNavigate } from 'react-router-dom';
import closeIcon from "../../asset/images/cross-white.png";
import "../header/header-modal.scss";

const EditAlertModal = (props)=>{

    const{close, data} = props;
    console.log("Check Input", data);

    const initialValues = {
        alerttext: data.alerttext,
        Choice_Alerttype: data.Choice_Alerttype,
        // Choice_HeaderIf: data.Choice_HeaderIf,
        // alerthead: data.alerthead,
        Choice_Width: data.Choice_Width,
        Choice_Theme: data.Choice_Theme,
    }

    const [inputs, setInputs] = useState(initialValues);
    const navigate = useNavigate()

    const [inputErrors, setInputErrors] = useState({});
    const [isBtnCheck, setBtnCheck] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };

    const AlertProps = {
        alerttext: inputs.alerttext,
        Choice_Alerttype: inputs.Choice_Alerttype,
        // Choice_HeaderIf: inputs.Choice_HeaderIf,
        // alerthead: inputs.alerthead,
        Choice_Width: inputs.Choice_Width,
        Choice_Theme: inputs.Choice_Theme,
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

        // if(values.Choice_HeaderIf === ""){
        //     errors.Choice_HeaderIf = "Please make decision for Header field";
        // }

        // if( values.Choice_HeaderIf === "Yes" ) {
        //     if (values.alerthead == undefined || values.alerthead === '' ) {
        //         errors.alerthead = "Alert heading is required";
        //     } else if (values.alerthead !== undefined) {
        //         if(values.alerthead.length > 15){
        //             errors.alerthead = "Alert Heading Text should be shorter"; 
        //         } 
        //     }
        // }   

        if(values.Choice_Alerttype === undefined || values.Choice_Alerttype === ''){
            errors.Choice_Alerttype = "Please select the type of alert from the dropdown";
        }

        if(values.Choice_Width === undefined || values.Choice_Width === ''){
            errors.Choice_Width = "Please select the width value from the dropdown";
        }

        if(values.Choice_Theme === undefined || values.Choice_Theme === ''){
            errors.Choice_Theme = "Please select the theme value from the dropdown";
        }
        return errors;
    };

    async function OnSubmit (e)  {

        e.preventDefault();
        let validerrors= await checkValidation(inputs);
        setInputErrors(validerrors); 
        //console.log("Errors aa rhe kya?????", validerrors);
        if(Object.keys(validerrors).length === 0)
        {
            setBtnCheck(true);
            console.log("Inputs Sent!!!", inputs);
            navigate("/alert", {state: {inputs}});
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
            <p>Alert</p>
                <button className="close-button" aria-label="close edit button modal" onClick={close}>
                    <img src={closeIcon}></img>
                </button>
            </div>

        <div className="modal-container tool-tipcontainer">
        <div className="input-field-container">
            <FormField className="form-modal__content">
                <label
                className="wbh-modal__label"
                aria-label="Edit Text for the Alert Asterik-Required"
                for="alerttext"
                >
                Text for the Alert: <span className="asterik">*</span> 
                <Input
                    id="alerttext"
                    className="text_modal__input"
                    autoComplete="off"
                    name="alerttext"
                    maxLength="50"
                    value={inputs.alerttext} 
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
                <label for="Choice_Alerttype" aria-label="Please select the choice of alert needed Asterik-Required"> 
                <p>Please select the choice of alert needed<span className="asterik">*</span> </p>
                    <select name="Choice_Alerttype" id="Choice_Alerttype" value={inputs.Choice_Alerttype} onChange={handleChange}>
                        <option value="">--</option>         
                        <option value="success">Success</option>
                        <option value="warning">Warning</option>
                        <option value="info">Information</option>
                        <option value="error">Error</option>
                    </select>
                </label>
            </FormField>
            </div>
            <p className="error">{inputErrors.Choice_Alerttype}</p>
        </div>

        {/* <div className="input-field-container logo-field">
            <p>Would you like to have Header in Alert? <span className="asterik">*</span></p>
            <div className="modal-checkbox">
            <FormField className="modal-content-checkbox">
              <label className="modal-label" htmlFor="Choice_HeaderIfyes" aria-label="Select Yes if header is needed Asterik-Required">
                <input
                    id="Choice_HeaderIfyes"
                    className="modal-input"
                    type="radio"
                    value="Yes"
                    name="Choice_HeaderIf"
                    checked={inputs.Choice_HeaderIf === "Yes"}
                    onChange={handleChange}
                />
                <div className="tag">
                  <span className="tag__cat">Yes </span>
                </div>         
              </label>
            </FormField>
            <FormField className="modal-content-checkbox">
              <label className="modal-label" htmlFor="Choice_HeaderIfno" aria-label="Select No if header is not needed">
                <input
                    id="Choice_HeaderIfno"
                    className="modal-input"
                    type="radio"
                    value="No"
                    name="Choice_HeaderIf"
                    checked={inputs.Choice_HeaderIf === "No"}
                    onChange={handleChange}
                />
                <div className="tag">
                  <span className="tag__cat">No</span>
                </div>
              </label>
            </FormField>
          </div>
          <p className="error">{inputErrors.Choice_HeaderIf}</p>
        </div>

    { inputs.Choice_HeaderIf === "Yes" ?
        <div className="input-field-container">
            <FormField className="form-modal__content">
                <label
                className="wbh-modal__label"
                aria-label="Edit Text for the Alert Heading Asterik-Required"
                for="alerthead"
                >
                Text for the Alert Heading: <span className="asterik">*</span> 
                <Input
                    id="alerthead"
                    className="text_modal__input"
                    autoComplete="off"
                    name="alerthead"
                    maxLength="15"
                    value={inputs.alerthead} 
                    onChange={handleChange}
                    aria-required="true"
                    aria-describedby="tooltip-err-text"
                />
                </label>
                <p id="tooltip-err-text" className='error' aria-atomic="true">{inputErrors.alerthead}</p>
            </FormField>
        </div>
        : "" } */}

        <div className="input-field-container size-field" >
            <div className="modal-checkbox">
            <FormField className="modal-content-theme">
                <label for="Choice_Width" aria-label="Select alert width value Asterik-Required"> 
                <p>Please select width of the Button: <span className="asterik">*</span> </p>
                </label>
                    <select name="Choice_Width" id="Choice_Width" value={inputs.Choice_Width} onChange={handleChange}>
                        <option value="">--</option>         
                        <option value="25">25 %</option>
                        <option value="50">50 %</option>
                        <option value="75">75 %</option>
                        <option value="100">100 %</option>
                    </select>
            </FormField>
            </div>
            <p className='error'>{inputErrors.Choice_Width}</p>
        </div>

        <div className="input-field-container theme-field">
            <div className="modal-checkbox">
            <FormField className="modal-content-theme">
                <label for="Choice_Theme" aria-label="Edit the theme for the button Asterik-Required"> 
                <p>Please select the theme colour.<span className="asterik">*</span> </p>
                    <select name="Choice_Theme" id="Choice_Theme" value={inputs.Choice_Theme} onChange={handleChange}>
                        <option value="">--</option>         
                        <option value="Normal">Light</option>
                        <option value="Dark">Dark</option>
                        <option value="cg1">Blue</option>
                        <option value="cg2">Purple</option>
                    </select>
                </label>
            </FormField> 
            </div>
            <p className="error">{inputErrors.Choice_Theme}</p>
        </div>

        <div className="button-section">
            <div className="link-button">
                <Link state={AlertProps} className="btn btn-primary btn-lg" onClick={OnSubmit}>
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

export default EditAlertModal;