import React, { useState } from 'react';
import FocusTrap from "focus-trap-react";
import closeIcon from "../../../asset/images/cross-white.png";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
//import './Form.scss';

const EditSelect = (props) => {
    const { close,data }=props;
    const history=useNavigate();
  const [label, setLabel] = useState('');
  const [numOptions, setNumOptions] = useState();
  const [inputType, setInputType] = useState('select');
  const [boxSize, setBoxSize] = useState('');
  const [theme, setTheme] = useState('light');
  const [optionTexts, setOptionTexts] = useState([]);
  const [errors, setErrors] = useState({});
  const initialValues={
    label:data.label,
    numOptions:data.numOptions,
    inputType:data.inputType,
    boxSize:data.boxSize,
    optionTexts:data.optionTexts,
    theme:data.theme
  };
  const [formValues,setFormValues]=useState(initialValues);
  const selectProps = {
    label:formValues.label,
    numOptions:formValues.numOptions,
    inputType:formValues.inputType,
    boxSize:formValues.boxSize,
    optionTexts:formValues.optionTexts,
    theme:formValues.theme
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("change");
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formValues.label) {
      newErrors.label = 'Label is required';
      valid = false;
    } else if (formValues.label.length > 25) {
      newErrors.label = 'Label should not exceed 25 characters';
      valid = false;
    }

    if (!formValues.numOptions) {
      newErrors.numOptions = 'Number of Options is required';
      valid = false;
    } else if (formValues.numOptions < 1 || formValues.numOptions > 5) {
      newErrors.numOptions = 'Number of Options should be between 1 and 5';
      valid = false;
    }
    formValues.optionTexts.forEach((optionText, index) => {
      console.log(optionText);
      if (!optionText || optionText==undefined) {
        newErrors[`optionText${index}`] = `Option ${index + 1} Text is required`;
        valid = false;
      }
    });

    if (!formValues.boxSize) {
      newErrors.boxSize = 'Box Size is required';
      valid = false;
    } else if (formValues.boxSize < 1) {
      newErrors.boxSize = 'Box Size should be greater than 0';
      valid = false;
    }
    if (!formValues.inputType) {
        newErrors.inputType = 'Input Type is required';
        valid = false;
      } 
      if (!formValues.theme) {
        newErrors.theme = 'Theme is required';
        valid = false;
      } 

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationError = validateForm();
    if (Object.keys(validationError).length === 0) {
      console.log('Label:', label);
      console.log('Number of Options:', numOptions);
      console.log('Options:', optionTexts);
      console.log('Input Type:', inputType);
      console.log('Box Size:', boxSize);
      console.log('Theme:', theme);
      history("/formcomponents/select", {state: {selectProps}});
    }else {
      setErrors(validationError);
    }
  };
  const handleOptionTextChange = (index, value) => {
    if (!Array.isArray(formValues.optionTexts)) {
      setOptionTexts(new Array(formValues.numOptions).fill(''));
    }
    const updatedOptionTexts = [...formValues.optionTexts];
    updatedOptionTexts[index] = value;
    setOptionTexts(updatedOptionTexts);
  };

  const renderOptionTextInputs = () => {
    const inputs = [];
    for (let i = 0; i < formValues.numOptions; i++) {
      const optionTextError = errors[`optionText${i}`];
      inputs.push(
        <div className='range-fields' key={i}>
        <label>{`Option ${i + 1} Text`}</label>
        <input
         // key={i}
          type="text"
          name="optionTexts"
         // placeholder={`Option ${i + 1} Text`}
          value={formValues.optionTexts[i] || ''}
          onChange={(e) => handleOptionTextChange(i, e.target.value)}
          required
        />
        {optionTextError && <span className="error">{optionTextError}</span>}
        </div>
      );
    }
    return inputs;
  };
  return (
    <FocusTrap
    focusTrapOptions={{
      // escapeDeactivates: false
      onDeactivate: close
    }}
  >
<div className="modal_wapper">
  <div className="modal-content form-modalcontainer">
    <div class="form-header">
      <p>Select</p>
      <button className="close-button" aria-label="close modal" onClick={()=>{close();}}>
        <img src={closeIcon}></img>
      </button>
    </div>
    <div className="modal-container card-section">
    <form onSubmit={handleSubmit} className="form">
    <div className='range-fields'>
      <label>Label:<span className="asterik">*</span></label>
        <input
          type="text"
          name='label'
          value={formValues.label}
          maxLength={25}
          onChange={handleChange}
          required
        />
        {errors.label && <span className="error-message">{errors.label}</span>}
      </div>
      <div className='range-fields'>
      <label>Number of Options (1-5):<span className="asterik">*</span></label>
        <input
          type="number"
          name="numOptions"
          min={1}
          max={5}
          value={formValues.numOptions}
          onChange={handleChange}
          required
        />
        {errors.numOptions && <span className="error-message">{errors.numOptions}</span>}
      </div>
        {renderOptionTextInputs()}
      <div className='range-fields'>
      <label>Input Type:<span className="asterik">*</span></label>
        <select name='inputType' value={formValues.inputType} onChange={handleChange}>
          {/* <option value="">Select</option> */}
          <option value="select">Single Select</option>
          <option value="multiselect">Multi Select</option>
        </select>
        {errors.inputType && <span className="error-message">{errors.inputType}</span>}
      </div>
      <div className='range-fields'>
        <label>Size:<span className="asterik">*</span></label>
        <select name="boxSize" value={formValues.boxSize} onChange={handleChange}>
          <option value="">Select Size</option>
          <option value="25%">25%</option>
          <option value="50%">50%</option>
          <option value="75%">75%</option>
          <option value="100%">100%</option>
        </select>
        {errors.boxSize && <span className="error-message">{errors.boxSize}</span>}
      </div>
    <div className='range-fields'>
      <label> Theme: <span className="asterik">*</span></label>
        <select name='theme' value={formValues.theme} onChange={handleChange}>
        <option value="select-light">Light</option>
          <option value="select-dark">Dark</option>
          <option value="select-blue">blue</option>
          <option value="select-purple">purple</option>
        </select>
        {errors.theme && <span className="error-message">{errors.theme}</span>}
    </div>
    <div className="button-section">
              <div className="link-button">
                <Link
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={handleSubmit}
                  aria-label="Submit"
                >
                  Update
                </Link>
              </div>
        </div>
    </form>
    </div>
      </div>
    </div>
      </FocusTrap>
  );
};

export default EditSelect;
