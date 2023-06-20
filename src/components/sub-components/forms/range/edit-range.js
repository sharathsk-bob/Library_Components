import React, { useState } from 'react';
import FocusTrap from "focus-trap-react";
import closeIcon from "../../../asset/images/cross-white.png";
import { Link } from "react-router-dom";
import './range-form.scss';
import { useNavigate } from 'react-router-dom';

const EditRangeForm = (props) => {
    const { close,data }=props;
  const [inputLabel, setInputLabel] = useState('');
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');
  const [theme, setTheme] = useState('');
  const [size, setSize] = useState('');
  const history=useNavigate();

  const [errors, setErrors] = useState({});
  const initialValues={
    inputLabel:data.inputLabel,
    minValue:data.minValue,
    maxValue:data.maxValue,
    theme:data.theme,
    size:data.size
  };
  const [formValues,setFormValues]=useState(initialValues);
  const rangeProps = {
    inputLabel:formValues.inputLabel,
    minValue:formValues.minValue,
    maxValue:formValues.maxValue,
    theme:formValues.theme,
    size:formValues.size
  };


  const validateForm = () => {
    const errors = {};

    if (!formValues.inputLabel) {
      errors.inputLabel = 'Input Label is required.';
    }

    if (!formValues.minValue) {
      errors.minValue = 'minValue is required.';
    }

    if (!formValues.maxValue) {
      errors.maxValue = 'maxValue is required.';
    }
    if(parseInt(formValues.maxValue)<parseInt(formValues.minValue)){
      errors.maxValue = 'minValue must be less than maxValue';
    }
    if(parseInt(formValues.maxValue)>=10000){
      errors.maxValue = 'maxValue limit is 9999';
    }
    if(parseInt(formValues.minValue)>=9999){
      errors.minValue = 'minValue limit is 9998';
    }
    if (!formValues.theme) {
      errors.theme = 'Theme is required.';
    }
    if (!formValues.size) {
        errors.size = 'Size is required.';
      }
   

    return errors;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("change");
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
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
          <button className="close-button" aria-label="close modal" onClick={()=>{close();}}>
            <img alt="close modal" src={closeIcon}></img>
          </button>
        </div>
        <div className="modal-container card-section">
    <form onSubmit={handleSubmit}>
      <div className='range-fields'>
        <label>Input Label (25 characters max):<span className="asterik">*</span></label>
        <input
          type="text"
          name='inputLabel'
          value={formValues.inputLabel}
          maxLength={25}
          onChange={handleChange}
        />
        {errors.inputLabel && <span className="error-message">{errors.inputLabel}</span>}
      </div>
      <div className='range-fields'>
        <label>Min Value:<span className="asterik">*</span></label>
        <input
          type="number"
          name="minValue"
          value={formValues.minValue}
          onChange={handleChange}
        />
        {errors.minValue && <span className="error-message">{errors.minValue}</span>}
      </div>
      <div className='range-fields'>
        <label>Max Value:<span className="asterik">*</span></label>
        <input
          type="number"
          name="maxValue"
          value={formValues.maxValue}
          onChange={handleChange}
        />
        {errors.maxValue && <span className="error-message">{errors.maxValue}</span>}
      </div>
      <div className='range-fields'>
        <label>Theme:<span className="asterik">*</span></label>
        <select value={formValues.theme} name="theme" onChange={handleChange}>
          <option value="">Select Theme</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="blue">Blue</option>
          <option value="purple">Purple</option>
        </select>
        {errors.theme && <span className="error-message">{errors.theme}</span>}
      </div>
      <div className='range-fields'>
        <label>Size:<span className="asterik">*</span></label>
        <select value={formValues.size} name="size" onChange={handleChange}>
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

export default EditRangeForm;
