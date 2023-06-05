import React, { useState } from "react";
import { Link } from "react-router-dom";
import FocusTrap from "focus-trap-react";
import { FormField, Input } from "@fluentui/react-northstar";
import { useNavigate } from 'react-router-dom';
import closeIcon from "../../../asset/images/cross-white.png";
import "./checkbox.scss"

const EditCheckBoxModal = (props)=>{

    const{close, data} = props;
    console.log("Check Input", data);

    const initialValues = {
        Choice_SelectionType: data.Choice_SelectionType,
        boxLabel: data.boxLabel,
        numSelects: data.numSelects,
        selectorLabel1: data.selectorLabel1,
        selectorLabel2: data.selectorLabel2,
        selectorLabel3: data.selectorLabel3,
        selectorLabel4: data.selectorLabel4,
        Choice_Layout: data.Choice_Layout,
        Choice_fieldsetWidth: data.Choice_fieldsetWidth,
        Choice_Theme: data.Choice_Theme,
    }

    const [inputs, setInputs] = useState(initialValues);
    const navigate = useNavigate()

    const [inputErrors, setInputErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };

    const CheckBoxProps = {
        Choice_SelectionType: inputs.Choice_SelectionType,
        boxLabel: inputs.boxLabel,
        numSelects: inputs.numSelects,
        selectorLabel1: inputs.selectorLabel1,
        selectorLabel2: inputs.selectorLabel2,
        selectorLabel3: inputs.selectorLabel3,
        selectorLabel4: inputs.selectorLabel4,
        Choice_Layout: inputs.Choice_Layout,
        Choice_fieldsetWidth: inputs.Choice_fieldsetWidth,
        Choice_Theme: inputs.Choice_Theme,
    };


    const checkValidation = (values) => {

        let errors = {};
        
        if (values.boxLabel == undefined || values.boxLabel == "") {
        errors.boxLabel = "Label for Field set is required"; 
        } else if (values.boxLabel !== undefined) {
            if(values.boxLabel.length > 15){
                errors.boxLabel = "Label for Field set should be shorter"; 
            } 
        }  
        
        if (values.numSelects === undefined || values.numSelects === "") { 
            errors.numSelects = "Please make decision for Number of Selectors";
        }

        if(values.numSelects == 1) {
            if (values.selectorLabel1 == undefined || values.selectorLabel1 === '') {
                errors.selectorLabel1 = "Name is required"; 
            } else if (values.selectorLabel1 !== undefined) {
                if(values.selectorLabel1.length > 15){
                    errors.selectorLabel1 = "Name should be shorter"; 
                }
            }
        } if(values.numSelects == 2) {
            if (values.selectorLabel1 == undefined || values.selectorLabel1 === '') {
                errors.selectorLabel1 = "Name is required"; 
            } else if (values.selectorLabel1 !== undefined) {
                if(values.selectorLabel1.length > 15){
                    errors.selectorLabel1 = "Name should be shorter"; 
                }
            }
            if (values.selectorLabel2 == undefined || values.selectorLabel2 === '') {
                errors.selectorLabel2 = "Name is required"; 
            } else if (values.selectorLabel2 !== undefined) {
                if(values.selectorLabel2.length > 15){
                    errors.selectorLabel2 = "Name should be shorter"; 
                }
            }
        } else if (values.numSelects == 3) {
            if (values.selectorLabel1 == undefined || values.selectorLabel1 === '') {
                errors.selectorLabel1 = "Name is required"; 
            } else if (values.selectorLabel1 !== undefined) {
                if(values.selectorLabel1.length > 15){
                    errors.selectorLabel1 = "Name should be shorter"; 
                }
            }
            if (values.selectorLabel2 == undefined || values.selectorLabel2 === '') {
                errors.selectorLabel2 = "Name is required"; 
            } else if (values.selectorLabel2 !== undefined) {
                if(values.selectorLabel2.length > 15){
                    errors.selectorLabel2 = "Name should be shorter"; 
                }
            }
            if (values.selectorLabel3 == undefined || values.selectorLabel3 === '') {
                errors.selectorLabel3 = "Name is required"; 
            } else if (values.selectorLabel3 !== undefined) {
                if(values.selectorLabel3.length > 15){
                    errors.selectorLabel3 = "Name should be shorter"; 
                }
            }
        } else if (values.numSelects == 4) {
            if (values.selectorLabel1 == undefined || values.selectorLabel1 === '') {
                errors.selectorLabel1 = "Name is required"; 
            } else if (values.selectorLabel1 !== undefined) {
                if(values.selectorLabel1.length > 15){
                    errors.selectorLabel1 = "Name should be shorter"; 
                }
            }
            if (values.selectorLabel2 == undefined || values.selectorLabel2 === '') {
                errors.selectorLabel2 = "Name is required"; 
            } else if (values.selectorLabel2 !== undefined) {
                if(values.selectorLabel2.length > 15){
                    errors.selectorLabel2 = "Name should be shorter"; 
                }
            }
            if (values.selectorLabel3 == undefined || values.selectorLabel3 === '') {
                errors.selectorLabel3 = "Name is required"; 
            } else if (values.selectorLabel3 !== undefined) {
                if(values.selectorLabel3.length > 15){
                    errors.selectorLabel3 = "Name should be shorter"; 
                }
            }
            if (values.selectorLabel4 == undefined || values.selectorLabel4 === '') {
                errors.selectorLabel4 = "Name is required"; 
            } else if (values.selectorLabel4 !== undefined) {
                if(values.selectorLabel4.length > 15){
                    errors.selectorLabel4 = "Name should be shorter"; 
                }
            }
        } 

        if (values.Choice_SelectionType === undefined || values.Choice_SelectionType === "") { 
            errors.selectionType = "Please make decision for Selection Type";
        }
    
        if (values.Choice_Layout === undefined || values.Choice_Layout === "") { 
            errors.layout = "Please make decision for Layout display of Check Box field";
        } 

        if (values.Choice_fieldsetWidth === undefined || values.Choice_fieldsetWidth === "") { 
            errors.fieldsetWidth = "Please select the Fieldset width from the dropdown";
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
        navigate("/formcomponents/checkbox", {state: {inputs}});
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
                <p>{`Selector Type - ${inputs.Choice_SelectionType}`}</p>
                    <button className="close-button" aria-label={`close edit ${inputs.Choice_SelectionType} modal`} onClick={close}>
                        <img src={closeIcon}></img>
                    </button>
                </div>

            <div className="modal-container button-modal-conatiner">

            <div className="input-field-container logo-field">
                <p>Select the Input Type for making Selection <span className="asterik">*</span></p>
                <div className="modal-checkbox">
                    <FormField className="modal-content-checkbox layout-field">
                    <label className="modal-label" aria-label="Select radio button for selection type">
                        <input
                            className="modal-input"
                            type="radio"
                            value="Radio-Button"
                            name="Choice_SelectionType"
                            checked={inputs.Choice_SelectionType === "Radio-Button"}
                            onChange={handleChange}
                        />
                        <div className="tag selecttype">
                        <span className="tag__cat">Radio Button </span>
                        </div>         
                    </label>
                    </FormField>
                    <FormField className="modal-content-checkbox layout-field">
                    <label className="modal-label" aria-label="Select check box for selection type">
                        <input
                            className="modal-input"
                            type="radio"
                            value="Check-Box"
                            name="Choice_SelectionType"
                            checked={inputs.Choice_SelectionType === "Check-Box"}
                            onChange={handleChange}
                        />
                        <div className="tag selecttype">
                        <span className="tag__cat">Check Box</span>
                        </div>
                    </label>
                    </FormField>
                </div>
                <p className="error" aria-atomic="true">{inputErrors.selectionType}</p>
            </div>
    
            <div className="input-field-container">
                <FormField className="form-modal__content">
                    <label
                    className="wbh-modal__label"
                    aria-label={`Text for the Fieldset label of ${inputs.Choice_SelectionType} Asterik-Required`}
                    for="boxLabel"
                    >
                    {`Text for the Fieldset Label of ${inputs.Choice_SelectionType}:`}<span className="asterik">*</span> 
                    </label>
                    <Input
                        id="boxLabel"
                        className="text_modal__input"
                        autoComplete="off"
                        name="boxLabel"
                        maxLength="15"
                        value={inputs.boxLabel} 
                        onChange={handleChange}
                        aria-required="true"
                    />   
                    <p className='error' aria-atomic="true">{inputErrors.boxLabel}</p>
                </FormField>
            </div>

            <div className="input-field-container theme-field size-field">
                <div className="modal-checkbox">
                <FormField className="modal-content-theme">           
                    <label htmlFor="numSelects" aria-label={`Number of ${inputs.Choice_SelectionType} Asterik-Required`}>
                        {`Number of ${inputs.Choice_SelectionType}:`}<span className="asterik" >*</span>
                    </label>
                    <select
                        id="numSelects"
                        name="numSelects"
                        value={inputs.numSelects}
                        onChange={handleChange}
                    >
                        <option value="">Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </FormField>
                </div>    
                <p className="error" aria-atomic="true">{inputErrors.numSelects}</p>
            </div>

{/* Enter that 4 divs */}
            { inputs.numSelects == "1" ? (
                    <div className="input-field-container">
                    <FormField className="form-modal__content">
                        <label className="wbh-modal__label" aria-label={`Text for the Label of ${inputs.Choice_SelectionType} 1: Asterik-Required`} for="selectorLabel1">
                        {`Text for the Label of ${inputs.Choice_SelectionType} 1: `}<span className="asterik">*</span> 
                        </label>
                        <Input
                            id="selectorLabel1"
                            className="text_modal__input"
                            autoComplete="off"
                            name="selectorLabel1"
                            maxLength="15"
                            value={inputs.selectorLabel1} 
                            onChange={handleChange}
                            aria-required="true"
                        />
                        <p className='error' aria-atomic="true">{inputErrors.selectorLabel1}</p>
                    </FormField>
                    </div>
                    )
                : inputs.numSelects == "2" ? (
                    <>
                    <div className="input-field-container">
                    <FormField className="form-modal__content">
                        <label className="wbh-modal__label" aria-label={`Text for the Label of ${inputs.Choice_SelectionType} 1: Asterik-Required`} for="selectorLabel1">
                        {`Text for the Label of ${inputs.Choice_SelectionType} 1: `}<span className="asterik">*</span> 
                        </label>
                        <Input
                            id="selectorLabel1"
                            className="text_modal__input"
                            autoComplete="off"
                            name="selectorLabel1"
                            maxLength="15"
                            value={inputs.selectorLabel1} 
                            onChange={handleChange}
                            aria-required="true"
                        />  
                        <p className='error' aria-atomic="true">{inputErrors.selectorLabel1}</p>
                    </FormField>
                    </div>
                    <div className="input-field-container">
                    <FormField className="form-modal__content">
                        <label
                        className="wbh-modal__label"
                        aria-label={`Text for the Label of ${inputs.Choice_SelectionType} 2: Asterik-Required`}
                        for="selectorLabel2"
                        >
                        {`Text for the Label of ${inputs.Choice_SelectionType} 2: `}<span className="asterik">*</span> 
                        </label>
                        <Input
                            id="selectorLabel2"
                            className="text_modal__input"
                            autoComplete="off"
                            name="selectorLabel2"
                            maxLength="15"
                            value={inputs.selectorLabel2} 
                            onChange={handleChange}
                            aria-required="true"
                        />
                        <p className='error' aria-atomic="true">{inputErrors.selectorLabel2}</p>
                    </FormField>
                    </div>
                    </>
                ) : inputs.numSelects == "3" ? (
                    <>
                    <div className="input-field-container">
                    <FormField className="form-modal__content">
                        <label className="wbh-modal__label" aria-label={`Text for the Label of ${inputs.Choice_SelectionType} 1: Asterik-Required`} for="selectorLabel1">
                        {`Text for the Label of ${inputs.Choice_SelectionType} 1: `}<span className="asterik">*</span> 
                        </label>
                        <Input
                            id="selectorLabel1"
                            className="text_modal__input"
                            autoComplete="off"
                            name="selectorLabel1"
                            maxLength="15"
                            value={inputs.selectorLabel1} 
                            onChange={handleChange}
                            aria-required="true"
                        />
                        <p className='error' aria-atomic="true">{inputErrors.selectorLabel1}</p>
                    </FormField>
                    </div>
                    <div className="input-field-container">
                    <FormField className="form-modal__content">
                        <label
                        className="wbh-modal__label"
                        aria-label={`Text for the Label of ${inputs.Choice_SelectionType} 2: Asterik-Required`}
                        for="selectorLabel2"
                        >
                        {`Text for the Label of ${inputs.Choice_SelectionType} 2: `}<span className="asterik">*</span>
                        </label>
                        <Input
                            id="selectorLabel2"
                            className="text_modal__input"
                            autoComplete="off"
                            name="selectorLabel2"
                            maxLength="15"
                            value={inputs.selectorLabel2} 
                            onChange={handleChange}
                            aria-required="true"
                        />
                        <p className='error' aria-atomic="true">{inputErrors.selectorLabel2}</p>
                    </FormField>
                    </div>
                    <div className="input-field-container">
                    <FormField className="form-modal__content">
                        <label
                        className="wbh-modal__label"
                        aria-label={`Text for the Label of ${inputs.Choice_SelectionType} 3: Asterik-Required`}
                        for="selectorLabel3"
                        >
                        {`Text for the Label of ${inputs.Choice_SelectionType} 3: `}<span className="asterik">*</span>
                        </label>
                        <Input
                            id="selectorLabel3"
                            className="text_modal__input"
                            autoComplete="off"
                            name="selectorLabel3"
                            maxLength="15"
                            value={inputs.selectorLabel3} 
                            onChange={handleChange}
                            aria-required="true"
                        />
                        <p className='error' aria-atomic="true">{inputErrors.selectorLabel3}</p>
                    </FormField>
                    </div>
                    </>
                ) : inputs.numSelects == "4" ? (
                    <>
                    <div className="input-field-container">
                    <FormField className="form-modal__content">
                        <label className="wbh-modal__label" aria-label={`Text for the Label of ${inputs.Choice_SelectionType} 1: Asterik-Required`} for="selectorLabel1">
                        {`Text for the Label of ${inputs.Choice_SelectionType} 1: `}<span className="asterik">*</span>
                        </label>
                        <Input
                            id="selectorLabel1"
                            className="text_modal__input"
                            autoComplete="off"
                            name="selectorLabel1"
                            maxLength="15"
                            value={inputs.selectorLabel1} 
                            onChange={handleChange}
                            aria-required="true"
                        />
                        <p className='error' aria-atomic="true">{inputErrors.selectorLabel1}</p>
                    </FormField>
                    </div>
                    <div className="input-field-container">
                    <FormField className="form-modal__content">
                        <label
                        className="wbh-modal__label"
                        aria-label={`Text for the Label of ${inputs.Choice_SelectionType} 2: Asterik-Required`}
                        for="selectorLabel2"
                        >
                        {`Text for the Label of ${inputs.Choice_SelectionType} 2: `}<span className="asterik">*</span>
                        </label>
                        <Input
                            id="selectorLabel2"
                            className="text_modal__input"
                            autoComplete="off"
                            name="selectorLabel2"
                            maxLength="15"
                            value={inputs.selectorLabel2} 
                            onChange={handleChange}
                            aria-required="true"
                        />
                        <p className='error' aria-atomic="true">{inputErrors.selectorLabel2}</p>
                    </FormField>
                    </div>
                    <div className="input-field-container">
                    <FormField className="form-modal__content">
                        <label
                        className="wbh-modal__label"
                        aria-label={`Text for the Label of ${inputs.Choice_SelectionType} 3: Asterik-Required`}
                        for="selectorLabel3"
                        >
                        {`Text for the Label of ${inputs.Choice_SelectionType} 3: `}<span className="asterik">*</span>
                        </label>
                        <Input
                            id="selectorLabel3"
                            className="text_modal__input"
                            autoComplete="off"
                            name="selectorLabel3"
                            maxLength="15"
                            value={inputs.selectorLabel3} 
                            onChange={handleChange}
                            aria-required="true"
                        />
                        <p className='error' aria-atomic="true">{inputErrors.selectorLabel3}</p>
                    </FormField>
                    </div>
                    <div className="input-field-container">
                    <FormField className="form-modal__content">
                        <label
                        className="wbh-modal__label"
                        aria-label={`Text for the Label of ${inputs.Choice_SelectionType} 4: Asterik-Required`}
                        for="selectorLabel4"
                        >
                        {`Text for the Label of ${inputs.Choice_SelectionType} 4: `}<span className="asterik">*</span>
                        </label>
                        <Input
                            id="selectorLabel4"
                            className="text_modal__input"
                            autoComplete="off"
                            name="selectorLabel4"
                            maxLength="15"
                            value={inputs.selectorLabel4} 
                            onChange={handleChange}
                            aria-required="true"
                        />
                        <p className='error' aria-atomic="true">{inputErrors.selectorLabel4}</p>
                    </FormField>
                    </div>
                    </>
                ) : ( " " )
            }


            <div className="input-field-container logo-field">
                <p>{`Select the layout option for ${inputs.Choice_SelectionType} `}<span className="asterik">*</span></p>
                <div className="modal-checkbox">
                    <FormField className="modal-content-checkbox layout-field">
                    <label className="modal-label" aria-label="Select vertical for layout option value">
                        <input
                            className="modal-input"
                            type="radio"
                            value="Vertical"
                            name="Choice_Layout"
                            checked={inputs.Choice_Layout === "Vertical"}
                            onChange={handleChange}
                        />
                        <div className="tag">
                        <span className="tag__cat">Vertical </span>
                        </div>         
                    </label>
                    </FormField>
                    <FormField className="modal-content-checkbox layout-field">
                    <label className="modal-label" aria-label="Select Horizontal for layout option value">
                        <input
                            className="modal-input"
                            type="radio"
                            value="Horizontal"
                            name="Choice_Layout"
                            checked={inputs.Choice_Layout === "Horizontal"}
                            onChange={handleChange}
                        />
                        <div className="tag">
                        <span className="tag__cat">Horizontal</span>
                        </div>
                    </label>
                    </FormField>
                </div>
                <p className="error" aria-atomic="true">{inputErrors.layout}</p>
            </div>

            <div className="input-field-container size-field" >
                <div className="modal-checkbox">
                <FormField className="modal-content-theme">
                    <label for="Choice_fieldsetWidth" aria-label={`Edit ${inputs.Choice_SelectionType} width value Asterik-Required`}> 
                    <p>{`Please select width of the ${inputs.Choice_SelectionType}: `}<span className="asterik">*</span> </p>
                    </label>
                        <select name="Choice_fieldsetWidth" id="Choice_fieldsetWidth"  value={inputs.Choice_fieldsetWidth} onChange={handleChange}>
                            <option value="">--</option>         
                            <option value="25">25 %</option>
                            <option value="50">50 %</option>
                            <option value="75">75 %</option>
                            <option value="100">100 %</option>
                        </select>
                </FormField>
                </div>
                <p className='error'>{inputErrors.fieldsetWidth}</p>
            </div>

            <div className="input-field-container theme-field">
                <div className="modal-checkbox">
                <FormField className="modal-content-theme">
                    <label for="Choice_Theme" aria-label={`Edit the theme for the ${inputs.Choice_SelectionType} Asterik-Required`}> 
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
                    <Link state={CheckBoxProps} className="btn btn-primary btn-lg" onClick={OnSubmit}>
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

export default EditCheckBoxModal;