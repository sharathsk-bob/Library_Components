import React, { useState } from 'react';
import FocusTrap from "focus-trap-react";
import closeIcon from "../../asset/images/cross-white.png";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const EditCarouselForm = (props) => {
  const {close,data}=props;
  const history=useNavigate();
  const [cardCount, setCardCount] = useState(1);
  const [wantImage, setWantImage] = useState('');
  const [theme, setTheme] = useState('');
  const [width, setWidth] = useState('');
  const [errors, setErrors] = useState({});
  const initialValues={
    cardCount:data.cardCount,
    wantImage:data.wantImage,
    theme:data.theme,
    width:data.width
  };
  const [formValues,setFormValues]=useState(initialValues);
  
  
  const carouselProps = {
    cardCount:formValues.cardCount,
    wantImage:formValues.wantImage,
    theme:formValues.theme,
    width:formValues.width
  };
  const validateForm = () => {
    const errors = {};

    if (formValues.cardCount < 1 || formValues.cardCount > 5) {
      errors.cardCount = 'Please select a card count between 1 and 5.';
    }

    if (formValues.wantImage === '') {
      errors.wantImage = 'Please select whether you want an image or not.';
    }

    if (formValues.theme === '') {
      errors.theme = 'Please select a theme.';
    }

    if (formValues.width === '') {
      errors.width = 'Please select a width.';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      // Handle form submission here
      console.log('Form submitted!');
      console.log('Card Count:', cardCount);
      console.log('Want Image:', wantImage);
      console.log('Theme:', theme);
      console.log('Width:', width);
      history("/carousel", {state: {carouselProps}});
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("change");
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
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
          <p>Carousel</p>
          <button className="close-button" aria-label="close modal" onClick={()=>{close();}}>
            <img alt="close modal" src={closeIcon}></img>
          </button>
        </div>
        <div className="modal-container card-section">
    <form onSubmit={handleSubmit}>
    <div className='range-fields'>
      <label>
        No of Cards: <span className="astrick" >*</span></label>
        <select name="cardCount" value={formValues.cardCount} onChange={handleChange}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        {errors.cardCount && <span className="error">{errors.cardCount}</span>}
      </div>
    <div className='range-fields'>
      <label>
        Do you want an Image? <span className="astrick" >*</span></label>
        <select name="wantImage" value={formValues.wantImage} onChange={handleChange}>
          <option value="">-- Select --</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        {errors.wantImage && <span className="error">{errors.wantImage}</span>}
      </div>
      <div className='range-fields'>
      <label>
        Select theme: <span className="astrick" >*</span></label>
        <select name="theme" value={formValues.theme} onChange={handleChange}>
          <option value="">-- Select --</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="blue">Blue</option>
          <option value="purple">Purple</option>
        </select>
        {errors.theme && <span className="error">{errors.theme}</span>}
      </div>
      <div className='range-fields'>
      <label>
        Width: <span className="astrick" >*</span></label>
        <select name="width" value={formValues.width} onChange={handleChange}>
        <option value="">-- Select --</option>
          <option value="50">50%</option>
          <option value="75">75%</option>
          <option value="100">100%</option>
        </select>
        {errors.width && <span className="error">{errors.width}</span>}
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

export default EditCarouselForm;