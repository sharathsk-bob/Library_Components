import React, { useState } from 'react';
import FocusTrap from "focus-trap-react";
import closeIcon from "../../../asset/images/cross-white.png";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './switchform.scss';

const EditSwitchForm = (props) => {
    const { close,data } = props;
  const [label, setLabel] = useState('');
  const [theme, setTheme] = useState('');
  const [size, setSize] = useState('');
  const history=useNavigate();
  const [errors, setErrors] = useState({});
     const initialValues={
        label:data.label,
        percentage:data.percentage,
        theme:data.theme,
        size:data.size
      };
  
      const [formValues,setFormValues]=useState(initialValues);
      const switchProps = {
        label:formValues.label,
        theme:formValues.theme,
        size:formValues.size
      };
      const handleChange = (e) => {
        const { name, value } = e.target;
        console.log("change");
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
      };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, do something with the data
      console.log('Form submitted:', { label, theme, size });
      history("/formcomponents/switch", {state: {switchProps}});
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formValues.label) {
      errors.label = 'Label is required';
    }
    if (!formValues.theme) {
        errors.theme = 'Theme is required';
      }
      if (!formValues.size) {
        errors.size = 'Size is required';
      }

    return errors;
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
      <button className="close-button" aria-label="close modal" onClick={()=>{close();}}>
        <img src={closeIcon}></img>
      </button>
    </div>
    <div className="modal-container card-section">
    <form onSubmit={handleSubmit}>
      <div className='switch-fields'>
        <label>Switch Control Label:</label>
        <input
          type="text"
          name="label"
          value={formValues.label}
          onChange={handleChange}
        />
        {errors.label && <span className='error-message'>{errors.label}</span>}
      </div>
      <div className='switch-fields'>
        <label>Theme:</label>
        <select name="theme" value={formValues.theme} onChange={handleChange}>
        <option value="">Select</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="cg1-blue">Blue</option>
          <option value="cg2-purple">Purple</option>
        </select>
        {errors.theme && <span className='error-message'>{errors.theme}</span>}
      </div>
      <div className='switch-fields'>
        <label>Size:</label>
        <select name="size" value={formValues.size} onChange={handleChange}>
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

export default EditSwitchForm;
