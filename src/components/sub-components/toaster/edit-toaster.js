import React, { useState }  from 'react';
import FocusTrap from "focus-trap-react";
import closeIcon from "../../../components/asset/images/cross-white.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './toaster-form.scss';

function EditToasterForm(props) {
    const { close,data } = props;
    const [toasterType, setToasterType] = useState('');
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [buttonText, setButtonText] = useState('');
    const [toastdirection,setDirection]=useState('');
    const [toastTheme,setToastTheme]=useState('');

    const initialValues={
      toasterType:data.toasterType,
      title: data.title,
      message:data.message,
      buttonText:data.buttonText,
      toastdirection:data.toastdirection,
    };

    const [formValues,setFormValues]=useState(initialValues);
    const [errors, setErrors] = useState({});

    const toasterProps = {
        toasterType:formValues.toasterType,
        title: formValues.title,
        message:formValues.message,
        buttonText:formValues.buttonText,
        toastdirection:formValues.toastdirection,
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

      if (!formValues.title) {
        errors.title = 'Toaster Title is required.';
      }

      if (!formValues.message) {
        errors.message = 'Description message is required.';
      }

      if (!formValues.buttonText) {
        errors.buttonText = 'Button text is required.';
      }
      if (formValues.toastdirection == undefined || formValues.toastdirection == null || formValues.toastdirection == "") {
        errors.dir = "Direction is required";
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
        setTitle(formValues.title);
        setMessage(formValues.message);
        setButtonText(formValues.buttonText);
        setDirection(formValues.toastdirection);
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
            <img alt="close modal" src={closeIcon}></img>
          </button>
        </div>
        <div className="modal-container card-section">
      <form onSubmit={handleSubmit}>
        <div className='toaster-fields'>
          <label htmlFor="toasterType">Toaster Type: <span className="astrick" >*</span></label>
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
          {errors.toasterType && <span className="error-message">{errors.toasterType}</span>}
        </div>
        <div className='toaster-fields'>
          <label htmlFor="title">Toaster Title: <span className="astrick" >*</span></label>
          <input
            type="text"
            id="title"
            name="title"
            value={formValues.title}
            onChange={handleChange}
            maxlength="15" 
          />
          {errors.title && <span className="error-message">{errors.title}</span>}
        </div>
        <div className='toaster-fields'>
          <label htmlFor="message">Description/Message: <span className="astrick" >*</span></label>
          <input
            type="text"
            id="message"
            name="message"
            value={formValues.message}
            onChange={handleChange}
            maxlength="25" 
          />
          {errors.message && <span className="error-message">{errors.message}</span>}
        </div>
        <div className='toaster-fields'>
          <label htmlFor="buttonText">Button Text: <span className="astrick" >*</span></label>
          <input
            type="text"
            id="buttonText"
            name="buttonText"
            value={formValues.buttonText}
            onChange={handleChange}
            maxlength="10" 
          />
          {errors.buttonText && <span className="error-message">{errors.buttonText}</span>}
        </div>
        <div className=" toaster-fields">
                <label htmlFor="toastdirection" aria-label="Direction for Asterik-Required">
                  Choose Direction: <span className="astrick">*</span>
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
                {errors.dir && <p className="error-message">{errors.dir}</p>}
              </div>
        
        <div className="button-section">
              <div className="link-button">
                <Link
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={handleSubmit}
                  aria-label="Update"
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
}

export default EditToasterForm;