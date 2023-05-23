import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FocusTrap from "focus-trap-react";
import { CustomButton } from "./CustomButton";
import { FormField, Input } from "@fluentui/react-northstar";
import { useNavigate } from 'react-router-dom';
import closeIcon from "../../asset/images/cross-white.png";
import ButtonComponent from "./button";
import "../header/header-modal.scss";

const ButtonForm =(props)=>{
    const navigate = useNavigate()

    const {close} = props;
    const [inputs, setInputs] = useState({});
    const [inputErrors, setInputErrors] = useState({});

    const [BorderRadius, setBorderRadius] = useState("");
    const [BoxShadow, setBoxShadow] = useState("");
    const [themeValue, setThemeValue] = useState();
    const [sizeValue, setSizeValue] = useState();
    const [btnWidth, setBtnWidth] = useState();
    const [isBtnCheck, setBtnCheck] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };

    const checkValidation = (values) => {

        let errors = {};

        if (values.btntext == undefined || values.btntext == "") {
        errors.btntext = "Text is required"; 
        } else if (values.btntext !== undefined) {
            if(values.btntext.length > 15){
                errors.btntext = "Text should be shorter"; 
            } 
        }   

        if (BorderRadius === "") {
            errors.BorderRadius = "Please make decision for Border Radius field";
        } else {
            inputs.Choice_BorderRadius = BorderRadius;
        }

        if( BorderRadius === "Yes" ) {
            if (values.border_radius == undefined) {
                errors.border_radius = "Please enter a Border Radius value";
            } else if (values.border_radius != undefined) {
                if (values.border_radius < 0) {
                    errors.border_radius = "Please enter a positive Border Radius value";
                } else if (values.border_radius > 50) {
                    errors.border_radius = "Border Radius shouldn't exceed 50px";
                }
            }
        }     
        
        if (!values.border_width) { 
        errors.border_width = "Please enter a Border width value";
        } else if (values.border_width != undefined) {
            if (values.border_width < 0) {
                errors.border_width = "Please enter a positive Border Width value";
            } else if (values.border_width > 15) {
                errors.border_width = "Border Width shouldn't exceed 15px";
            }
        }
       
        if(BoxShadow === ""){
            errors.BoxShadow = "Please make decision for Box Shadow field";
        } else {
            inputs.Choice_BoxShadow = BoxShadow;
        } 
    
        if (sizeValue === undefined) { 
            errors.size = "Please select a padding value button";
        } else {
            inputs.Choice_Size = sizeValue;
        }

        if (btnWidth === undefined) { 
            errors.btnWidth = "Please select a width for button";
        } else {
            inputs.Choice_Width = btnWidth;
        }

        if(themeValue === undefined){
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
        navigate("/button", {state: {inputs}});
        } else {
        }
        
    };

    const ButtonProps = {
        ButtonText: inputs.btntext,
        Choice_BorderRadius: inputs.Choice_BorderRadius,
        BorderRadius: inputs.border_radius,
        Choice_BoxShadow: inputs.Choice_BoxShadow,
        Choice_Size: inputs.Choice_Size,
        Choice_Width: inputs.Choice_Width,
        Choice_Theme: inputs.theme,
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
            <p>Button</p>
                <button className="close-button" aria-label="close create button modal" onClick={close}>
                    <img src={closeIcon}></img>
                </button>
            </div>

        <div className="modal-container button-modal-conatiner">
  
        <div className="input-field-container">
            <FormField className="form-modal__content">
                <label
                className="wbh-modal__label"
                aria-label="Text for the Button Asterik-Required"
                for="btntext"
                >
                Text for the Button: <span className="asterik">*</span> 
                </label>
                <Input
                    id="btntext"
                    className="text_modal__input"
                    autoComplete="off"
                    name="btntext"
                    maxLength="15"
                    value={inputs.btntext || ""} 
                    onChange={handleChange}
                    aria-required="true"
                    aria-describedby="btn-err-text"
                />
                
                <p id="btn-err-text" className='error' aria-atomic="true">{inputErrors.btntext}</p>
            </FormField>
        </div>

        <div className="input-field-container logo-field">
            <p>Would you like to have Border Radius for Button? <span className="asterik">*</span></p>
            <div className="modal-checkbox">
            <FormField className="modal-content-checkbox">
              <label className="modal-label" aria-label="Select Yes forBorder radius value">
                <input
                    className="modal-input"
                    type="radio"
                    value="Yes"
                    name="Choice_BorderRadius"
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
              <label className="modal-label" aria-label="Select No for Border radius value">
                <input
                    className="modal-input"
                    type="radio"
                    value="No"
                    name="Choice_BorderRadius"
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
          <p id="btn-err-selborder" className="error" aria-atomic="true">{inputErrors.BorderRadius}</p>
        </div>

        { BorderRadius === "Yes" ?
            <div className="input-field-container">
            <FormField className="form-modal__content">
                <label
                className="modal__label"
                aria-label="Border Radius Asterik-Required"
                for="border_radius"
                >
                Border Radius for the Button: <span className="asterik">*</span> 
                </label>
                <Input
                    id="border_radius"
                    type="number" 
                    className="text_modal__input"
                    autoComplete="off"
                    name="border_radius"
                    min="0"
                    aria-required="true"
                    value={inputs.border_radius || ""} 
                    onChange={handleChange}
                    aria-describedby="btn-err-radiusvalue"
                />
                
                <p id="btn-err-radiusvalue" className='error' aria-atomic="true">{inputErrors.border_radius}</p>
            </FormField>
        </div>
        : ""}
        

        <div className="input-field-container">
            <FormField className="form-modal__content">
                <label
                className="modal__label"
                aria-label="Border Width Asterik-Required"
                for="border_width"
                >
                Border Width for the Button: <span className="asterik">*</span> 
                </label>
                <Input
                    id="border_width"
                    type="number" 
                    className="text_modal__input"
                    autoComplete="off"
                    name="border_width"
                    min="0"
                    aria-required="true"
                    value={inputs.border_width || ""} 
                    onChange={handleChange} 
                    aria-describedby="btn-err-widthvalue"           
                />
                
                <p id="btn-err-widthvalue" className='error' aria-atomic="true">{inputErrors.border_width}</p>
            </FormField>
        </div>

        <div className="input-field-container logo-field">
            <p>Would you like to have Box Shadow for Button? <span className="asterik">*</span></p>
            <div className="modal-checkbox">
            <FormField className="modal-content-checkbox">
              <label className="modal-label" htmlFor="Choice_BoxShadowyes" aria-label="Select Yes for Box Shadow property">
                <input
                    id="Choice_BoxShadowyes"
                    className="modal-input"
                    type="radio"
                    value="Yes"
                    name="Choice_BoxShadow"
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
            <FormField className="modal-content-checkbox" htmlFor="Choice_BoxShadowno" aria-label="Select No for Box Shadow property">
              <label className="modal-label">
                <input
                    id="Choice_BoxShadowno"
                    className="modal-input"
                    type="radio"
                    value="No"
                    name="Choice_BoxShadow"
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
          <p id="btn-err-widthvalue" className='error' aria-atomic="true">{inputErrors.BoxShadow}</p>
        </div>

        <div className="input-field-container size-field" >
            <div className="modal-checkbox">
            <FormField className="modal-content-theme">
                <label for="size" aria-label="Select padding value Asterik-Required"> 
                <p>Please select padding of the Button: <span className="asterik">*</span> </p>
                </label>
                    <select name="size" id="size"  value={sizeValue} onChange={(event) => setSizeValue(event.target.value)}>
                        <option value="">--</option>
                        <option value="5">5 px</option>
                        <option value="10">10 px</option>
                        <option value="15">15px</option>
                        <option value="20">20 px</option>
                    </select>
                
            </FormField>
            </div>
            <p className='error'>{inputErrors.size}</p>
        </div>
        

        <div className="input-field-container size-field" >
            <div className="modal-checkbox">
            <FormField className="modal-content-theme">
                <label for="btnwidth" aria-label="Select button width value Asterik-Required"> 
                <p>Please select width of the Button: <span className="asterik">*</span> </p>
                </label>
                    <select name="btnwidth" id="btnwidth"  value={btnWidth} onChange={(event) => setBtnWidth(event.target.value)}>
                        <option value="">--</option>         
                        <option value="25">25 %</option>
                        <option value="50">50 %</option>
                        <option value="75">75 %</option>
                        <option value="100">100 %</option>
                    </select>
                
            </FormField>
            </div>
            <p className='error'>{inputErrors.btnWidth}</p>
        </div>

        <div className="input-field-container theme-field size-field">
            <div className="modal-checkbox">
            <FormField className="modal-content-theme">
                <label for="theme" aria-label="Select the theme for the button Asterik-Required"> 
                <p>Please select the theme colour.<span className="asterik">*</span> </p>
                </label>
                    <select name="theme" id="theme"  value={themeValue} onChange={(event) => setThemeValue(event.target.value)}>
                        <option value="">--</option>         
                        <option value="Normal">Transparent</option>
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

                <Link state={ButtonProps} props={inputs} className="btn btn-primary btn-lg" onClick={OnSubmit}>
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

export default ButtonForm;