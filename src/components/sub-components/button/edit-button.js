import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CustomButton } from "./CustomButton";
import { FormField, Input } from "@fluentui/react-northstar";
import { useNavigate } from 'react-router-dom';
import closeIcon from "../../asset/images/cross-white.png";
import "../header/components/header-modal/header-modal.scss";

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
        Choice_Theme: data.theme,
    }

    const [inputs, setInputs] = useState(initialValues);
    const navigate = useNavigate()

    const [inputErrors, setInputErrors] = useState({});

    // const [BorderRadius, setBorderRadius] = useState("");
    // const [BoxShadow, setBoxShadow] = useState("");
    // const [themeValue, setThemeValue] = useState();
    // const [sizeValue, setSizeValue] = useState();
    const [isBtnCheck, setBtnCheck] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        // console.log("event :", e.target.type);
        setInputs({ ...inputs, [name]: value });
        console.log("In handleChange>>>",inputs);
    };


    // const handleChange = (e) => {
    //     // const { name, value } = e.target;
    //     console.log("event :", e.target.value);
    //     // setInputs({ ...inputs, [name]: value });
    //     if (e.target.id === "btntext") {
    //         setInputs({ ...inputs, btntext: e.target.value });
    //       } else if (e.target.name === "Choice_BorderRadius") {
    //         setBorderRadius({ ...inputs, Choice_BorderRadius: e.target.value });
    //       } else if (e.target.name === "Choice_BoxShadow") {
    //         setBoxShadow({ ...inputs, Choice_BoxShadow: e.target.value });
    //       } else if (e.target.name === "border_radius") {
    //         setInputs({ ...inputs, border_radius: e.target.value });
    //       } else if (e.target.name === "Choice_Size") {
    //         setSizeValue({sizeValue, Choice_Size: e.target.value });
    //       } else {
    //         setThemeValue({themeValue, themeValue: e.target.value });
    //       }
    //     console.log("Are inputs clear????", inputs);
    // };

    const ButtonProps = {
        ButtonText: inputs.btntext,
        Choice_BorderRadius: inputs.Choice_BorderRadius,
        BorderRadius: inputs.border_radius,
        Choice_BoxShadow: inputs.Choice_BoxShadow,
        Choice_Size: inputs.Choice_Size,
        Choice_Theme: inputs.Choice_Theme,
    };


    const checkValidation = (values) => {

        let errors = {};
        
        if (values.btntext == undefined) {
        errors.btntext = "Text is required!"; 
        } else if (values.btntext !== undefined) {
            if(values.btntext.length > 15){
                errors.btntext = "Text should be shorter!"; 
            } 
        }   

        if (values.Choice_BorderRadius === "") {
            errors.BorderRadius = "Please make decision for Border Radius field";
        }

        if (values.border_radius == undefined) {
            errors.border_radius = "Please enter a Border Radius value";
        } else if (values.border_radius != undefined) {
            if (values.border_radius < 0) {
                errors.border_radius = "Please enter a positive Border Radius value";
            } else if (values.border_radius > 50) {
                errors.border_radius = "Border Radius shouldn't exceed 50px";
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
       
        if(values.Choice_BoxShadow === ""){
            errors.BoxShadow = "Please make decision for Box Shadow field";
        } 

        // if (!values.box_shadow) { 
        //     errors.box_shadow = "Please enter a Box Shadow value"; 
        // } 
    
        if (values.Choice_Size === undefined) { 
            errors.size = "Please select a button size";
        } 

        if(values.Choice_Theme === undefined){
            errors.theme = "Please select the value from the dropdown";
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
        navigate("/button", {state: {inputs}});
        close();
        //window.location.reload(true);
        } else {
        // console.log("Validation Failed >>>> Errors Present", validerrors);
        }
    };




return (
    <div className="modal_wapper">
        <div className="modal-content form-modalcontainer">
            <div className="form-header">
            <p>Header</p>
                <button className="close-button" onClick={close}>
                    <img src={closeIcon}></img>
                </button>
            </div>

        <div className="modal-container">
            {/* <p>
            Please select the attributes according your preference to create Customized Button.
            </p> */}
  
        <div className="input-field-container">
            <FormField className="form-modal__content">
                <label
                className="wbh-modal__label"
                aria-label="Text for the Button Asterik-Required"
                for="btntext"
                >
                Text for the Button: <span className="asterik">*</span> 
                <Input
                    id="btntext"
                    className="text_modal__input"
                    autoComplete="off"
                    name="btntext"
                    maxLength="15"
                    value={inputs.btntext} 
                    onChange={handleChange}
                    aria-required="true"
                    // aria-describedby="name-err-title"
                />
                </label>
                <p className='error'>{inputErrors.btntext}</p>
            </FormField>
        </div>

        <div className="input-field-container logo-field">
            <p>Would you like to have Border Radius for Button?<span className="asterik">*</span></p>
            <div className="modal-checkbox">
            <FormField className="modal-content-checkbox">
              <label className="modal-label" htmlFor="Choice_BorderRadiusyes">
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
              <label className="modal-label" htmlFor="Choice_BorderRadiusno">
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

        <div className="input-field-container">
            <FormField className="form-modal__content">
                <label
                className="modal__label"
                aria-label="Border Radius Asterik-Required"
                for="border_radius"
                >
                Border Radius for the Button: <span className="asterik">*</span> 
                <Input
                    id="border_radius"
                    type="number" 
                    className="text_modal__input"
                    autoComplete="off"
                    name="border_radius"
                    aria-required="true"
                    value={inputs.border_radius} 
                    onChange={handleChange}         
                />
                </label>
                <p className='error'>{inputErrors.border_radius}</p>
            </FormField>
        </div>

        <div className="input-field-container">
            <FormField className="form-modal__content">
                <label
                className="modal__label"
                aria-label="Border Width Asterik-Required"
                for="border_width"
                >
                Border Width for the Button: <span className="asterik">*</span> 
                <Input
                    id="border_width"
                    type="number" 
                    className="text_modal__input"
                    autoComplete="off"
                    name="border_width"
                    aria-required="true"
                    value={inputs.border_width} 
                    onChange={handleChange}         
                />
                </label>
                <p className='error'>{inputErrors.border_width}</p>
            </FormField>
        </div>

        <div className="input-field-container logo-field">
            <p>Would you like to have Box Shadow for Button?<span className="asterik">*</span></p>
            {/* <label htmlFor="Choice_BoxShadow">Would you like to have Box Shadow for Button? <span className="astrick">*</span></label> */}
            <div className="modal-checkbox">
            <FormField className="modal-content-checkbox">
              <label className="modal-label" htmlFor="Choice_BoxShadowyes">
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
              <label className="modal-label" htmlFor="Choice_BoxShadowno">
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
          <p className="error">{inputErrors.BoxShadow}</p>
        </div>

        {/* <div className="input-field-container">
            <FormField className="form-modal__content">
                <label
                className="modal__label"
                aria-label="Title for Asterik-Required"
                for="box_shadow"
                >
                Box Shadow for the Button:
                <Input
                    id="box_shadow"
                    type="number" 
                    className="modal__input"
                    autoComplete="off"
                    name="box_shadow"
                    aria-required="true"
                    value={inputs.box_shadow || ""} 
                    onChange={handleChange}         
                />
                </label>
                <p className='error'>{inputErrors.box_shadow}</p>
            </FormField>
        </div> */}

        <div className="input-field-container">
            <div className="modal-checkbox">
            <FormField className="modal-content-theme">
                <label for="Choice_Size"> 
                <p>Please select size of the Button: <span className="asterik">*</span> </p>
                    <select name="Choice_Size" id="Choice_Size"  value={inputs.Choice_Size} onChange={handleChange}>
                        <option value="">--</option>         
                        <option value="0.5em">0.5 em</option>
                        <option value="1em">1 em</option>
                        <option value="Half width">Half width</option>
                        <option value="Full width">Full width</option>
                    </select>
                </label>
            </FormField>
            </div>
            <p className='error'>{inputErrors.size}</p>
        </div>

        <div className="input-field-container theme-field">
            <div className="modal-checkbox">
            <FormField className="modal-content-theme">
                <label for="Choice_Theme"> 
                <p>Please select the theme colour.<span className="asterik">*</span> </p>
                    <select name="Choice_Theme" id="Choice_Theme" value={inputs.Choice_Theme} onChange={handleChange}>
                        <option value="">--</option>         
                        <option value="Normal">Normal</option>
                        <option value="Dark">Dark</option>
                        <option value="cg1">Capgemini-blue</option>
                        <option value="cg2">Capgemini-purple</option>
                    </select>
                </label>
            </FormField>
            </div>
            <p className="error">{inputErrors.theme}</p>
        </div>

        
            
        {/* {
            isBtnCheck ? <CustomButton{...inputs}/> : "Button not displayed"
        } */}

        <div className="button-section">
            <div className="link-button">
                {/* <button className="btn btn-primary btn-lg" onClick={OnSubmit}> 
                    Submit
                </button> */}
                <Link state={ButtonProps} className="btn btn-primary btn-lg" onClick={OnSubmit}>
                    Update
                </Link>
            </div>
        </div>
        
        </div>
        </div>
    </div>
    );
};

export default EditButtonModal;