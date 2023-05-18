import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FocusTrap from "focus-trap-react";
import { FormField, Input } from "@fluentui/react-northstar";
import { useNavigate } from 'react-router-dom';
import closeIcon from "../../asset/images/cross-white.png";


const TooltipForm =(props)=>{
    const navigate = useNavigate()

    const {close} = props;
    const [inputs, setInputs] = useState({});
    const [inputErrors, setInputErrors] = useState({});

    // const [BorderRadius, setBorderRadius] = useState("");
    // const [BoxShadow, setBoxShadow] = useState("");
    const [themeValue, setThemeValue] = useState();
    const [directionValue, setDirectionValue] = useState();
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

        if (values.icontext == undefined || values.icontext === '') {
        errors.icontext = "Icon Text is required"; 
        } else if (values.icontext !== undefined) {
            if(values.icontext.length > 15){
                errors.icontext = "Icon Text should be shorter"; 
            } 
        }

        if (values.tooltiptext == undefined || values.tooltiptext === '') {
            errors.tooltiptext = "Tooltip Text is required"; 
        } else if (values.tooltiptext !== undefined) {
            if(values.tooltiptext.length > 25){
                errors.tooltiptext = "Tooltip Text should be shorter"; 
            } 
        }   

        if(directionValue === undefined || directionValue === ''){
            errors.direction = "Please select the direction for tooltip from the dropdown";
        } else {
            inputs.Choice_Direction = directionValue;
        }

        if(themeValue === undefined || themeValue === ''){
            errors.theme = "Please select the value from the dropdown";
        } else {
            inputs.Choice_Theme = themeValue;
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
        navigate("/tooltip", {state: {inputs}});
        //window.location.reload(true);
        } else {
        // console.log("Validation Failed >>>> Errors Present", validerrors);
        }
        
    };

    const TooltipProps = {
        IconText: inputs.icontext,
        TooltipText: inputs.tooltiptext,
        Choice_Direction: inputs.direction,
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
            <p>ToolTip</p>
                <button className="close-button" aria-label="close create tooltip modal" onClick={close}>
                    <img src={closeIcon}></img>
                </button>
            </div>

        <div className="modal-container tool-tipcontainer">

        <div className="input-field-container">
            <FormField className="form-modal__content">
                <label
                className="wbh-modal__label"
                aria-label="Text for the Tooltip icon Asterik-Required"
                for="icontext"
                >
                Text for the Tooltip Icon: <span className="asterik">*</span> 
                <Input
                    id="icontext"
                    className="text_modal__input"
                    autoComplete="off"
                    name="icontext"
                    maxLength="15"
                    value={inputs.icontext || ""} 
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
                    value={inputs.tooltiptext || ""} 
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
                <label for="direction" aria-label="Select the direction for the tooltip title to appear Asterik-Required"> 
                <p>Please select the direction to appear the Tooltip title<span className="asterik">*</span> </p>
                    <select name="direction" id="direction"  value={directionValue} onChange={(event) => setDirectionValue(event.target.value)}>
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

        <div className="input-field-container theme-field size-field">
            <div className="modal-checkbox">
            <FormField className="modal-content-theme">
                <label for="theme" aria-label="Select the theme for the button Asterik-Required"> 
                <p>Please select the theme colour.<span className="asterik">*</span> </p>
                    <select name="theme" id="theme"  value={themeValue} onChange={(event) => setThemeValue(event.target.value)}>
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
                <Link state={TooltipProps} props={inputs} className="btn btn-primary btn-lg" onClick={OnSubmit}>
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

export default TooltipForm;