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
    const initialValues={toasterType:data.toasterType,
        title:data.title,
        message:data.message,
        buttonText:data.buttonText};
    const [formValues,setFormValues]=useState(initialValues);
  
    const [errors, setErrors] = useState({});
    const toasterProps = {
        toasterType:formValues.toasterType,
        title:formValues.title,
        message:formValues.message,
        buttonText:formValues.buttonText
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
        errors.title = 'Title is required.';
      }

      if (!formValues.message) {
        errors.message = 'Message is required.';
      }

      if (!formValues.buttonText) {
        errors.buttonText = 'Button text is required.';
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
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formValues.title}
            onChange={handleChange}
          />
          {errors.title && <span className="error">{errors.title}</span>}
        </div>
        <div className='toaster-fields'>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formValues.message}
            onChange={handleChange}
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
          />
          {errors.buttonText && <span className="error">{errors.buttonText}</span>}
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