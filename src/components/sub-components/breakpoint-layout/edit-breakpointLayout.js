import React, { useState } from "react";
import { Link } from "react-router-dom";
import FocusTrap from "focus-trap-react";
import { FormField, Input } from "@fluentui/react-northstar";
import { useNavigate } from 'react-router-dom';
import closeIcon from "../../asset/images/cross-white.png";

const EditBreakpointLayoutModal = (props)=>{

    const{close, data} = props;
    console.log("Check Input", data);

    const initialValues = {
        numLayouts: data.numLayouts,
        breakpointLayoutTitle1: data.breakpointLayoutTitle1,
        breakpointLayoutText1: data.breakpointLayoutText1,
        breakpointLayoutTitle2: data.breakpointLayoutTitle2,
        breakpointLayoutText2: data.breakpointLayoutText2,
        breakpointLayoutTitle3: data.breakpointLayoutTitle3,
        breakpointLayoutText3: data.breakpointLayoutText3,
        breakpointLayoutTitle4: data.breakpointLayoutTitle4,
        breakpointLayoutText4: data.breakpointLayoutText4,
        Choice_Theme: data.Choice_Theme,
    }

    const [inputs, setInputs] = useState(initialValues);
    const navigate = useNavigate()

    const [inputErrors, setInputErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };

    const BreakpointLayoutProps = {
        numLayouts: inputs.numLayouts,
        breakpointLayoutTitle1: inputs.breakpointLayoutTitle1,
        breakpointLayoutText1: inputs.breakpointLayoutText1,
        breakpointLayoutTitle2: inputs.breakpointLayoutTitle2,
        breakpointLayoutText2: inputs.breakpointLayoutText2,
        breakpointLayoutTitle3: inputs.breakpointLayoutTitle3,
        breakpointLayoutText3: inputs.breakpointLayoutText3,
        breakpointLayoutTitle4: inputs.breakpointLayoutTitle4,
        breakpointLayoutText4: inputs.breakpointLayoutText4,
        Choice_Theme: inputs.Choice_Theme,
    };


    const checkValidation = (values) => {

        let errors = {};
        
        
        if (values.numLayouts === undefined || values.numLayouts === "") { 
            errors.numLayouts = "Please make decision for Number of Layouts";
        }

        if(values.numLayouts == 1) {
            if (values.breakpointLayoutTitle1 == undefined || values.breakpointLayoutTitle1 === '') {
                errors.breakpointLayoutTitle1 = "Title 1 is required"; 
            } else if (values.breakpointLayoutTitle1 !== undefined) {
                if(values.breakpointLayoutTitle1.length > 15){
                    errors.breakpointLayoutTitle1 = "Title 1 should be shorter"; 
                }
            }
            if (values.breakpointLayoutText1 == undefined || values.breakpointLayoutText1 === '') {
                errors.breakpointLayoutText1 = "Text 1 is required"; 
            } else if (values.breakpointLayoutText1 !== undefined) {
                if(values.breakpointLayoutText1.length > 250){
                    errors.breakpointLayoutText1 = "Text 1 should be shorter"; 
                }
            }
        } if(values.numLayouts == 2) {
            if (values.breakpointLayoutTitle1 == undefined || values.breakpointLayoutTitle1 === '') {
                errors.breakpointLayoutTitle1 = "Title 1 is required"; 
            } else if (values.breakpointLayoutTitle1 !== undefined) {
                if(values.breakpointLayoutTitle1.length > 15){
                    errors.breakpointLayoutTitle1 = "Title 1 should be shorter"; 
                }
            }
            if (values.breakpointLayoutText1 == undefined || values.breakpointLayoutText1 === '') {
                errors.breakpointLayoutText1 = "Text 1 is required"; 
            } else if (values.breakpointLayoutText1 !== undefined) {
                if(values.breakpointLayoutText1.length > 250){
                    errors.breakpointLayoutText1 = "Text 1 should be shorter"; 
                }
            }
            if (values.breakpointLayoutTitle2 == undefined || values.breakpointLayoutTitle2 === '') {
                errors.breakpointLayoutTitle2 = "Title 2 is required"; 
            } else if (values.breakpointLayoutTitle2 !== undefined) {
                if(values.breakpointLayoutTitle2.length > 15){
                    errors.breakpointLayoutTitle2 = "Title 2 should be shorter"; 
                }
            }
            if (values.breakpointLayoutText2 == undefined || values.breakpointLayoutText2 === '') {
                errors.breakpointLayoutText2 = "Text 2 is required"; 
            } else if (values.breakpointLayoutText2 !== undefined) {
                if(values.breakpointLayoutText2.length > 250){
                    errors.breakpointLayoutText2 = "Text 2 should be shorter"; 
                }
            }
        } else if (values.numLayouts == 3) {
            if (values.breakpointLayoutTitle1 == undefined || values.breakpointLayoutTitle1 === '') {
                errors.breakpointLayoutTitle1 = "Title 1 is required"; 
            } else if (values.breakpointLayoutTitle1 !== undefined) {
                if(values.breakpointLayoutTitle1.length > 15){
                    errors.breakpointLayoutTitle1 = "Title 1 should be shorter"; 
                }
            }
            if (values.breakpointLayoutText1 == undefined || values.breakpointLayoutText1 === '') {
                errors.breakpointLayoutText1 = "Text 1 is required"; 
            } else if (values.breakpointLayoutText1 !== undefined) {
                if(values.breakpointLayoutText1.length > 250){
                    errors.breakpointLayoutText1 = "Text 1 should be shorter"; 
                }
            }
            if (values.breakpointLayoutTitle2 == undefined || values.breakpointLayoutTitle2 === '') {
                errors.breakpointLayoutTitle2 = "Title 2 is required"; 
            } else if (values.breakpointLayoutTitle2 !== undefined) {
                if(values.breakpointLayoutTitle2.length > 15){
                    errors.breakpointLayoutTitle2 = "Title 2 should be shorter"; 
                }
            }
            if (values.breakpointLayoutText2 == undefined || values.breakpointLayoutText2 === '') {
                errors.breakpointLayoutText2 = "Text 2 is required"; 
            } else if (values.breakpointLayoutText2 !== undefined) {
                if(values.breakpointLayoutText2.length > 250){
                    errors.breakpointLayoutText2 = "Text 2 should be shorter"; 
                }
            }
            if (values.breakpointLayoutTitle3 == undefined || values.breakpointLayoutTitle3 === '') {
                errors.breakpointLayoutTitle3 = "Title 3 is required"; 
            } else if (values.breakpointLayoutTitle3 !== undefined) {
                if(values.breakpointLayoutTitle3.length > 15){
                    errors.breakpointLayoutTitle3 = "Title 3 should be shorter"; 
                }
            }
            if (values.breakpointLayoutText3 == undefined || values.breakpointLayoutText3 === '') {
                errors.breakpointLayoutText3 = "Text 3 is required"; 
            } else if (values.breakpointLayoutText3 !== undefined) {
                if(values.breakpointLayoutText3.length > 250){
                    errors.breakpointLayoutText3 = "Text 3 should be shorter"; 
                }
            }
        } else if (values.numLayouts == 4) {
            if (values.breakpointLayoutTitle1 == undefined || values.breakpointLayoutTitle1 === '') {
                errors.breakpointLayoutTitle1 = "Title 1 is required"; 
            } else if (values.breakpointLayoutTitle1 !== undefined) {
                if(values.breakpointLayoutTitle1.length > 15){
                    errors.breakpointLayoutTitle1 = "Title 1 should be shorter"; 
                }
            }
            if (values.breakpointLayoutText1 == undefined || values.breakpointLayoutText1 === '') {
                errors.breakpointLayoutText1 = "Text 1 is required"; 
            } else if (values.breakpointLayoutText1 !== undefined) {
                if(values.breakpointLayoutText1.length > 250){
                    errors.breakpointLayoutText1 = "Text 1 should be shorter"; 
                }
            }
            if (values.breakpointLayoutTitle2 == undefined || values.breakpointLayoutTitle2 === '') {
                errors.breakpointLayoutTitle2 = "Title 2 is required"; 
            } else if (values.breakpointLayoutTitle2 !== undefined) {
                if(values.breakpointLayoutTitle2.length > 15){
                    errors.breakpointLayoutTitle2 = "Title 2 should be shorter"; 
                }
            }
            if (values.breakpointLayoutText2 == undefined || values.breakpointLayoutText2 === '') {
                errors.breakpointLayoutText2 = "Text 2 is required"; 
            } else if (values.breakpointLayoutText2 !== undefined) {
                if(values.breakpointLayoutText2.length > 250){
                    errors.breakpointLayoutText2 = "Text 2 should be shorter"; 
                }
            }
            if (values.breakpointLayoutTitle3 == undefined || values.breakpointLayoutTitle3 === '') {
                errors.breakpointLayoutTitle3 = "Title 3 is required"; 
            } else if (values.breakpointLayoutTitle3 !== undefined) {
                if(values.breakpointLayoutTitle3.length > 15){
                    errors.breakpointLayoutTitle3 = "Title 3 should be shorter"; 
                }
            }
            if (values.breakpointLayoutText3 == undefined || values.breakpointLayoutText3 === '') {
                errors.breakpointLayoutText3 = "Text 3 is required"; 
            } else if (values.breakpointLayoutText3 !== undefined) {
                if(values.breakpointLayoutText3.length > 250){
                    errors.breakpointLayoutText3 = "Text 3 should be shorter"; 
                }
            }
            if (values.breakpointLayoutTitle4 == undefined || values.breakpointLayoutTitle4 === '') {
                errors.breakpointLayoutTitle4 = "Title 4 is required"; 
            } else if (values.breakpointLayoutTitle4 !== undefined) {
                if(values.breakpointLayoutTitle4.length > 15){
                    errors.breakpointLayoutTitle4 = "Title 4 should be shorter"; 
                }
            }   
            if (values.breakpointLayoutText4 == undefined || values.breakpointLayoutText4 === '') {
                errors.breakpointLayoutText4 = "Text 4 is required"; 
            } else if (values.breakpointLayoutText4 !== undefined) {
                if(values.breakpointLayoutText4.length > 250){
                    errors.breakpointLayoutText4 = "Text 4 should be shorter"; 
                }
            }
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
        navigate("/breakpointlayout", {state: {inputs}});
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
                <p>Breakpoint Layout</p>
                    <button className="close-button" aria-label={`close edit Breakpoint Layout modal`} onClick={close}>
                        <img src={closeIcon}></img>
                    </button>
                </div>

            <div className="modal-container button-modal-conatiner">

            <div className="input-field-container theme-field size-field">
                <div className="modal-checkbox">
                <FormField className="modal-content-theme">           
                    <label htmlFor="numLayouts" aria-label={`Number of Breakpoint Layout Asterik-Required`}>
                        {`Number of Breakpoint Layout:`}<span className="asterik" >*</span>
                    </label>
                    <select
                        id="numLayouts"
                        name="numLayouts"
                        value={inputs.numLayouts}
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
                <p className="error" aria-atomic="true">{inputErrors.numLayouts}</p>
            </div>

            { inputs.numLayouts == "1" ? (
                    <>
                    <div className="input-field-container">
                        <FormField className="form-modal__content">
                            <label className="wbh-modal__label" aria-label={`Text for the Title of Breakpoint Layout 1: Asterik-Required`} for="breakpointLayoutTitle1">
                            {`Text for the Title of Breakpoint Layout 1: `}<span className="asterik">*</span>
                            </label>
                            <Input
                                id="breakpointLayoutTitle1"
                                className="text_modal__input"
                                autoComplete="off"
                                name="breakpointLayoutTitle1"
                                maxLength="15"
                                value={inputs.breakpointLayoutTitle1} 
                                onChange={handleChange}
                                aria-required="true"
                            />
                            <p className='error' aria-atomic="true">{inputErrors.breakpointLayoutTitle1}</p>
                        </FormField>
                    </div>
                    <div className="input-field-container">
                        <FormField className="form-modal__content">
                            <label className="wbh-modal__label" aria-label={`Text for the Description of Breakpoint Layout 1: Asterik-Required`} for="breakpointLayoutText1">
                            {`Text for the Description of Breakpoint Layout 1: `}<span className="asterik">*</span>
                            </label>
                            <Input
                                id="breakpointLayoutText1"
                                className="text_modal__input"
                                autoComplete="off"
                                name="breakpointLayoutText1"
                                maxLength="250"
                                value={inputs.breakpointLayoutText1} 
                                onChange={handleChange}
                                aria-required="true"
                            />
                            <p className='error' aria-atomic="true">{inputErrors.breakpointLayoutText1}</p>
                        </FormField>
                    </div>
                    </>
                    )
                : inputs.numLayouts == "2" ? (
                    <>
                    <div className="input-field-container">
                        <FormField className="form-modal__content">
                            <label className="wbh-modal__label" aria-label={`Text for the Title of Breakpoint Layout 1: Asterik-Required`} for="breakpointLayoutTitle1">
                            {`Text for the Title of Breakpoint Layout 1: `}<span className="asterik">*</span>
                            </label>
                            <Input
                                id="breakpointLayoutTitle1"
                                className="text_modal__input"
                                autoComplete="off"
                                name="breakpointLayoutTitle1"
                                maxLength="15"
                                value={inputs.breakpointLayoutTitle1} 
                                onChange={handleChange}
                                aria-required="true"
                            />
                            <p className='error' aria-atomic="true">{inputErrors.breakpointLayoutTitle1}</p>
                        </FormField>
                    </div>
                    <div className="input-field-container">
                        <FormField className="form-modal__content">
                            <label className="wbh-modal__label" aria-label={`Text for the Description of Breakpoint Layout 1: Asterik-Required`} for="breakpointLayoutText1">
                            {`Text for the Description of Breakpoint Layout 1: `}<span className="asterik">*</span>
                            </label>
                            <Input
                                id="breakpointLayoutText1"
                                className="text_modal__input"
                                autoComplete="off"
                                name="breakpointLayoutText1"
                                maxLength="250"
                                value={inputs.breakpointLayoutText1} 
                                onChange={handleChange}
                                aria-required="true"
                            />
                            <p className='error' aria-atomic="true">{inputErrors.breakpointLayoutText1}</p>
                        </FormField>
                    </div>
                    <div className="input-field-container">
                        <FormField className="form-modal__content">
                            <label className="wbh-modal__label" aria-label={`Text for the Title of Breakpoint Layout 2: Asterik-Required`} for="breakpointLayoutTitle2">
                            {`Text for the Title of Breakpoint Layout 2: `}<span className="asterik">*</span>
                            </label>
                            <Input
                                id="breakpointLayoutTitle2"
                                className="text_modal__input"
                                autoComplete="off"
                                name="breakpointLayoutTitle2"
                                maxLength="15"
                                value={inputs.breakpointLayoutTitle2} 
                                onChange={handleChange}
                                aria-required="true"
                            />
                            <p className='error' aria-atomic="true">{inputErrors.breakpointLayoutTitle2}</p>
                        </FormField>
                    </div>
                    <div className="input-field-container">
                        <FormField className="form-modal__content">
                            <label className="wbh-modal__label" aria-label={`Text for the Description of Breakpoint Layout 2: Asterik-Required`} for="breakpointLayoutText2">
                            {`Text for the Description of Breakpoint Layout 2: `}<span className="asterik">*</span>
                            </label>
                            <Input
                                id="breakpointLayoutText2"
                                className="text_modal__input"
                                autoComplete="off"
                                name="breakpointLayoutText2"
                                maxLength="250"
                                value={inputs.breakpointLayoutText2} 
                                onChange={handleChange}
                                aria-required="true"
                            />
                            <p className='error' aria-atomic="true">{inputErrors.breakpointLayoutText2}</p>
                        </FormField>
                    </div>
                    </>
                ) : inputs.numLayouts == "3" ? (
                    <>
                    <div className="input-field-container">
                        <FormField className="form-modal__content">
                            <label className="wbh-modal__label" aria-label={`Text for the Title of Breakpoint Layout 1: Asterik-Required`} for="breakpointLayoutTitle1">
                            {`Text for the Title of Breakpoint Layout 1: `}<span className="asterik">*</span>
                            </label>
                            <Input
                                id="breakpointLayoutTitle1"
                                className="text_modal__input"
                                autoComplete="off"
                                name="breakpointLayoutTitle1"
                                maxLength="15"
                                value={inputs.breakpointLayoutTitle1} 
                                onChange={handleChange}
                                aria-required="true"
                            />
                            <p className='error' aria-atomic="true">{inputErrors.breakpointLayoutTitle1}</p>
                        </FormField>
                    </div>
                    <div className="input-field-container">
                        <FormField className="form-modal__content">
                            <label className="wbh-modal__label" aria-label={`Text for the Description of Breakpoint Layout 1: Asterik-Required`} for="breakpointLayoutText1">
                            {`Text for the Description of Breakpoint Layout 1: `}<span className="asterik">*</span>
                            </label>
                            <Input
                                id="breakpointLayoutText1"
                                className="text_modal__input"
                                autoComplete="off"
                                name="breakpointLayoutText1"
                                maxLength="250"
                                value={inputs.breakpointLayoutText1} 
                                onChange={handleChange}
                                aria-required="true"
                            />
                            <p className='error' aria-atomic="true">{inputErrors.breakpointLayoutText1}</p>
                        </FormField>
                    </div>
                    <div className="input-field-container">
                        <FormField className="form-modal__content">
                            <label className="wbh-modal__label" aria-label={`Text for the Title of Breakpoint Layout 2: Asterik-Required`} for="breakpointLayoutTitle2">
                            {`Text for the Title of Breakpoint Layout 2: `}<span className="asterik">*</span>
                            </label>
                            <Input
                                id="breakpointLayoutTitle2"
                                className="text_modal__input"
                                autoComplete="off"
                                name="breakpointLayoutTitle2"
                                maxLength="15"
                                value={inputs.breakpointLayoutTitle2} 
                                onChange={handleChange}
                                aria-required="true"
                            />
                            <p className='error' aria-atomic="true">{inputErrors.breakpointLayoutTitle2}</p>
                        </FormField>
                    </div>
                    <div className="input-field-container">
                        <FormField className="form-modal__content">
                            <label className="wbh-modal__label" aria-label={`Text for the Description of Breakpoint Layout 2: Asterik-Required`} for="breakpointLayoutText2">
                            {`Text for the Description of Breakpoint Layout 2: `}<span className="asterik">*</span>
                            </label>
                            <Input
                                id="breakpointLayoutText2"
                                className="text_modal__input"
                                autoComplete="off"
                                name="breakpointLayoutText2"
                                maxLength="250"
                                value={inputs.breakpointLayoutText2} 
                                onChange={handleChange}
                                aria-required="true"
                            />
                            <p className='error' aria-atomic="true">{inputErrors.breakpointLayoutText2}</p>
                        </FormField>
                    </div>
                    <div className="input-field-container">
                        <FormField className="form-modal__content">
                            <label className="wbh-modal__label" aria-label={`Text for the Title of Breakpoint Layout 3: Asterik-Required`} for="breakpointLayoutTitle3">
                            {`Text for the Title of Breakpoint Layout 3: `}<span className="asterik">*</span>
                            </label>
                            <Input
                                id="breakpointLayoutTitle3"
                                className="text_modal__input"
                                autoComplete="off"
                                name="breakpointLayoutTitle3"
                                maxLength="15"
                                value={inputs.breakpointLayoutTitle3} 
                                onChange={handleChange}
                                aria-required="true"
                            />
                            <p className='error' aria-atomic="true">{inputErrors.breakpointLayoutTitle3}</p>
                        </FormField>
                    </div>
                    <div className="input-field-container">
                        <FormField className="form-modal__content">
                            <label className="wbh-modal__label" aria-label={`Text for the Description of Breakpoint Layout 3: Asterik-Required`} for="breakpointLayoutText3">
                            {`Text for the Description of Breakpoint Layout 3: `}<span className="asterik">*</span>
                            </label>
                            <Input
                                id="breakpointLayoutText3"
                                className="text_modal__input"
                                autoComplete="off"
                                name="breakpointLayoutText3"
                                maxLength="250"
                                value={inputs.breakpointLayoutText3} 
                                onChange={handleChange}
                                aria-required="true"
                            />
                            <p className='error' aria-atomic="true">{inputErrors.breakpointLayoutText3}</p>
                        </FormField>
                    </div>
                    </>
                ) : inputs.numLayouts == "4" ? (
                    <>
                    <div className="input-field-container">
                        <FormField className="form-modal__content">
                            <label className="wbh-modal__label" aria-label={`Text for the Title of Breakpoint Layout 1: Asterik-Required`} for="breakpointLayoutTitle1">
                            {`Text for the Title of Breakpoint Layout 1: `}<span className="asterik">*</span>
                            </label>
                            <Input
                                id="breakpointLayoutTitle1"
                                className="text_modal__input"
                                autoComplete="off"
                                name="breakpointLayoutTitle1"
                                maxLength="15"
                                value={inputs.breakpointLayoutTitle1} 
                                onChange={handleChange}
                                aria-required="true"
                            />
                            <p className='error' aria-atomic="true">{inputErrors.breakpointLayoutTitle1}</p>
                        </FormField>
                    </div>
                    <div className="input-field-container">
                        <FormField className="form-modal__content">
                            <label className="wbh-modal__label" aria-label={`Text for the Description of Breakpoint Layout 1: Asterik-Required`} for="breakpointLayoutText1">
                            {`Text for the Description of Breakpoint Layout 1: `}<span className="asterik">*</span>
                            </label>
                            <Input
                                id="breakpointLayoutText1"
                                className="text_modal__input"
                                autoComplete="off"
                                name="breakpointLayoutText1"
                                maxLength="250"
                                value={inputs.breakpointLayoutText1} 
                                onChange={handleChange}
                                aria-required="true"
                            />
                            <p className='error' aria-atomic="true">{inputErrors.breakpointLayoutText1}</p>
                        </FormField>
                    </div>
                    <div className="input-field-container">
                        <FormField className="form-modal__content">
                            <label className="wbh-modal__label" aria-label={`Text for the Title of Breakpoint Layout 2: Asterik-Required`} for="breakpointLayoutTitle2">
                            {`Text for the Title of Breakpoint Layout 2: `}<span className="asterik">*</span>
                            </label>
                            <Input
                                id="breakpointLayoutTitle2"
                                className="text_modal__input"
                                autoComplete="off"
                                name="breakpointLayoutTitle2"
                                maxLength="15"
                                value={inputs.breakpointLayoutTitle2} 
                                onChange={handleChange}
                                aria-required="true"
                            />
                            <p className='error' aria-atomic="true">{inputErrors.breakpointLayoutTitle2}</p>
                        </FormField>
                    </div>
                    <div className="input-field-container">
                        <FormField className="form-modal__content">
                            <label className="wbh-modal__label" aria-label={`Text for the Description of Breakpoint Layout 2: Asterik-Required`} for="breakpointLayoutText2">
                            {`Text for the Description of Breakpoint Layout 2: `}<span className="asterik">*</span>
                            </label>
                            <Input
                                id="breakpointLayoutText2"
                                className="text_modal__input"
                                autoComplete="off"
                                name="breakpointLayoutText2"
                                maxLength="250"
                                value={inputs.breakpointLayoutText2} 
                                onChange={handleChange}
                                aria-required="true"
                            />
                            <p className='error' aria-atomic="true">{inputErrors.breakpointLayoutText2}</p>
                        </FormField>
                    </div>
                    <div className="input-field-container">
                        <FormField className="form-modal__content">
                            <label className="wbh-modal__label" aria-label={`Text for the Title of Breakpoint Layout 3: Asterik-Required`} for="breakpointLayoutTitle3">
                            {`Text for the Title of Breakpoint Layout 3: `}<span className="asterik">*</span>
                            </label>
                            <Input
                                id="breakpointLayoutTitle3"
                                className="text_modal__input"
                                autoComplete="off"
                                name="breakpointLayoutTitle3"
                                maxLength="15"
                                value={inputs.breakpointLayoutTitle3} 
                                onChange={handleChange}
                                aria-required="true"
                            />
                            <p className='error' aria-atomic="true">{inputErrors.breakpointLayoutTitle3}</p>
                        </FormField>
                    </div>
                    <div className="input-field-container">
                        <FormField className="form-modal__content">
                            <label className="wbh-modal__label" aria-label={`Text for the Description of Breakpoint Layout 3: Asterik-Required`} for="breakpointLayoutText3">
                            {`Text for the Description of Breakpoint Layout 3: `}<span className="asterik">*</span>
                            </label>
                            <Input
                                id="breakpointLayoutText3"
                                className="text_modal__input"
                                autoComplete="off"
                                name="breakpointLayoutText3"
                                maxLength="250"
                                value={inputs.breakpointLayoutText3} 
                                onChange={handleChange}
                                aria-required="true"
                            />
                            <p className='error' aria-atomic="true">{inputErrors.breakpointLayoutText3}</p>
                        </FormField>
                    </div>
                    <div className="input-field-container">
                        <FormField className="form-modal__content">
                            <label className="wbh-modal__label" aria-label={`Text for the Title of Breakpoint Layout 4: Asterik-Required`} for="breakpointLayoutTitle4">
                            {`Text for the Title of Breakpoint Layout 4: `}<span className="asterik">*</span>
                            </label>
                            <Input
                                id="breakpointLayoutTitle4"
                                className="text_modal__input"
                                autoComplete="off"
                                name="breakpointLayoutTitle4"
                                maxLength="15"
                                value={inputs.breakpointLayoutTitle4} 
                                onChange={handleChange}
                                aria-required="true"
                            />
                            <p className='error' aria-atomic="true">{inputErrors.breakpointLayoutTitle4}</p>
                        </FormField>
                    </div>
                    <div className="input-field-container">
                        <FormField className="form-modal__content">
                            <label className="wbh-modal__label" aria-label={`Text for the Description of Breakpoint Layout 4: Asterik-Required`} for="breakpointLayoutText4">
                            {`Text for the Description of Breakpoint Layout 4: `}<span className="asterik">*</span>
                            </label>
                            <Input
                                id="breakpointLayoutText4"
                                className="text_modal__input"
                                autoComplete="off"
                                name="breakpointLayoutText4"
                                maxLength="250"
                                value={inputs.breakpointLayoutText4} 
                                onChange={handleChange}
                                aria-required="true"
                            />
                            <p className='error' aria-atomic="true">{inputErrors.breakpointLayoutText4}</p>
                        </FormField>
                    </div>
                    </>
                ) : ( " " )
            }

            <div className="input-field-container theme-field">
                <div className="modal-checkbox">
                <FormField className="modal-content-theme">
                    <label for="Choice_Theme" aria-label={`Edit the theme for the Breakpoint Layout Asterik-Required`}> 
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
                    <Link state={BreakpointLayoutProps} className="btn btn-primary btn-lg" onClick={OnSubmit}>
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

export default EditBreakpointLayoutModal;