import React, { useState }  from 'react'
import FocusTrap from "focus-trap-react";
import closeIcon from "../../../asset/images/cross-white.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./progress-form.scss";

function ProgressEditForm(props) {
    const { close,data } = props;
    const [label, setLabel] = useState("");
    const [percentage, setPercentage] = useState("");
    const [theme, setTheme] = useState("");
    const [size, setSize] = useState("");
    const history=useNavigate();
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const initialValues={
        label:data.label,
        percentage:data.percentage,
        theme:data.theme,
        size:data.size
      };
  
      const [formValues,setFormValues]=useState(initialValues);
    const progressProps = {
        label:formValues.label,
        percentage:formValues.percentage,
        theme:formValues.theme,
        size:formValues.size
      };
      const handleChange = (e) => {
        const { name, value } = e.target;
        console.log("change");
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
      };
  
    const validateForm = () => {
      const newErrors = {};
  
      if (formValues.label.length === 0) {
        newErrors.label = "Label is required.";
      } else if (formValues.label.length > 25) {
        newErrors.label = "Label must be less than or equal to 25 characters.";
      }
  
      if (formValues.percentage.length === 0) {
        newErrors.percentage = "Percentage is required.";
      } else {
        const parsedPercentage = parseInt(formValues.percentage, 10);
        if (isNaN(parsedPercentage) || parsedPercentage < 1 || parsedPercentage > 100) {
          newErrors.percentage = "Percentage must be a number between 1 and 100.";
        }
      }
  
      if (!formValues.theme) {
        newErrors.theme = "Theme is required.";
      }
  
      if (!formValues.size) {
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
          displayProgress();
          history("/formcomponents/progress", {state: {progressProps}});
        }
      };

      const displayProgress = () => {
        setLabel(formValues.label);
        setPercentage(formValues.percentage);
        setTheme(formValues.theme);
        setSize(formValues.size);
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
      <button className="close-button" aria-label="close modal" onClick={()=>{close();}}>
        <img src={closeIcon}></img>
      </button>
    </div>
    <div className="modal-container card-section">
      <form onSubmit={handleSubmit}>
        <div className='progress-fields'>
          <label htmlFor="label">Progress Bar Label (25 characters max):</label><br />
          <input
            type="text"
            id="label"
            name="label"
            value={formValues.label}
            onChange={handleChange}
            maxLength="25"
            required
          />
          {errors.label && <span className="error-message">{errors.label}</span>}
        </div>

        <div className='progress-fields'>
          <label htmlFor="percentage">Percentage (1-100):</label><br />
          <input
            type="number"
            id="percentage"
            name="percentage"
            value={formValues.percentage}
            onChange={handleChange}
            min="1"
            max="100"
            required
          />
          {errors.percentage && <span className="error-message">{errors.percentage}</span>}
        </div>

        <div className='progress-fields'>
          <label htmlFor="theme">Theme:</label><br />
          <select
            id="theme"
            name="theme"
            value={formValues.theme}
            onChange={handleChange}
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
        <label for="size">Size:</label><br/>
    <select id="size" name="size" value={formValues.size}
            onChange={handleChange}
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

export default ProgressEditForm