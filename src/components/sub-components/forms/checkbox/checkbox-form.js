import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FocusTrap from "focus-trap-react";
import { FormField, Input } from "@fluentui/react-northstar";
import { useNavigate } from 'react-router-dom';
import closeIcon from "../../../asset/images/cross-white.png";
import "./checkbox.scss"

const CheckBoxForm =(props)=>{
    const navigate = useNavigate()
    const {close} = props;
    const [inputs, setInputs] = useState({});
    const [inputErrors, setInputErrors] = useState({});

    const [numSelects, setNumSelects] = useState(0);
    const [menus, setMenus] = useState([{ text: "" }]);
    const [layout, setLayout] = useState("");
    const [selectionType, setSelectionType] = useState("");
    const [themeValue, setThemeValue] = useState();
    const [fieldsetWidth, setfieldsetWidth] = useState();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };

    const handleNumSelectsChange = (event) => {
        const value = parseInt(event.target.value);
        console.log(value);
        if (value >= 1 && value <= 4) {
            //console.log("Number of checkboxes>>>>>>", value);
            setNumSelects(value);
            inputs.numSelects = value;
            //setMenus(newMenus);
            setInputErrors({});
        } else {
            setInputErrors({ numSelects: "Number of menus must be greater than 0" });
        }
    };

    // const handleMenuTextChange = (index, value) => {
    //     setMenus((prevMenus) => {
    //       const updatedMenus = [...prevMenus];
    //       updatedMenus[index] = {
    //         ...updatedMenus[index],
    //         text: value,
    //       };
    //       console.log("YE hai menu::::::::", menus);
    //       inputs.checkboxText = value;
    //       return updatedMenus;
    //     });
    // };
    

    const checkValidation = (values) => {

        let errors = {};

        if (values.boxLabel == undefined || values.boxLabel === '') {
            errors.boxLabel = "Label for Field set is required"; 
        } else if (values.boxLabel !== undefined) {
            if(values.boxLabel.length > 15){
                errors.boxLabel = "Label for Field set should be shorter"; 
            }
        }

        if(numSelects == 1) {
            if (values.selectorLabel1 == undefined || values.selectorLabel1 === '') {
                errors.selectorLabel1 = "Name is required"; 
            } else if (values.selectorLabel1 !== undefined) {
                if(values.selectorLabel1.length > 15){
                    errors.selectorLabel1 = "Name should be shorter"; 
                }
            }
        } else if (numSelects == 2) {
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
        } else if (numSelects == 3) {
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
        } else if (numSelects == 4) {
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

        // menus.forEach((menu, i) => {
        //     if (!menu.text) {
        //         errors[`menu${i}Text`] = "Please enter menu text";
        //     }
        // });

        if (selectionType  === undefined || selectionType === "") {
            errors.selectionType = "Please make decision for Selection Type";
        } else {
            inputs.Choice_SelectionType = selectionType;
        }

        if (layout === undefined || layout === "") {
            errors.layout = "Please make decision for Layout display of Check Box field";
        } else {
            inputs.Choice_Layout = layout;
        }

        if(fieldsetWidth === undefined || fieldsetWidth === ''){
            errors.fieldsetWidth = "Please select the Fieldset width from the dropdown";
        } else {
            inputs.Choice_fieldsetWidth = fieldsetWidth;
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
        console.log("Mtlb errors aaye????", validerrors)
        setInputErrors(validerrors);
        if(Object.keys(validerrors).length === 0)
        {
        console.log("Inputs Sent!!!", inputs);
        navigate("/formcomponents/checkbox", {state: {inputs}});
        } else {
        }
        
    };

    const CheckBoxProps = {
        Choice_SelectionType: inputs.Choice_SelectionType,
        checkboxLabel: inputs.checkboxLabel,
        Checkbox_No: inputs.numSelects,
        Selector_Name1: inputs.selectorLabel1,
        Selector_Name2: inputs.selectorLabel2,
        Selector_Name3: inputs.selectorLabel3,
        Selector_Name4: inputs.selectorLabel4,
        Choice_Layout: inputs.Choice_Layout,
        Choice_fieldsetWidth: inputs.fieldsetWidth,
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
            <p>{`Selector Type - ${selectionType}`}</p>
                <button className="close-button" aria-label={`close create ${selectionType} modal`} onClick={close}>
                    <img src={closeIcon}></img>
                </button>
            </div>

        <div className="modal-container tool-tipcontainer">

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
                    checked={selectionType === "Radio-Button"}
                    onChange={(e) => {
                        setSelectionType("Radio-Button");
                    }}
                />
                <div className="tag">
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
                    checked={selectionType === "Check-Box"}
                    onChange={(e) => {
                        setSelectionType("Check-Box");
                    }}
                />
                <div className="tag">
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
                aria-label={`Text for the Fieldset label of ${selectionType} Asterik-Required`}
                for="boxLabel"
                >
                {`Text for the Fieldset Label of ${selectionType}:`} <span className="asterik">*</span> 
                <Input
                    id="boxLabel"
                    className="text_modal__input"
                    autoComplete="off"
                    name="boxLabel"
                    maxLength="15"
                    value={inputs.boxLabel || ""} 
                    onChange={handleChange}
                    aria-required="true"
                />
                </label>
                <p className='error' aria-atomic="true">{inputErrors.boxLabel}</p>
            </FormField>
        </div>

        <div className="input-field-container theme-field size-field">
            <div className="modal-checkbox">
            <FormField className="modal-content-theme">           
                <label htmlFor="num-selects" aria-label={`Number of ${selectionType} Asterik-Required`}>
                    {`Number of ${selectionType}:`}<span className="asterik" >*</span>
                </label>
                <select
                    id="num-selects"
                    name="num-selects"
                    value={numSelects}
                    onChange={handleNumSelectsChange}
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
                <div className="input-field-container">
                <FormField className="form-modal__content">
                    <label className="wbh-modal__label" aria-label={`Text for the Label of ${selectionType} 1: Asterik-Required`} for="selectorLabel1">
                    {`Text for the Label of ${selectionType} 1: `}<span className="asterik">*</span> 
                    <Input
                        id="selectorLabel1"
                        className="text_modal__input"
                        autoComplete="off"
                        name="selectorLabel1"
                        maxLength="15"
                        value={inputs.selectorLabel1 || ""} 
                        onChange={handleChange}
                        aria-required="true"
                    />
                    </label>
                    <p className='error' aria-atomic="true">{inputErrors.selectorLabel1}</p>
                </FormField>
                </div>
                )
            : numSelects == "2" ? (
                <>
                <div className="input-field-container">
                <FormField className="form-modal__content">
                    <label
                    className="wbh-modal__label"
                    aria-label={`Text for the Label of ${selectionType} 1: Asterik-Required`}
                    for="selectorLabel1"
                    >
                    {`Text for the Label of ${selectionType} 1: `}<span className="asterik">*</span> 
                    <Input
                        id="selectorLabel1"
                        className="text_modal__input"
                        autoComplete="off"
                        name="selectorLabel1"
                        maxLength="15"
                        value={inputs.selectorLabel1 || ""} 
                        onChange={handleChange}
                        aria-required="true"
                    />
                    </label>
                    <p className='error' aria-atomic="true">{inputErrors.selectorLabel1}</p>
                </FormField>
                </div>
                <div className="input-field-container">
                <FormField className="form-modal__content">
                    <label
                    className="wbh-modal__label"
                    aria-label={`Text for the Label of ${selectionType} 2: Asterik-Required`}
                    for="selectorLabel2"
                    >
                    {`Text for the Label of ${selectionType} 2: `}<span className="asterik">*</span> 
                    <Input
                        id="selectorLabel2"
                        className="text_modal__input"
                        autoComplete="off"
                        name="selectorLabel2"
                        maxLength="15"
                        value={inputs.selectorLabel2 || ""} 
                        onChange={handleChange}
                        aria-required="true"
                    />
                    </label>
                    <p className='error' aria-atomic="true">{inputErrors.selectorLabel2}</p>
                </FormField>
                </div>
                </>
            ) : numSelects == "3" ? (
                <>
                <div className="input-field-container">
                <FormField className="form-modal__content">
                    <label
                    className="wbh-modal__label"
                    aria-label={`Text for the Label of ${selectionType} 1: Asterik-Required`}
                    for="selectorLabel1"
                    >
                    {`Text for the Label of ${selectionType} 1: `}<span className="asterik">*</span> 
                    <Input
                        id="selectorLabel1"
                        className="text_modal__input"
                        autoComplete="off"
                        name="selectorLabel1"
                        maxLength="15"
                        value={inputs.selectorLabel1 || ""} 
                        onChange={handleChange}
                        aria-required="true"
                    />
                    </label>
                    <p className='error' aria-atomic="true">{inputErrors.selectorLabel1}</p>
                </FormField>
                </div>
                <div className="input-field-container">
                <FormField className="form-modal__content">
                    <label
                    className="wbh-modal__label"
                    aria-label={`Text for the Label of ${selectionType} 2: Asterik-Required`}
                    for="selectorLabel2"
                    >
                    {`Text for the Label of ${selectionType} 2: `}<span className="asterik">*</span> 
                    <Input
                        id="selectorLabel2"
                        className="text_modal__input"
                        autoComplete="off"
                        name="selectorLabel2"
                        maxLength="15"
                        value={inputs.selectorLabel2 || ""} 
                        onChange={handleChange}
                        aria-required="true"
                    />
                    </label>
                    <p className='error' aria-atomic="true">{inputErrors.selectorLabel2}</p>
                </FormField>
                </div>
                <div className="input-field-container">
                <FormField className="form-modal__content">
                    <label
                    className="wbh-modal__label"
                    aria-label={`Text for the Label of ${selectionType} 3: Asterik-Required`}
                    for="selectorLabel3"
                    >
                    {`Text for the Label of ${selectionType} 3: `}<span className="asterik">*</span> 
                    <Input
                        id="selectorLabel3"
                        className="text_modal__input"
                        autoComplete="off"
                        name="selectorLabel3"
                        maxLength="15"
                        value={inputs.selectorLabel3 || ""} 
                        onChange={handleChange}
                        aria-required="true"
                    />
                    </label>
                    <p className='error' aria-atomic="true">{inputErrors.selectorLabel3}</p>
                </FormField>
                </div>
                </>
            ) : numSelects == "4" ? (
                <>
                <div className="input-field-container">
                <FormField className="form-modal__content">
                    <label
                    className="wbh-modal__label"
                    aria-label={`Text for the Label of ${selectionType} 1: Asterik-Required`}
                    for="selectorLabel1"
                    >
                    {`Text for the Label of ${selectionType} 1: `}<span className="asterik">*</span> 
                    <Input
                        id="selectorLabel1"
                        className="text_modal__input"
                        autoComplete="off"
                        name="selectorLabel1"
                        maxLength="15"
                        value={inputs.selectorLabel1 || ""} 
                        onChange={handleChange}
                        aria-required="true"
                    />
                    </label>
                    <p className='error' aria-atomic="true">{inputErrors.selectorLabel1}</p>
                </FormField>
                </div>
                <div className="input-field-container">
                <FormField className="form-modal__content">
                    <label
                    className="wbh-modal__label"
                    aria-label={`Text for the Label of ${selectionType} 2: Asterik-Required`}
                    for="selectorLabel2"
                    >
                    {`Text for the Label of ${selectionType} 2: `}<span className="asterik">*</span> 
                    <Input
                        id="selectorLabel2"
                        className="text_modal__input"
                        autoComplete="off"
                        name="selectorLabel2"
                        maxLength="15"
                        value={inputs.selectorLabel2 || ""} 
                        onChange={handleChange}
                        aria-required="true"
                    />
                    </label>
                    <p className='error' aria-atomic="true">{inputErrors.selectorLabel2}</p>
                </FormField>
                </div>
                <div className="input-field-container">
                <FormField className="form-modal__content">
                    <label
                    className="wbh-modal__label"
                    aria-label={`Text for the Label of ${selectionType} 3: Asterik-Required`}
                    for="selectorLabel3"
                    >
                    {`Text for the Label of ${selectionType} 3: `}<span className="asterik">*</span> 
                    <Input
                        id="selectorLabel3"
                        className="text_modal__input"
                        autoComplete="off"
                        name="selectorLabel3"
                        maxLength="15"
                        value={inputs.selectorLabel3 || ""} 
                        onChange={handleChange}
                        aria-required="true"
                    />
                    </label>
                    <p className='error' aria-atomic="true">{inputErrors.selectorLabel3}</p>
                </FormField>
                </div>
                <div className="input-field-container">
                <FormField className="form-modal__content">
                    <label
                    className="wbh-modal__label"
                    aria-label={`Text for the Label of ${selectionType} 4: Asterik-Required`}
                    for="selectorLabel4"
                    >
                    {`Text for the Label of ${selectionType} 4: `}<span className="asterik">*</span> 
                    <Input
                        id="selectorLabel4"
                        className="text_modal__input"
                        autoComplete="off"
                        name="selectorLabel4"
                        maxLength="15"
                        value={inputs.selectorLabel4 || ""} 
                        onChange={handleChange}
                        aria-required="true"
                    />
                    </label>
                    <p className='error' aria-atomic="true">{inputErrors.selectorLabel4}</p>
                </FormField>
                </div>
                </>
            ) : ( " " )
        }

        {/* {[...Array(numSelects)].map((_, i) => (
            <div className="menu-container" key={i}>
                <div className="sub-menu">
                    <label htmlFor={`menu-${i}-text`} aria-label="Menu Text for Asterik-Required">
                    Menu {i + 1} text:<span className="astrick">*</span>
                    </label>
                    <input
                    type="text"
                    // id={`menu-${i}-text`}
                    name={`menu-${i}-text`}
                    autocomplete="off"
                    //value={menus[i].text || ""}
                    onChange={(event) =>
                        handleMenuTextChange(i, event.target.value)
                    }
                    />
                    </div>
                    {inputErrors[`menu${i}Text`] && (
                    <p className="error">{inputErrors[`menu${i}Text`]}</p>
                    )}
            </div>
        ))} */}

        <div className="input-field-container logo-field">
            <p>{`Select the layout option for ${selectionType} `}<span className="asterik">*</span></p>
            <div className="modal-checkbox">
            <FormField className="modal-content-checkbox layout-field">
              <label className="modal-label" aria-label="Select vertical for layout option value">
                <input
                    className="modal-input"
                    type="radio"
                    value="Vertical"
                    name="Choice_Layout"
                    checked={layout === "Vertical"}
                    onChange={(e) => {
                        setLayout("Vertical");
                    }}
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
                    checked={layout === "Horizontal"}
                    onChange={(e) => {
                        setLayout("Horizontal");
                    }}
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
                <label for="fieldsetWidth" aria-label={`Select ${selectionType} width value Asterik-Required`}> 
                <p>{`Please select width of the ${selectionType}: `}<span className="asterik">*</span> </p>
                </label>
                    <select name="fieldsetWidth" id="fieldsetWidth"  value={fieldsetWidth} onChange={(event) => setfieldsetWidth(event.target.value)}>
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

        <div className="input-field-container theme-field size-field">
            <div className="modal-checkbox">
            <FormField className="modal-content-theme">
                <label for="theme" aria-label={`Select the theme for the ${selectionType} Asterik-Required`}> 
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
                <Link state={CheckBoxProps} props={inputs} className="btn btn-primary btn-lg" onClick={OnSubmit}>
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

export default CheckBoxForm;