import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CustomButton } from "./CustomButton";
import FocusTrap from "focus-trap-react";
import { FormField, Input } from "@fluentui/react-northstar";
import { useNavigate } from 'react-router-dom';
import closeIcon from "../../asset/images/cross-white.png";
import "../header/header-modal.scss";

const EditButtonModal = (props)=>{

    const{close, data} = props;
    console.log("Check Input", data);

    const initialValues = {
        btntext: data.btntext,
        Choice_BorderRadius: data.Choice_BorderRadius,
        border_radius: data.border_radius,
        border_width: data.border_width,
        Choice_BoxShadow: data.Choice_BoxShadow,
        Choice_Size: data.Choice_Size,
        Choice_Width: data.Choice_Width,
        Choice_Theme: data.Choice_Theme,
    }

    const [inputs, setInputs] = useState(initialValues);
    const [inputErrors, setInputErrors] = useState({});
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };

    const ButtonProps = {
        ButtonText: inputs.btntext,
        Choice_BorderRadius: inputs.Choice_BorderRadius,
        BorderRadius: inputs.border_radius,
        Choice_BoxShadow: inputs.Choice_BoxShadow,
        Choice_Size: inputs.Choice_Size,
        Choice_Width: inputs.Choice_Width,
        Choice_Theme: inputs.Choice_Theme,
    };


    const checkValidation = (values) => {

        let errors = {};
        
        if (values.btntext == undefined || values.btntext == "") {
        errors.btntext = "Text is required!"; 
        } else if (values.btntext !== undefined) {
            if(values.btntext.length > 15){
                errors.btntext = "Text should be shorter!"; 
            } 
        }   

        if (values.Choice_BorderRadius === "") {
            errors.BorderRadius = "Please make decision for Border Radius field";
        }

        if (values.Choice_BorderRadius === "Yes") {     
            if (values.border_radius == undefined) {
                errors.border_radius = "Please enter a Border Radius value";
            } else if (values.border_radius != undefined) {
                if (values.border_radius < 0) {
                    errors.border_radius = "Please enter a positive Border Radius value";
                } else if (values.border_radius > 50) {
                    errors.border_radius = "Border Radius shouldn't exceed 50px";
                }
            }
        } else if (values.Choice_BorderRadius === "No") {
            values.border_radius = "0";
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
       
        if(values.Choice_BoxShadow === ""){
            errors.BoxShadow = "Please make decision for Box Shadow field";
        } 
    
        if (values.Choice_Size === undefined || values.Choice_Size === "") { 
            errors.size = "Please select a padding value button";
        } 

        if (values.Choice_Width === undefined || values.Choice_Width === "") { 
            errors.btnWidth = "Please select a width for button";
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
        navigate("/button", {state: {inputs}});
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
            <p>Button</p>
                <button className="close-button" aria-label="close edit button modal" onClick={close}>
                    <img src={closeIcon}></img>
                </button>
            </div>

        <div className="modal-container button-modal-conatiner">
  
        <div className="input-field-container">
            <FormField className="form-modal__content">
                <label
                className="wbh-modal__label"
                aria-label="Edit Text for the Button Asterik-Required"
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
                    value={inputs.btntext} 
                    onChange={handleChange}
                    aria-required="true"
                    aria-describedby="btn-err-text"
                />   
                <p id="btn-err-text" className='error' aria-atomic="true">{inputErrors.btntext}</p>
            </FormField>
        </div>

        <div className="input-field-container logo-field">
            <p>Would you like to have Border Radius for Button?<span className="asterik">*</span></p>
            <div className="modal-checkbox">
            <FormField className="modal-content-checkbox">
              <label className="modal-label" htmlFor="Choice_BorderRadiusyes" aria-label="Select Yes for Border radius value">
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
        
        { inputs.Choice_BorderRadius === "Yes" ?
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
                        aria-describedby="btn-err-radiusvalue"
                        value={inputs.border_radius} 
                        onChange={handleChange}         
                    />
                    
                    <p id="btn-err-radiusvalue" className='error' aria-atomic="true">{inputErrors.border_radius}</p>
                </FormField>
            </div>
        :""
        }
        
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
                    aria-describedby="btn-err-widthvalue"   
                    value={inputs.border_width} 
                    onChange={handleChange}         
                />
                <p id="btn-err-widthvalue" className='error' aria-atomic="true">{inputErrors.border_width}</p>
            </FormField>
        </div>

        <div className="input-field-container logo-field">
            <p>Would you like to have Box Shadow for Button?<span className="asterik">*</span></p>
            <div className="modal-checkbox">
            <FormField className="modal-content-checkbox">
              <label className="modal-label" htmlFor="Choice_BoxShadowyes"  aria-label="Select Yes for Box Shadow property">
                <input
                    id="Choice_BoxShadowyes"
                    className="modal-input"
                    type="radio"
                    value="Yes"
                    name="Choice_BoxShadow"
                    checked={inputs.Choice_BoxShadow === "Yes"}
                    onChange={handleChange}
                />
                <div className="tag">
                  <span className="tag__cat">Yes </span>
                </div>            
              </label>
            </FormField>
            <FormField className="modal-content-checkbox">
              <label className="modal-label" htmlFor="Choice_BoxShadowno"  aria-label="Select No for Box Shadow property">
                <input
                    id="Choice_BoxShadowno"
                    className="modal-input"
                    type="radio"
                    value="No"
                    name="Choice_BoxShadow"
                    checked={inputs.Choice_BoxShadow === "No"}
                    onChange={handleChange}
                />
                <div className="tag">
                  <span className="tag__cat">No</span>
                </div>
              </label>
            </FormField>
          </div>
          <p id="btn-err-widthvalue" className="error" aria-atomic="true">{inputErrors.BoxShadow}</p>
        </div>

        <div className="input-field-container">
            <div className="modal-checkbox">
            <FormField className="modal-content-theme">
                <label for="Choice_Size" aria-label="Edit padding value Asterik-Required"> 
                <p>Please select padding of the Button: <span className="asterik">*</span> </p>
                </label>
                    <select name="Choice_Size" id="Choice_Size"  value={inputs.Choice_Size} onChange={handleChange}>      
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
                <label for="Choice_Width" aria-label="Edit button width value Asterik-Required"> 
                <p>Please select width of the Button: <span className="asterik">*</span> </p>
                </label>
                    <select name="Choice_Width" id="Choice_Width"  value={inputs.Choice_Width} onChange={handleChange}>
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

        <div className="input-field-container theme-field">
            <div className="modal-checkbox">
            <FormField className="modal-content-theme">
                <label for="Choice_Theme" aria-label="Edit the theme for the button Asterik-Required"> 
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
                <Link state={ButtonProps} className="btn btn-primary btn-lg" onClick={OnSubmit}>
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

export default EditButtonModal;