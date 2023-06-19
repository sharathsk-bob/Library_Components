import React, { useState } from 'react';
import FocusTrap from "focus-trap-react";
import closeIcon from "../../../asset/images/cross-white.png";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './switchform.scss';

const SwitchForm = (props) => {
    const { close } = props;
  const [label, setLabel] = useState('');
  const [theme, setTheme] = useState('');
  const [size, setSize] = useState('');
  const history=useNavigate();
  const [errors, setErrors] = useState({});
  const switchProps = {
    label,
    theme,
    size
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'label') {
      if (value.length <= 25) {
        setLabel(value);
      }
    } else if (name === 'theme') {
      setTheme(value);
    } else if (name === 'size') {
      setSize(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, do something with the data
      console.log('Form submitted:', { label, theme, size });
      history("switch", {state: {switchProps}});
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!label) {
      errors.label = 'Label is required';
    }
    if (!theme) {
        errors.theme = 'Theme is required';
      }
      if (!size) {
        errors.size = 'Size is required';
      }

    return errors;
  };
  const resetSwitch = () => {
    setLabel('');
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
      <p>Switch Control</p>
      <button className="close-button" aria-label="close modal" onClick={()=>{resetSwitch();close();}}>
        <img alt="close modal" src={closeIcon}></img>
      </button>
    </div>
    <div className="modal-container card-section">
    <form onSubmit={handleSubmit}>
      <div className='switch-fields'>
        <label>Switch Control Label:<span className="asterik">*</span></label>
        <input
          type="text"
          name="label"
          value={label}
          onChange={handleInputChange}
        />
        {errors.label && <span className='error-message'>{errors.label}</span>}
      </div>
      <div className='switch-fields'>
        <label>Theme:<span className="asterik">*</span></label>
        <select name="theme" value={theme} onChange={handleInputChange}>
        <option value="">Select</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="cg1-blue">Blue</option>
          <option value="cg2-purple">Purple</option>
        </select>
        {errors.theme && <span className='error-message'>{errors.theme}</span>}
      </div>
      <div className='switch-fields'>
        <label>Size:<span className="asterik">*</span></label>
        <select name="size" value={size} onChange={handleInputChange}>
            <option value="">Select</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        {errors.size && <span className='error-message'>{errors.size}</span>}
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

export default SwitchForm;
