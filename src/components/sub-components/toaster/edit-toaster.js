import React, { useState }  from 'react';
import FocusTrap from "focus-trap-react";
import closeIcon from "../../../components/asset/images/cross-white.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './toaster-form.scss';
function EditToasterForm(props) {
    const { close,data } = props;
    const [toasterType, setToasterType] = useState('');
    const [message, setMessage] = useState('');
    const [buttonText, setButtonText] = useState('');
    const [toastdirection,setDirection]=useState('');
    const [toastTheme,setToastTheme]=useState('');
    const initialValues={toasterType:data.toasterType,
        message:data.message,
        buttonText:data.buttonText,
        toastdirection:data.toastdirection,
      toastTheme:data.toastTheme};
    const [formValues,setFormValues]=useState(initialValues);
  
    const [errors, setErrors] = useState({});
    const toasterProps = {
        toasterType:formValues.toasterType,
        message:formValues.message,
        buttonText:formValues.buttonText,
        toastdirection:formValues.toastdirection,
        toastTheme:formValues.toastTheme
      };
    const history = useNavigate();
    const handleSubmit = (e) => {
      e.preventDefault();
      const validationErrors = validateForm();
  
      if (Object.keys(validationErrors).length === 0) {
 
        displayToaster();
        history("/toaster", {state: {toasterProps}});
      
      } else {
        setErrors(validationErrors);
      }
    };
  
    const validateForm = () => {
      const errors = {};

      if (!formValues.toasterType) {
        errors.toasterType = 'Toaster type is required.';
      }

      if (!formValues.message) {
        errors.message = 'Message is required.';
      }

      if (!formValues.buttonText) {
        errors.buttonText = 'Button text is required.';
      }
      if (formValues.toastdirection == undefined || formValues.toastdirection == null || formValues.toastdirection == "") {
        errors.dir = "Direction is required";
      }
      if (formValues.toastTheme == undefined || formValues.toastTheme == null || formValues.toastTheme == "") {
        errors.theme = "Theme is required";
      }
      return errors;
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log("change");
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
      };
    const displayToaster = () => {
        setToasterType(formValues.toasterType);
        setMessage(formValues.message);
        setButtonText(formValues.buttonText);
        setDirection(formValues.toastdirection);
        setToastTheme(formValues.toastTheme);
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
          <p>Toaster</p>
          <button className="close-button" aria-label="close modal" onClick={()=>{close();}}>
            <img src={closeIcon}></img>
          </button>
        </div>
        <div className="modal-container card-section">
      <form onSubmit={handleSubmit}>
        <div className='toaster-fields'>
          <label htmlFor="toasterType">Toaster Type:</label>
          <select
            id="toasterType"
            name="toasterType"
            value={formValues.toasterType}
            onChange={handleChange}
          >
            <option value="">Select Toaster Type</option>
            <option value="success">Success</option>
            <option value="info">Info</option>
            <option value="warning">Warning</option>
            <option value="error">Error</option>
          </select>
          {errors.toasterType && <span className="error">{errors.toasterType}</span>}
        </div>
        <div className='toaster-fields'>
          <label htmlFor="message">Message:</label>
          <input
            type="text"
            id="message"
            name="message"
            value={formValues.message}
            onChange={handleChange}
            maxlength="40" 
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </div>
        <div className='toaster-fields'>
          <label htmlFor="buttonText">Button Text:</label>
          <input
            type="text"
            id="buttonText"
            name="buttonText"
            value={formValues.buttonText}
            onChange={handleChange}
            maxlength="10" 
          />
          {errors.buttonText && <span className="error">{errors.buttonText}</span>}
        </div>
        <div className=" toaster-fields">
                <label htmlFor="toastdirection" aria-label="Direction for Asterik-Required">
                  Choose Direction:<span className="astrick">*</span>
                </label>
                <select
                  id="toastdirection"
                  name="toastdirection"
                  value={formValues.toastdirection}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="Top">Top</option>
                  <option value="Bottom">Bottom</option>
                </select> 
                {errors.dir && <p className="error">{errors.dir}</p>}
              </div>
        <div className=" toaster-fields theme-container">
                <label htmlFor="toastTheme" aria-label="Theme for Asterik-Required">
                  Theme:<span className="astrick">*</span>
                </label>
                <select
                  id="toastTheme"
                  name="toastTheme"
                  value={formValues.toastTheme}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="Normal">Light</option>
                  <option value="Dark">Dark</option>
                  <option value="cg1">Blue</option>
                  <option value="cg2">Purple</option>
                </select> 
                {errors.theme && <p className="error">{errors.theme}</p>}
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
}

export default EditToasterForm;