import React, { useContext } from "react";

import { useState } from "react";
import "./form.scss";
import Cards from "./cards";
// import { useNavigate } from 'react-router-dom';
import FocusTrap from "focus-trap-react";
import closeIcon from "../../../components/asset/images/cross-white.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../app-context";

function EditCard(props) {
  const { close,newCard } = props; 
  const {
    title,
    description,
    addButton,
    numButtons,
    button1Text,
    button2Text,
    image,
    addImage,
    width,
    theme,
    setTitle,
    setDescription,
    setAddButton,
    setNumButtons,
    setButton1Text,
    setButton2Text,
    setImage,
    setAddImage,
    setWidth,
    setTheme
   

  } = useContext(AppContext);
  const initialValues={title:title,description:description,addButton:addButton,numButtons:numButtons,button1Text:button1Text,button2Text:button2Text,image:image,addImage:addImage,width:width,theme:theme};
  const [formValues,setFormValues]=useState(initialValues);
  const [errors, setErrors] = useState({});
  //const navigate=useNavigate();
  const [activate, setActivate] = useState(false);
  const history = useNavigate();
  // const [addButton, setAddButton] = useState(null);
  // const [numButtons, setNumButtons] = useState(null);
  // const [addImage, setAddImage] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      //setActivate(true);
      close();
      setTitle(formValues.title);
    setDescription(formValues.description);
    setAddButton(formValues.addButton);
    setNumButtons(formValues.numButtons);
    setButton1Text(formValues.button1Text);
    setButton2Text(formValues.button2Text);
    setImage(formValues.image);
    setAddImage(formValues.addImage);
    setWidth(formValues.width);
    setTheme(formValues.theme);
    }
  };
  console.log(newCard);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFormValues({ ...formValues, image: file });
    
  };
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("change");
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  const validateForm = () => {
    let errors = {};
    let isValid = true;
    const isTitleValid = formValues.title.length <= 10;
    const isDescriptionValid = formValues.description.split(" ").length <= 100;
    if (formValues.title.trim() === "") {
      errors.title = "Title is required";
      isValid = false;
    }
    if (!isTitleValid) {
      errors.title = "Title should have only 10 characters";
      isValid = false;
    }

    if (formValues.description.trim() === "") {
      errors.description = "Description is required";
      isValid = false;
    }
    if (!isDescriptionValid) {
      errors.description = "Description should have only 100 words";
      isValid = false;
    }
    if (formValues.addButton == null) {
      errors.buttonsAdd = "Please Select an option";
      isValid = false;
    }
    if (formValues.addButton == 1 && formValues.numButtons == null) {
      errors.buttonsSelect = "Please Select an option";
      isValid = false;
    }
    if (formValues.numButtons == 1 && formValues.button1Text.trim() === "") {
      errors.buttons1 = "Button 1 new text is required";
      isValid = false;
    }

    if (formValues.numButtons == 2 && formValues.button1Text.trim() === "") {
      errors.buttons = "Button 1 text is required";
      isValid = false;
    }

    if (
      formValues.numButtons == 2 &&
      formValues.button1Text.trim() === "" &&
      formValues.button2Text.trim() === "" ||
      formValues.numButtons == 2 &&
      formValues.button1Text.trim() !== "" &&
      formValues.button2Text.trim() === ""
    ) {
      errors.buttons = "Button text is required";
      isValid = false;
    }
    if (formValues.addImage == null) {
      errors.imageAdd = "Please Select an option";
      isValid = false;
    }
    if (formValues.width == "") {
      errors.width = "Please Select the width";
      isValid = false;
    }
    if (formValues.addImage == 1 && formValues.image === null) {
      errors.image = "Image is required";
      isValid = false;
    }
    if (formValues.theme == undefined || formValues.theme==null || formValues.theme=="") {
      errors.theme = "Theme is required";
      isValid = false;
    }

    setErrors(errors);

    return isValid;
  };
  console.log(formValues);
  let radio1 = document.getElementById('addButton0');
  let radio2 = document.getElementById('addImage0');
  if(radio1?.checked){
    //  setNumButtons('0');
    //  setButton1Text('');
    //  setButton2Text('');
    //setFormValues({ ...formValues, numButtons: '0', button1Text: '', button2Text: '' }); 
    formValues.numButtons=0;
    formValues.button1Text='';
    formValues.button2Text='';     
  }
  if(radio2?.checked){
    formValues.image='';
 }
 if(formValues.numButtons==1){
  formValues.button2Text='';
 }
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
          <p>Edit Card</p>
          <button className="close-button" aria-label="close modal" onClick={close}>
          <img src={closeIcon}></img>
        </button>
        </div>

        <div className="modal-container">
          <p>
            Please select the attributes according your prefrence to design the
            Card.
          </p>
          <form
            className="Form"
            onSubmit={(event) => handleSubmit(event, newCard)}
          >
            <div className="Form-field">
              <label htmlFor="title" aria-label="Title for Asterik-Required" >Title: <span className="astrick">*</span></label>
              <input
                type="text"
                id="title"
                name="title"
                value={formValues.title}
                onChange={handleChange}
                maxlength="10" required
              />
              {errors.title && <span className="error">{errors.title}</span>}
            </div>

            <div className="Form-field">
              <label htmlFor="description"  aria-label="Description for Asterik-Required">Description: <span className="astrick">*</span></label>
              <textarea
                id="description"
                name="description"
                value={formValues.description}
                onChange={handleChange}
                maxlength="600"  required
              />
              {errors.description && (
                <span className="error">{errors.description}</span>
              )}
            </div>
            <div className="Form-field">
              <label htmlFor="addButton" aria-label="Add Button for Asterik-Required">Add button: <span className="astrick">*</span></label>
              <div className="radio-buttons">
                <div>
                  <label htmlFor="addButton1" aria-label="Select Yes" >
                    <input
                      type="radio"
                      id="addButton1"
                      name="addButton"
                      value="1"
                      checked={formValues.addButton ==1}
                      onChange={handleChange
                      }
                    />
                    <div className="tag">
                  <span className="tag__cat">Yes </span>
                </div>
                  </label>
                </div>
                <div>
                  <label htmlFor="addButton0"  aria-label="Select No">
                    <input
                      type="radio"
                      id="addButton0"
                      name="addButton"
                      value="0"
                      checked={formValues.addButton ==0}
                      onChange={handleChange
                      }
                    />
                   <div className="tag">
                  <span className="tag__cat">No </span>
                </div>
                  </label>
                </div>
              </div>
              {errors.buttonsAdd && (
                <span className="error">{errors.buttonsAdd}</span>
              )}
            </div>

            <div
              className="Form-field"
              style={{ display: formValues.addButton == 1 ? "block" : "none" }}
            >
              <label htmlFor="numButtons"  aria-label=" Select Number of  Buttons for Asterik-Required">Number of Buttons: <span className="astrick">*</span></label>
              <select
                id="numButtons"
                name="numButtons"
                value={formValues.numButtons}
                onChange={handleChange}
              >
                <option value="0">Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
              {errors.buttonsSelect && (
                <span className="error">{errors.buttonsSelect}</span>
              )}
            </div>

            <div
              className="Form-field"
              style={{ display: formValues.numButtons >= 1 && formValues.addButton == 1 ? "block" : "none" }}
            >
              <label htmlFor="button1Text" aria-label="Button 1 text Asterik-Required">Button 1 text: <span className="astrick">*</span></label>
              <input
                type="text"
                id="button1Text"
                name="button1Text"
                value={formValues.button1Text}
                onChange={handleChange}
              />
              {errors.buttons1 && (
                <span className="error">{errors.buttons1}</span>
              )}
            </div>

            <div
              className="Form-field"
              style={{ display: formValues.numButtons == 2 && formValues.addButton == 1 ? "block" : "none" }}
            >
              <label htmlFor="button2Text" aria-label="Button 2 text Asterik-Required">Button 2 text: <span className="astrick">*</span></label>
              <input
                type="text"
                id="button2Text"
                name="button2Text"
                value={formValues.button2Text}
                onChange={handleChange}
              />
              {errors.buttons && (
                <span className="error">{errors.buttons}</span>
              )}
            </div>
            <div className="Form-field"> 
              <label htmlFor="addImage" aria-label="Add Image Asterik-Required">Do you want to add an Image? <span className="astrick">*</span></label>
              <div className="radio-buttons">
                <div>
                  <label htmlFor="addImage1" aria-label="Select Yes">
                    <input
                      type="radio"
                      id="addImage1"
                      name="addImage"
                      value="1"
                      checked={formValues.addImage == 1}
                      onChange={handleChange
                      }
                    />
                   <div className="tag">
                  <span className="tag__cat">Yes </span>
                </div>
                  </label>
                </div>
                <div>
                  <label htmlFor="addImage0" aria-label="Select No">
                    <input
                      type="radio"
                      id="addImage0"
                      name="addImage"
                      value="0"
                      checked={formValues.addImage ==0}
                      onChange={handleChange
                      }
                    />
                   <div className="tag">
                  <span className="tag__cat">No </span>
                </div>
                  </label>
                </div>
              </div>
              {errors.imageAdd && (
                <span className="error">{errors.imageAdd}</span>
              )}
            </div>
            {/* <div
              className="Form-field"
              style={{ display: formValues.addImage == 1 ? "block" : "none" }}
            >
              <label htmlFor="button2Text"> Image:</label>
              <input
              id="file-upload"
                type="file"
                name="input-file"
                accept="image/*"
                onChange={handleImageChange}
                //value=" "
                required
              />
              <div className="image-upload">
              <button className="upload-btn"><label  for="file-upload">Upload Image</label></button>
              {formValues.image?<span>{formValues.image.name}</span>:<span>No File Choosen</span>}
              {errors.buttons && <span className="error">{errors.image}</span>}
              </div>
            </div> */}
            <div className="Form-field">
              <label for="card-width" aria-label="Card Width Asterik-Required">Card Width: <span className="astrick">*</span></label>
              <select id="card-width" name="width" onChange={handleChange} value={formValues.width}>
                <option value="">Select</option>
                <option value="100%">100%</option>
                <option value="75%">75%</option>
                <option value="50%">50%</option>
                <option value="25%">25%</option>
              </select>
              {errors.width && <span className="error">{errors.width}</span>}
            </div>
            <div className="Form-field">
              <label for="theme" aria-label="Theme Asterik-Required">
                <p>
                  Please select the theme colour.
                  <span className="asterik">*</span>{" "}
                </p>
                <select
                  name="theme"
                  id="theme"
                  value={formValues.theme}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="Normal">Light</option>
                  <option value="Dark">Dark</option>
                  <option value="cg1">Blue</option>
                  <option value="cg2">Purple</option>
                </select>
              </label>
              {errors.theme && <span className="error">{errors.theme}</span>}
            </div>
            {/* <button  className="card-button"onClick={handleSubmit}>Submit</button> */}
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
}

export default EditCard;
