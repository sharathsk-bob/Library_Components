import React, { useState } from 'react';
import FocusTrap from "focus-trap-react";
import closeIcon from "../../../asset/images/cross-white.png";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
//import './Form.scss';

const SelectForm = (props) => {
    const { close }=props;
    const history=useNavigate();
  const [label, setLabel] = useState('');
  const [numOptions, setNumOptions] = useState();
  const [inputType, setInputType] = useState('select');
  //const [helperText, setHelperText] = useState('');
  const [boxSize, setBoxSize] = useState('');
  const [theme, setTheme] = useState('light');
  const [optionTexts, setOptionTexts] = useState([]);
  const [errors, setErrors] = useState({});
  const selectProps = {
    label,
    numOptions,
    optionTexts,
    inputType,
    //helperText,
    boxSize,
    theme
  };
  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!label) {
      newErrors.label = 'Label is required';
      valid = false;
    } else if (label.length > 25) {
      newErrors.label = 'Label should not exceed 25 characters';
      valid = false;
    }

    if (!numOptions) {
      newErrors.numOptions = 'Number of Options is required';
      valid = false;
    } else if (numOptions < 1 || numOptions > 5) {
      newErrors.numOptions = 'Number of Options should be between 1 and 5';
      valid = false;
    }
    console.log(optionTexts);
    optionTexts.forEach((optionText, index) => {
      console.log(optionText);
      if (!optionText || optionText==undefined) {
        newErrors[`optionText${index}`] = `Option ${index + 1} Text is required`;
        valid = false;
      }
    });

    if (!boxSize) {
      newErrors.boxSize = 'Box Size is required';
      valid = false;
    } 
    if (!inputType) {
        newErrors.inputType = 'Input Type is required';
        valid = false;
      } 

      if (!theme) {
        newErrors.theme = 'Theme is required';
        valid = false;
      } 

    setErrors(newErrors);
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationError = validateForm();
    console.log(validationError);
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
  const handleNumChnage=(e)=>{
    setNumOptions(parseInt(e.target.value));
    console.log(Array.isArray(optionTexts))
    if (Array.isArray(optionTexts)) {
      for(let i=0;i<parseInt(e.target.value);i++)
      optionTexts.push('')
    }
  }
  const handleOptionTextChange = (index, value) => {
    const updatedOptionTexts = [...optionTexts];
    updatedOptionTexts[index] = value;
    setOptionTexts(updatedOptionTexts);
  };
  const resetSelect = () => {
    setLabel('');
    setNumOptions(1);
    setOptionTexts([]);
    setInputType('select');
    setBoxSize('');
    setTheme('light');
  };
  const renderOptionTextInputs = () => {
    const inputs = [];
    for (let i = 0; i < numOptions; i++) {
      const optionTextError = errors[`optionText${i}`];
      inputs.push(
        <div className='range-fields' key={i}>
        <label>{`Option ${i + 1} Text`}</label>
        <input
         // key={i}
          type="text"
          maxLength={25}
         // placeholder={`Option ${i + 1} Text`}
          value={optionTexts[i] || ''}
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
      <button className="close-button" aria-label="close modal" onClick={()=>{resetSelect();close();}}>
        <img alt="close modal" src={closeIcon}></img>
      </button>
    </div>
    <div className="modal-container card-section">
    <form onSubmit={handleSubmit} className="form">
    <div className='range-fields'>
      <label>Label:<span className="asterik">*</span></label>
        <input
          type="text"
          value={label}
          maxLength={25}
          onChange={(e) => setLabel(e.target.value)}
          required
        />
        {errors.label && <span className="error-message">{errors.label}</span>}
      </div>
      <div className='range-fields'>
      <label>Number of Options (1-5):<span className="asterik">*</span></label>
        <select
                id="num-options"
                name="num-options"
                value={numOptions}
                onChange={handleNumChnage}
              >
                <option value="">Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
        </select>
        {errors.numOptions && <span className="error-message">{errors.numOptions}</span>}
      </div>
        {renderOptionTextInputs()}
      <div className='range-fields'>
      <label>Input Type:<span className="asterik">*</span></label>
        <select value={inputType} onChange={(e) => setInputType(e.target.value)}>
          {/* <option value="">Select</option> */}
          <option value="select">Single Select</option>
          <option value="multiselect">Multi Select</option>
        </select>
        {errors.inputType && <span className="error-message">{errors.inputType}</span>}
      </div>
    <div className='range-fields'>
        <label>Size:<span className="asterik">*</span></label>
        <select value={boxSize} onChange={(e) => setBoxSize(e.target.value)}>
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
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="select-light">Light</option>
          <option value="select-dark">Dark</option>
          <option value="select-blue">Blue</option>
          <option value="select-purple">Purple</option>
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
                  Submit
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

export default SelectForm;
