import React, { useState }  from 'react'
import FocusTrap from "focus-trap-react";
import closeIcon from "../../../asset/images/cross-white.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./progress-form.scss";

function ProgressForm(props) {
    const { close } = props;
    const [label, setLabel] = useState("");
    const [percentage, setPercentage] = useState("");
    const [theme, setTheme] = useState("");
    const [size, setSize] = useState("");
    const history=useNavigate();
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    const progressProps = {
        label,
        percentage,
        theme,
        size
      };
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      if (name === "label") {
        setLabel(value);
      } else if (name === "percentage") {
        setPercentage(value);
      } else if (name === "theme") {
        setTheme(value);
      } else if (name === "size") {
        setSize(value);
      }
    };
  
    const validateForm = () => {
      const newErrors = {};
  
      if (label.length === 0) {
        newErrors.label = "Label is required.";
      } else if (label.length > 25) {
        newErrors.label = "Label must be less than or equal to 25 characters.";
      }
  
      if (percentage.length === 0) {
        newErrors.percentage = "Percentage is required.";
      } else {
        const parsedPercentage = parseInt(percentage, 10);
        if (isNaN(parsedPercentage) || parsedPercentage < 1 || parsedPercentage > 100) {
          newErrors.percentage = "Percentage must be a number between 1 and 100.";
        }
      }
  
      if (!theme) {
        newErrors.theme = "Theme is required.";
      }
  
      if (!size) {
        newErrors.size = "Size is required.";
      }
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const handleSubmit = (e) => {
        e.preventDefault();
    
        const isValid = validateForm();
    
        if (isValid && !isSubmitting) {
          setIsSubmitting(true);
    
          // Perform form submission or further processing
          console.log("Label:", label);
          console.log("Percentage:", percentage);
          console.log("Theme:", theme);
          console.log("Size:", size);
          history("progress", {state: {progressProps}});
        }
      };
    const resetToaster = () => {
        setLabel('');
        setPercentage('')
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
      <p>Progress Bar</p>
      <button className="close-button" aria-label="close modal" onClick={()=>{resetToaster();close();}}>
        <img src={closeIcon}></img>
      </button>
    </div>
    <div className="modal-container card-section">
      <form onSubmit={handleSubmit}>
        <div className='progress-fields'>
          <label htmlFor="label">Progress Bar Label (25 characters max):<span className="asterik">*</span></label><br />
          <input
            type="text"
            id="label"
            name="label"
            value={label}
            onChange={handleInputChange}
            maxLength="25"
            required
          />
          {errors.label && <span className="error-message">{errors.label}</span>}
        </div>

        <div className='progress-fields'>
          <label htmlFor="percentage">Percentage (1-100):<span className="asterik">*</span></label><br />
          <input
            type="number"
            id="percentage"
            name="percentage"
            value={percentage}
            onChange={handleInputChange}
            min="1"
            max="100"
            required
          />
          {errors.percentage && <span className="error-message">{errors.percentage}</span>}
        </div>

        <div className='progress-fields'>
          <label htmlFor="theme">Theme:<span className="asterik">*</span></label><br />
          <select
            id="theme"
            name="theme"
            value={theme}
            onChange={handleInputChange}
            required
          >
            <option value="">-- Select Theme --</option>
            <option value="Light">Light</option>
            <option value="dark">Dark</option>
            <option value="cg1blue">Blue</option>
            <option value="cg2purple">Purple</option>
          </select>
          {errors.theme && <span className="error-message">{errors.theme}</span>}
        </div>
        <div className='progress-fields'>
        <label for="size">Size:<span className="asterik">*</span></label><br/>
    <select id="size" name="size" value={size}
            onChange={handleInputChange}
            required>
        <option value="">-- Select Size --</option>
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
  )
}

export default ProgressForm