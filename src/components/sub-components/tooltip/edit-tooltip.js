import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FocusTrap from "focus-trap-react";
import { FormField, Input } from "@fluentui/react-northstar";
import { useNavigate } from 'react-router-dom';
import closeIcon from "../../asset/images/cross-white.png";
import "../header/components/header-modal/header-modal.scss";

const EditTooltipModal = (props)=>{

    const{close, data} = props;
    console.log("Check Input", data);

    const initialValues = {
        icontext: data.icontext,
        tooltiptext: data.tooltiptext,
        Choice_Direction: data.Choice_Direction,
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

    const TooltipProps = {
        icontext: inputs.icontext,
        tooltiptext: inputs.tooltiptext,
        Choice_Direction: inputs.Choice_Direction,
        Choice_Theme: inputs.Choice_Theme,
    };


    const checkValidation = (values) => {

        let errors = {};

        if (values.icontext == undefined || values.icontext === '') {
            errors.icontext = "Text is required!"; 
        } else if (values.icontext !== undefined) {
            if(values.icontext.length > 15){
                errors.icontext = "Text should be shorter!"; 
            } 
        }   

        if (values.tooltiptext == undefined || values.tooltiptext === '') {
        errors.tooltiptext = "Text is required!"; 
        } else if (values.tooltiptext !== undefined) {
            if(values.tooltiptext.length > 25){
                errors.tooltiptext = "Text should be shorter!"; 
            } 
        }   

        if (values.Choice_Direction === undefined || values.Choice_Direction === '') { 
            errors.direction = "Please select the direction for tooltip from the dropdown";
        } 

        if(values.Choice_Theme === undefined || values.Choice_Theme === ''){
            errors.theme = "Please select the theme value from the dropdown";
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
        navigate("/tooltip", {state: {inputs}});
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
            <p>Tooltip</p>
                <button className="close-button" aria-label="close edit button modal" onClick={close}>
                    <img src={closeIcon}></img>
                </button>
            </div>

        <div className="modal-container tool-tipcontainer">
        <div className="input-field-container">
            <FormField className="form-modal__content">
                <label
                className="wbh-modal__label"
                aria-label="Edit Text for the Button Asterik-Required"
                for="icontext"
                >
                Text for the Tooltip Icon: <span className="asterik">*</span> 
                <Input
                    id="icontext"
                    className="text_modal__input"
                    autoComplete="off"
                    name="icontext"
                    maxLength="15"
                    value={inputs.icontext} 
                    onChange={handleChange}
                    aria-required="true"
                    aria-describedby="icon-err-text"
                />
                </label>
                <p id="icon-err-text" className='error' aria-atomic="true">{inputErrors.icontext}</p>
            </FormField>
        </div>

        <div className="input-field-container">
            <FormField className="form-modal__content">
                <label
                className="wbh-modal__label"
                aria-label="Text for the Tooltip title Asterik-Required"
                for="tooltiptext"
                >
                Enter Text to appear in Tooltip:  <span className="asterik">*</span> 
                <Input
                    id="tooltiptext"
                    className="text_modal__input"
                    autoComplete="off"
                    name="tooltiptext"
                    maxLength="25"
                    value={inputs.tooltiptext} 
                    onChange={handleChange}
                    aria-required="true"
                    aria-describedby="tooltip-err-text"
                />
                </label>
                <p id="tooltip-err-text" className='error' aria-atomic="true">{inputErrors.tooltiptext}</p>
            </FormField>
        </div>

        <div className="input-field-container theme-field size-field">
            <div className="modal-checkbox">
            <FormField className="modal-content-theme">
                <label for="Choice_Direction" aria-label="Select the direction for the tooltip title to appear Asterik-Required"> 
                <p>Please select the direction to appear the Tooltip title<span className="asterik">*</span> </p>
                    <select name="Choice_Direction" id="Choice_Direction"  value={inputs.Choice_Direction} onChange={handleChange}>
                        <option value="">--</option>         
                        <option value="bottomright">Bottom-Right</option>
                        <option value="bottom">Bottom</option>
                        <option value="bottomleft">Bottom-Left</option>
                        <option value="left">Left</option>
                        <option value="right">Right</option>
                        <option value="topright">Top-Right</option>
                        <option value="top">Top</option>
                        <option value="topleft">Top-Left</option>
                    </select>
                </label>
            </FormField>
            </div>
            <p className="error">{inputErrors.direction}</p>
        </div>


        <div className="input-field-container theme-field">
            <div className="modal-checkbox">
            <FormField className="modal-content-theme">
                <label for="Choice_Theme" aria-label="Edit the theme for the button Asterik-Required"> 
                <p>Please select the theme colour.<span className="asterik">*</span> </p>
                    <select name="Choice_Theme" id="Choice_Theme" value={inputs.Choice_Theme} onChange={handleChange}>
                        <option value="">--</option>         
                        <option value="Normal">Transparent</option>
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
                <Link state={TooltipProps} className="btn btn-primary btn-lg" onClick={OnSubmit}>
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

export default EditTooltipModal;