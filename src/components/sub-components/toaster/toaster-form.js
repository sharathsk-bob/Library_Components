import React, { useState }  from 'react';
import FocusTrap from "focus-trap-react";
import closeIcon from "../../../components/asset/images/cross-white.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './toaster-form.scss';

function ToasterForm(props) {
    const { close } = props;
    const [toasterType, setToasterType] = useState('');
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [buttonText, setButtonText] = useState('');
    const [toastdirection,setDirection]=useState('');
  
    const [errors, setErrors] = useState({});
    const toasterProps = {
        toasterType,
        title,
        message,
        buttonText,
        toastdirection,
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

      if (!toasterType) {
        errors.toasterType = 'Toaster type is required.';
      }

      if (!title) {
        errors.title = 'Toaster Title is required.';
      }

      if (!message) {
        errors.message = 'Message is required.';
      }

      if (!buttonText) {
        errors.buttonText = 'Button text is required.';
      }
      if (toastdirection == undefined || toastdirection == null || toastdirection == "") {
        errors.dir = "Direction is required";
      }
  
      return errors;
    };
  
    const displayToaster = () => {
      console.log('Toaster Type:', toasterType);
      console.log('Message:', message);
      console.log('Button Text:', buttonText);
    };
    const resetToaster = () => {
        setToasterType('');
        setTitle('')
        setMessage('');
        setButtonText('');
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
          <p>Toaster</p>
          <button className="close-button" aria-label="close modal" onClick={()=>{resetToaster();close();}}>
            <img alt="close modal" src={closeIcon}></img>
          </button>
        </div>
        <div className="modal-container card-section">
      <form onSubmit={handleSubmit}>
        <div className='toaster-fields'>
          <label htmlFor="toasterType">Toaster Type: <span className="astrick" >*</span></label>
          <select
            id="toasterType"
            value={toasterType}
            onChange={(e) => setToasterType(e.target.value)}
          >
            <option value="">Select Toaster Type</option>
            <option value="success">Success</option>
            <option value="info">Info</option>
            <option value="warning">Warning</option>
            <option value="error">Error</option>
          </select>
          {errors.toasterType && <span className="error-message">{errors.toasterType}</span>}
        </div>
        <div className='toaster-fields'>
          <label htmlFor="title">Toaster Title: <span className="astrick" >*</span></label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxlength="15" 
          />
          {errors.title && <span className="error-message">{errors.title}</span>}
        </div>
        <div className='toaster-fields'>
          <label htmlFor="message">Description/Message: <span className="astrick" >*</span></label>
          <input
            type="text"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxlength="25" 
          />
          {errors.message && <span className="error-message">{errors.message}</span>}
        </div>
        <div className='toaster-fields'>
          <label htmlFor="buttonText">Button Text: <span className="astrick" >*</span></label>
          <input
            type="text"
            id="buttonText"
            value={buttonText}
            onChange={(e) => setButtonText(e.target.value)}
            maxlength="10" 
          />
          {errors.buttonText && <span className="error-message">{errors.buttonText}</span>}
        </div>
        <div className=" toaster-fields">
                <label htmlFor="dir" aria-label="Direction for Asterik-Required">
                  Choose Direction: <span className="astrick">*</span>
                </label>
                <select
                  id="dir"
                  name="dir"
                  value={toastdirection}
                  onChange={(event) => setDirection(event.target.value)}
                >
                  <option value="">Select</option>
                  <option value="Top">Top</option>
                  <option value="Bottom">Bottom</option>
                </select> 
                {errors.dir && <p className="error-message">{errors.dir}</p>}
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

export default ToasterForm;