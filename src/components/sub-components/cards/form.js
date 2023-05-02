import React, { useContext } from 'react'

import { useState } from 'react';
import './form.scss';
import Cards from './cards';
// import { useNavigate } from 'react-router-dom';
import closeIcon from "../../asset/images/cross-icon.png";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { AppContext } from '../app-context';



function Form(props) {
  const { close }=props;
  const { title,description,button1Text,button2Text,image,setTitle,setDescription,setButton1Text,setButton2Text,setImage,newCard }=useContext(AppContext);
  const [errors, setErrors] = useState({});
  //const navigate=useNavigate();
  const [activate,setActivate]=useState(false);
  const history = useNavigate();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid=validateForm();
    if(isValid){
      setActivate(true);
      history({
        pathname: "/cards",
    });
    }
   
    
  };
  console.log(newCard);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };
// if(activate==true){
//   return(
//     //close(),
//   <Cards {...newCard}/>
//   //close()
//   );

// }
  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (title.trim() === '') {
      errors.title = 'Title is required';
      isValid = false;
    }

    if (description.trim() === '') {
      errors.description = 'Description is required';
      isValid = false;
    }

    if (button1Text.trim() === '' && button2Text.trim() === '') {
      errors.buttons = 'At least one button text is required';
      isValid = false;
    }

    if (image === null) {
      errors.image = 'Image is required';
      isValid = false;
    }

    setErrors(errors);

    return isValid;
  };

  return (


    <div className="modal_wapper">
    <div className="modal-content header-modalcontainer">
      <button  className="close-button" onClick={close}>
        <img src={closeIcon}></img>
      </button>

      <div className="modal-container form-modal">
      <p>
          Please select the attributes according your prefrence to design the
          Card.
        </p>
      <form className="Form" onSubmit={(event) => handleSubmit(event, newCard)}>
      <div className="Form-field">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        {errors.title && <span className="error">{errors.title}</span>}
      </div>

      <div className="Form-field">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        {errors.description && (
          <span className="error">{errors.description}</span>
        )}
      </div>

      <div className="Form-field">
        <label htmlFor="button1Text">Button 1 text:</label>
        <input
          type="text"
          id="button1Text"
          value={button1Text}
          onChange={(event) => setButton1Text(event.target.value)}
        />
      </div>

      <div className="Form-field">
        <label htmlFor="button2Text">Button 2 text:</label>
        <input
          type="text"
          id="button2Text"
          value={button2Text}
          onChange={(event) => setButton2Text(event.target.value)}
        />
        {errors.buttons && <span className="error">{errors.buttons}</span>}
      </div>
      <div className="Form-field">
        <label htmlFor="button2Text"> Image:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
        {errors.buttons && <span className="error">{errors.image}</span>}
      </div>
      {/* <button  className="card-button"onClick={handleSubmit}>Submit</button> */}
      <div className="button-section">
          <div className="link-button">
          <Link type="button" className="btn btn-primary btn-lg" onClick={handleSubmit}>
          Submit
        </Link>
          </div>
       
        </div>
    </form>
       
      </div>
    </div>
  </div>
   
  );
}

export default Form;