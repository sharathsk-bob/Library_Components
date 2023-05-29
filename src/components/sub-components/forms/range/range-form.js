import React, { useState } from 'react';
import FocusTrap from "focus-trap-react";
import closeIcon from "../../../asset/images/cross-white.png";
import { Link } from "react-router-dom";
import './range-form.scss';
import { useNavigate } from 'react-router-dom';

const RangeForm = (props) => {
    const { close }=props;
  const [inputLabel, setInputLabel] = useState('');
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');
  const [theme, setTheme] = useState('');
  const [size, setSize] = useState('');
  const history=useNavigate();

  const [errors, setErrors] = useState({});
  const rangeProps = {
    inputLabel,
    minValue,
    maxValue,
    theme,
    size
  };
  const validateForm = () => {
    const errors = {};

    if (!inputLabel) {
      errors.inputLabel = 'Input Label is required.';
    }

    if (!minValue) {
      errors.minValue = 'minValue is required.';
    }

    if (!maxValue) {
      errors.maxValue = 'maxValue is required.';
    }

    if (!theme) {
      errors.theme = 'Theme is required.';
    }
    if (!size) {
        errors.size = 'Size is required.';
      }
   

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (Object.keys(validationError).length === 0) {
        displayToaster();
        history("/formcomponents/range", {state: {rangeProps}});
      } else {
        setErrors(validationError);
      }
    
  };
  const displayToaster = () => {
    console.log(inputLabel,minValue,maxValue,theme,size);
  };
  const resetRange = () => {
    setInputLabel('');
    setMinValue('');
    setMaxValue('');
    setTheme('');
    setSize('');
    setErrors({});
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
          <p>Range</p>
          <button className="close-button" aria-label="close modal" onClick={()=>{resetRange();close();}}>
            <img src={closeIcon}></img>
          </button>
        </div>
        <div className="modal-container card-section">
    <form onSubmit={handleSubmit}>
      <div className='range-fields'>
        <label>Input Label (25 characters max):</label>
        <input
          type="text"
          value={inputLabel}
          maxLength={25}
          onChange={(e) => setInputLabel(e.target.value)}
        />
        {errors.inputLabel && <span className="error-message">{errors.inputLabel}</span>}
      </div>
      <div className='range-fields'>
        <label>Min Value:</label>
        <input
          type="number"
          value={minValue}
          onChange={(e) => setMinValue(e.target.value)}
        />
        {errors.minValue && <span className="error-message">{errors.minValue}</span>}
      </div>
      <div className='range-fields'>
        <label>Max Value:</label>
        <input
          type="number"
          value={maxValue}
          onChange={(e) => setMaxValue(e.target.value)}
        />
        {errors.maxValue && <span className="error-message">{errors.maxValue}</span>}
      </div>
      <div className='range-fields'>
        <label>Theme:</label>
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="">Select Theme</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="blue">Blue</option>
          <option value="purple">Purple</option>
        </select>
        {errors.theme && <span className="error-message">{errors.theme}</span>}
      </div>
      <div className='range-fields'>
        <label>Size:</label>
        <select value={size} onChange={(e) => setSize(e.target.value)}>
          <option value="">Select Size</option>
          <option value="25%">25%</option>
          <option value="50%">50%</option>
          <option value="75%">75%</option>
          <option value="100%">100%</option>
        </select>
        {errors.size && <span className="error-message">{errors.size}</span>}
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

export default RangeForm;
