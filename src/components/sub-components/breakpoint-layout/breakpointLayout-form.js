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

    const [numSelects, setNumSelects] = useState(0);
    const [themeValue, setThemeValue] = useState();
    


    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };

    const checkValidation = (values) => {

        let errors = {};

        

        
        

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
        } else {
        }   
    };

    const BreakpointLayoutProps = {
        
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
                    <label htmlFor="num-selects" aria-label={`Number of Breakpoint Layout Asterik-Required`}>
                        {`Number of Breakpoint Layout:`}<span className="asterik" >*</span>
                    </label>
                    <select
                        id="num-selects"
                        name="num-selects"
                        value={numSelects}
                        onChange={(event) => setNumSelects(event.target.value)}
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

            { numSelects == "1" ? (
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
            : numSelects == "2" ? (
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
            ) : numSelects == "3" ? (
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
                        <label className="wbh-modal__label" aria-label={`Text for the Description of Breakpoint Layout 1: Asterik-Required`} for="breakpointLayoutText3">
                        {`Text for the Description of Breakpoint Layout 1: `}<span className="asterik">*</span> 
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
            ) : numSelects == "4" ? (
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