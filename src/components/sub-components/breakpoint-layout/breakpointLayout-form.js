import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FocusTrap from "focus-trap-react";
import { FormField, Input } from "@fluentui/react-northstar";
import closeIcon from "../../asset/images/cross-white.png";

const BreakpointLayoutForm =(props)=>{

    const {close} = props;
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({});
    const [inputErrors, setInputErrors] = useState({});

    const [numLayouts, setNumLayouts] = useState(0);
    const [themeValue, setThemeValue] = useState();
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };

    const checkValidation = (values) => {

        let errors = {};

        if (numLayouts  === undefined || numLayouts === 0 || numLayouts === '') {
            errors.numLayouts = "Please make decision for Number of Layouts";
        } else {
            inputs.numLayouts = numLayouts;
        }

        if(numLayouts == 1) {
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
        } else if (numLayouts == 2) {
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
        } else if (numLayouts == 3) {
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
        } else if (numLayouts == 4) {
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
        console.log("Inputs Sent!!!", inputs);
        navigate("/breakpointlayout", {state: {inputs}});
        } 
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
                <p>Breakpoint Layout</p>
                    <button className="close-button" aria-label="close create Breakpoint Layout modal" onClick={close}>
                        <img src={closeIcon}></img>
                    </button>
                </div>

            <div className="modal-container tool-tipcontainer">

            <div className="input-field-container theme-field size-field">
                <div className="modal-checkbox">
                <FormField className="modal-content-theme">           
                    <label htmlFor="num-layouts" aria-label={`Number of Breakpoint Layout Asterik-Required`}>
                        {`Number of Breakpoint Layout:`}<span className="asterik" >*</span>
                    </label>
                    <select
                        id="num-layouts"
                        name="num-layouts"
                        value={numLayouts}
                        onChange={(event) => setNumLayouts(event.target.value)}
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

            { numLayouts == "1" ? (
                <>
                <div className="input-field-container">
                    <FormField className="form-modal__content">
                        <label className="wbh-modal__label" aria-label={`Text for the Title of Breakpoint Layout 1: Asterik-Required`} for="breakpointLayoutTitle1">
                        {`Text for the Title of Breakpoint Layout 1: `}<span className="asterik">*</span> 
                        <Input
                            id="breakpointLayoutTitle1"
                            className="text_modal__input"
                            autoComplete="off"
                            name="breakpointLayoutTitle1"
                            maxLength="15"
                            value={inputs.breakpointLayoutTitle1 || ""} 
                            onChange={handleChange}
                            aria-required="true"
                        />
                        </label>
                        <p className='error' aria-atomic="true">{inputErrors.breakpointLayoutTitle1}</p>
                    </FormField>
                </div>
                <div className="input-field-container">
                    <FormField className="form-modal__content">
                        <label className="wbh-modal__label" aria-label={`Text for the Description of Breakpoint Layout 1: Asterik-Required`} for="breakpointLayoutText1">
                        {`Text for the Description of Breakpoint Layout 1: `}<span className="asterik">*</span> 
                        <Input
                            id="breakpointLayoutText1"
                            className="text_modal__input"
                            autoComplete="off"
                            name="breakpointLayoutText1"
                            maxLength="250"
                            value={inputs.breakpointLayoutText1 || ""} 
                            onChange={handleChange}
                            aria-required="true"
                        />
                        </label>
                        <p className='error' aria-atomic="true">{inputErrors.breakpointLayoutText1}</p>
                    </FormField>
                </div>
                </>    
                )
            : numLayouts == "2" ? (
                <>
                <div className="input-field-container">
                    <FormField className="form-modal__content">
                        <label
                        className="wbh-modal__label"
                        aria-label={`Text for the Title of Breakpoint Layout 1: Asterik-Required`}
                        for="breakpointLayoutTitle1"
                        >
                        {`Text for the Title of Breakpoint Layout 1: `}<span className="asterik">*</span> 
                        <Input
                            id="breakpointLayoutTitle1"
                            className="text_modal__input"
                            autoComplete="off"
                            name="breakpointLayoutTitle1"
                            maxLength="15"
                            value={inputs.breakpointLayoutTitle1 || ""} 
                            onChange={handleChange}
                            aria-required="true"
                        />
                        </label>
                        <p className='error' aria-atomic="true">{inputErrors.breakpointLayoutTitle1}</p>
                    </FormField>
                </div>
                <div className="input-field-container">
                    <FormField className="form-modal__content">
                        <label className="wbh-modal__label" aria-label={`Text for the Description of Breakpoint Layout 1: Asterik-Required`} for="breakpointLayoutText1">
                        {`Text for the Description of Breakpoint Layout 1: `}<span className="asterik">*</span> 
                        <Input
                            id="breakpointLayoutText1"
                            className="text_modal__input"
                            autoComplete="off"
                            name="breakpointLayoutText1"
                            maxLength="250"
                            value={inputs.breakpointLayoutText1 || ""} 
                            onChange={handleChange}
                            aria-required="true"
                        />
                        </label>
                        <p className='error' aria-atomic="true">{inputErrors.breakpointLayoutText1}</p>
                    </FormField>
                </div>
                <div className="input-field-container">
                <FormField className="form-modal__content">
                    <label
                    className="wbh-modal__label"
                    aria-label={`Text for the Title of Breakpoint Layout 2: Asterik-Required`}
                    for="breakpointLayoutTitle2"
                    >
                    {`Text for the Title of Breakpoint Layout 2: `}<span className="asterik">*</span> 
                    <Input
                        id="breakpointLayoutTitle2"
                        className="text_modal__input"
                        autoComplete="off"
                        name="breakpointLayoutTitle2"
                        maxLength="15"
                        value={inputs.breakpointLayoutTitle2 || ""} 
                        onChange={handleChange}
                        aria-required="true"
                    />
                    </label>
                    <p className='error' aria-atomic="true">{inputErrors.breakpointLayoutTitle2}</p>
                </FormField>
                </div>
                <div className="input-field-container">
                    <FormField className="form-modal__content">
                        <label className="wbh-modal__label" aria-label={`Text for the Description of Breakpoint Layout 2: Asterik-Required`} for="breakpointLayoutText2">
                        {`Text for the Description of Breakpoint Layout 2: `}<span className="asterik">*</span> 
                        <Input
                            id="breakpointLayoutText2"
                            className="text_modal__input"
                            autoComplete="off"
                            name="breakpointLayoutText2"
                            maxLength="250"
                            value={inputs.breakpointLayoutText2 || ""} 
                            onChange={handleChange}
                            aria-required="true"
                        />
                        </label>
                        <p className='error' aria-atomic="true">{inputErrors.breakpointLayoutText2}</p>
                    </FormField>
                </div>
                </>
            ) : numLayouts == "3" ? (
                <>
                <div className="input-field-container">
                    <FormField className="form-modal__content">
                        <label
                        className="wbh-modal__label"
                        aria-label={`Text for the Title of Breakpoint Layout 1: Asterik-Required`}
                        for="breakpointLayoutTitle1"
                        >
                        {`Text for the Title of Breakpoint Layout 1: `}<span className="asterik">*</span> 
                        <Input
                            id="breakpointLayoutTitle1"
                            className="text_modal__input"
                            autoComplete="off"
                            name="breakpointLayoutTitle1"
                            maxLength="15"
                            value={inputs.breakpointLayoutTitle1 || ""} 
                            onChange={handleChange}
                            aria-required="true"
                        />
                        </label>
                        <p className='error' aria-atomic="true">{inputErrors.breakpointLayoutTitle1}</p>
                    </FormField>
                </div>
                <div className="input-field-container">
                    <FormField className="form-modal__content">
                        <label className="wbh-modal__label" aria-label={`Text for the Description of Breakpoint Layout 1: Asterik-Required`} for="breakpointLayoutText1">
                        {`Text for the Description of Breakpoint Layout 1: `}<span className="asterik">*</span> 
                        <Input
                            id="breakpointLayoutText1"
                            className="text_modal__input"
                            autoComplete="off"
                            name="breakpointLayoutText1"
                            maxLength="250"
                            value={inputs.breakpointLayoutText1 || ""} 
                            onChange={handleChange}
                            aria-required="true"
                        />
                        </label>
                        <p className='error' aria-atomic="true">{inputErrors.breakpointLayoutText1}</p>
                    </FormField>
                </div>
                <div className="input-field-container">
                <FormField className="form-modal__content">
                    <label
                    className="wbh-modal__label"
                    aria-label={`Text for the Title of Breakpoint Layout 2: Asterik-Required`}
                    for="breakpointLayoutTitle2"
                    >
                    {`Text for the Title of Breakpoint Layout 2: `}<span className="asterik">*</span> 
                    <Input
                        id="breakpointLayoutTitle2"
                        className="text_modal__input"
                        autoComplete="off"
                        name="breakpointLayoutTitle2"
                        maxLength="15"
                        value={inputs.breakpointLayoutTitle2 || ""} 
                        onChange={handleChange}
                        aria-required="true"
                    />
                    </label>
                    <p className='error' aria-atomic="true">{inputErrors.breakpointLayoutTitle2}</p>
                </FormField>
                </div>
                <div className="input-field-container">
                <FormField className="form-modal__content">
                    <label
                    className="wbh-modal__label"
                    aria-label={`Text for the Description of Breakpoint Layout 2: Asterik-Required`}
                    for="breakpointLayoutText2"
                    >
                    {`Text for the Description of Breakpoint Layout 2: `}<span className="asterik">*</span> 
                    <Input
                        id="breakpointLayoutText2"
                        className="text_modal__input"
                        autoComplete="off"
                        name="breakpointLayoutText2"
                        maxLength="250"
                        value={inputs.breakpointLayoutText2 || ""} 
                        onChange={handleChange}
                        aria-required="true"
                    />
                    </label>
                    <p className='error' aria-atomic="true">{inputErrors.breakpointLayoutText2}</p>
                </FormField>
                </div>
                <div className="input-field-container">
                <FormField className="form-modal__content">
                    <label
                    className="wbh-modal__label"
                    aria-label={`Text for the Title of Breakpoint Layout 3: Asterik-Required`}
                    for="breakpointLayoutTitle3"
                    >
                    {`Text for the Title of Breakpoint Layout 3: `}<span className="asterik">*</span> 
                    <Input
                        id="breakpointLayoutTitle3"
                        className="text_modal__input"
                        autoComplete="off"
                        name="breakpointLayoutTitle3"
                        maxLength="15"
                        value={inputs.breakpointLayoutTitle3 || ""} 
                        onChange={handleChange}
                        aria-required="true"
                    />
                    </label>
                    <p className='error' aria-atomic="true">{inputErrors.breakpointLayoutTitle3}</p>
                </FormField>
                </div>
                <div className="input-field-container">
                    <FormField className="form-modal__content">
                        <label className="wbh-modal__label" aria-label={`Text for the Description of Breakpoint Layout 3: Asterik-Required`} for="breakpointLayoutText3">
                        {`Text for the Description of Breakpoint Layout 3: `}<span className="asterik">*</span> 
                        <Input
                            id="breakpointLayoutText3"
                            className="text_modal__input"
                            autoComplete="off"
                            name="breakpointLayoutText3"
                            maxLength="250"
                            value={inputs.breakpointLayoutText3 || ""} 
                            onChange={handleChange}
                            aria-required="true"
                        />
                        </label>
                        <p className='error' aria-atomic="true">{inputErrors.breakpointLayoutText3}</p>
                    </FormField>
                </div>
                </>
            ) : numLayouts == "4" ? (
                <>
                <div className="input-field-container">
                    <FormField className="form-modal__content">
                        <label
                        className="wbh-modal__label"
                        aria-label={`Text for the Title of Breakpoint Layout 1: Asterik-Required`}
                        for="breakpointLayoutTitle1"
                        >
                        {`Text for the Title of Breakpoint Layout 1: `}<span className="asterik">*</span> 
                        <Input
                            id="breakpointLayoutTitle1"
                            className="text_modal__input"
                            autoComplete="off"
                            name="breakpointLayoutTitle1"
                            maxLength="15"
                            value={inputs.breakpointLayoutTitle1 || ""} 
                            onChange={handleChange}
                            aria-required="true"
                        />
                        </label>
                        <p className='error' aria-atomic="true">{inputErrors.breakpointLayoutTitle1}</p>
                    </FormField>
                </div>
                <div className="input-field-container">
                    <FormField className="form-modal__content">
                        <label className="wbh-modal__label" aria-label={`Text for the Description of Breakpoint Layout 1: Asterik-Required`} for="breakpointLayoutText1">
                        {`Text for the Description of Breakpoint Layout 1: `}<span className="asterik">*</span> 
                        <Input
                            id="breakpointLayoutText1"
                            className="text_modal__input"
                            autoComplete="off"
                            name="breakpointLayoutText1"
                            maxLength="250"
                            value={inputs.breakpointLayoutText1 || ""} 
                            onChange={handleChange}
                            aria-required="true"
                        />
                        </label>
                        <p className='error' aria-atomic="true">{inputErrors.breakpointLayoutText1}</p>
                    </FormField>
                </div>
                <div className="input-field-container">
                <FormField className="form-modal__content">
                    <label
                    className="wbh-modal__label"
                    aria-label={`Text for the Title of Breakpoint Layout 2: Asterik-Required`}
                    for="breakpointLayoutTitle2"
                    >
                    {`Text for the Title of Breakpoint Layout 2: `}<span className="asterik">*</span> 
                    <Input
                        id="breakpointLayoutTitle2"
                        className="text_modal__input"
                        autoComplete="off"
                        name="breakpointLayoutTitle2"
                        maxLength="15"
                        value={inputs.breakpointLayoutTitle2 || ""} 
                        onChange={handleChange}
                        aria-required="true"
                    />
                    </label>
                    <p className='error' aria-atomic="true">{inputErrors.breakpointLayoutTitle2}</p>
                </FormField>
                </div>
                <div className="input-field-container">
                <FormField className="form-modal__content">
                    <label
                    className="wbh-modal__label"
                    aria-label={`Text for the Description of Breakpoint Layout 2: Asterik-Required`}
                    for="breakpointLayoutText2"
                    >
                    {`Text for the Description of Breakpoint Layout 2: `}<span className="asterik">*</span> 
                    <Input
                        id="breakpointLayoutText2"
                        className="text_modal__input"
                        autoComplete="off"
                        name="breakpointLayoutText2"
                        maxLength="250"
                        value={inputs.breakpointLayoutText2 || ""} 
                        onChange={handleChange}
                        aria-required="true"
                    />
                    </label>
                    <p className='error' aria-atomic="true">{inputErrors.breakpointLayoutText2}</p>
                </FormField>
                </div>
                <div className="input-field-container">
                <FormField className="form-modal__content">
                    <label
                    className="wbh-modal__label"
                    aria-label={`Text for the Title of Breakpoint Layout 3: Asterik-Required`}
                    for="breakpointLayoutTitle3"
                    >
                    {`Text for the Title of Breakpoint Layout 3: `}<span className="asterik">*</span> 
                    <Input
                        id="breakpointLayoutTitle3"
                        className="text_modal__input"
                        autoComplete="off"
                        name="breakpointLayoutTitle3"
                        maxLength="15"
                        value={inputs.breakpointLayoutTitle3 || ""} 
                        onChange={handleChange}
                        aria-required="true"
                    />
                    </label>
                    <p className='error' aria-atomic="true">{inputErrors.breakpointLayoutTitle3}</p>
                </FormField>
                </div>
                <div className="input-field-container">
                    <FormField className="form-modal__content">
                        <label className="wbh-modal__label" aria-label={`Text for the Description of Breakpoint Layout 3: Asterik-Required`} for="breakpointLayoutText3">
                        {`Text for the Description of Breakpoint Layout 3: `}<span className="asterik">*</span> 
                        <Input
                            id="breakpointLayoutText3"
                            className="text_modal__input"
                            autoComplete="off"
                            name="breakpointLayoutText3"
                            maxLength="250"
                            value={inputs.breakpointLayoutText3 || ""} 
                            onChange={handleChange}
                            aria-required="true"
                        />
                        </label>
                        <p className='error' aria-atomic="true">{inputErrors.breakpointLayoutText3}</p>
                    </FormField>
                </div>
                <div className="input-field-container">
                <FormField className="form-modal__content">
                    <label
                    className="wbh-modal__label"
                    aria-label={`Text for the Title of Breakpoint Layout 4: Asterik-Required`}
                    for="breakpointLayoutTitle4"
                    >
                    {`Text for the Title of Breakpoint Layout 4: `}<span className="asterik">*</span> 
                    <Input
                        id="breakpointLayoutTitle4"
                        className="text_modal__input"
                        autoComplete="off"
                        name="breakpointLayoutTitle4"
                        maxLength="15"
                        value={inputs.breakpointLayoutTitle4 || ""} 
                        onChange={handleChange}
                        aria-required="true"
                    />
                    </label>
                    <p className='error' aria-atomic="true">{inputErrors.breakpointLayoutTitle4}</p>
                </FormField>
                </div>
                <div className="input-field-container">
                    <FormField className="form-modal__content">
                        <label className="wbh-modal__label" aria-label={`Text for the Description of Breakpoint Layout 4: Asterik-Required`} for="breakpointLayoutText4">
                        {`Text for the Description of Breakpoint Layout 4: `}<span className="asterik">*</span> 
                        <Input
                            id="breakpointLayoutText4"
                            className="text_modal__input"
                            autoComplete="off"
                            name="breakpointLayoutText4"
                            maxLength="250"
                            value={inputs.breakpointLayoutText4 || ""} 
                            onChange={handleChange}
                            aria-required="true"
                        />
                        </label>
                        <p className='error' aria-atomic="true">{inputErrors.breakpointLayoutText4}</p>
                    </FormField>
                </div>
                </>
            ) : ( " " )
            }

            <div className="input-field-container theme-field size-field">
                <div className="modal-checkbox">
                <FormField className="modal-content-theme">
                    <label for="theme" aria-label="Select the theme for the Breakpoint Layout Asterik-Required"> 
                    <p>Please select the theme colour: <span className="asterik">*</span> </p>
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
                    <Link props={BreakpointLayoutProps} className="btn btn-primary btn-lg" onClick={OnSubmit}>
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

export default BreakpointLayoutForm;