import React, { useContext } from "react";

import { useState } from "react";
import "./form.scss";
import Cards from "./cards";
// import { useNavigate } from 'react-router-dom';
import closeIcon from "../../asset/images/cross-icon.png";
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
    setTitle,
    setDescription,
    setAddButton,
    setNumButtons,
    setButton1Text,
    setButton2Text,
    setImage,
    setAddImage,
    setWidth,
   

  } = useContext(AppContext);
  const initialValues={title:title,description:description,addButton:addButton,numButtons:numButtons,button1Text:button1Text,button2Text:button2Text,image:image,addImage:addImage,width:width};
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
    }
  };
  console.log(newCard);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFormValues({ ...formValues, image: file });
  };
  // if(activate==true){
  //   close();

  // }
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("change");
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  const validateForm = () => {
    let errors = {};
    let isValid = true;
    const isTitleValid = title.length <= 10;
    const isDescriptionValid = description.split(" ").length <= 100;
    if (title.trim() === "") {
      errors.title = "Title is required";
      isValid = false;
    }
    if (!isTitleValid) {
      errors.title = "Title should have only 10 characters";
      isValid = false;
    }

    if (description.trim() === "") {
      errors.description = "Description is required";
      isValid = false;
    }
    if (!isDescriptionValid) {
      errors.description = "Description should have only 100 words";
      isValid = false;
    }
    if (addButton == null) {
      errors.buttonsAdd = "Please Select an option";
      isValid = false;
    }
    if (addButton == 1 && numButtons == null) {
      errors.buttonsSelect = "Please Select an option";
      isValid = false;
    }
    if (numButtons == 1 && button1Text.trim() === "") {
      errors.buttons = "Button 1 text is required";
      isValid = false;
    }

    if (numButtons == 2 && button1Text.trim() === "") {
      errors.buttons = "Button 2 text is required";
      isValid = false;
    }

    if (
      numButtons == 2 &&
      button1Text.trim() === "" &&
      button2Text.trim() === ""
    ) {
      errors.buttons = "At least one button text is required";
      isValid = false;
    }
    if (addImage == null) {
      errors.imageAdd = "Please Select an option";
      isValid = false;
    }
    if (width == "") {
      errors.width = "Please Select the width";
      isValid = false;
    }
    if (addImage == 1 && image === null) {
      errors.image = "Image is required";
      isValid = false;
    }

    setErrors(errors);

    return isValid;
  };
  console.log(formValues);
  return (
    <div className="modal_wapper">
      <div className="modal-content header-modalcontainer">
        <button className="close-button" onClick={close}>
          <img src={closeIcon}></img>
        </button>

        <div className="modal-container form-modal">
          <p>
            Please select the attributes according your prefrence to design the
            Card.
          </p>
          <form
            className="Form"
            onSubmit={(event) => handleSubmit(event, newCard)}
          >
            <div className="Form-field">
              <label htmlFor="title" >Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formValues.title}
                onChange={handleChange}
                //maxlength="10" required
              />
              {errors.title && <span className="error">{errors.title}</span>}
            </div>

            <div className="Form-field">
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                name="description"
                value={formValues.description}
                onChange={handleChange}
                //maxlength="500" rows="5" required
              />
              {errors.description && (
                <span className="error">{errors.description}</span>
              )}
            </div>
            <div className="Form-field">
              <label htmlFor="addButton">Add button:</label>
              <div className="radio-buttons">
                <div>
                  <label htmlFor="addButton1">
                    <input
                      type="radio"
                      id="addButton1"
                      name="addButton"
                      value="1"
                      checked={formValues.addButton ==1}
                      onChange={handleChange
                      }
                    />
                    Yes
                  </label>
                </div>
                <div>
                  <label htmlFor="addButton0">
                    <input
                      type="radio"
                      id="addButton0"
                      name="addButton"
                      value="0"
                      checked={formValues.addButton ==0}
                      onChange={handleChange
                      }
                    />
                    No
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
              <label htmlFor="numButtons">Number of Buttons:</label>
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
              style={{ display: formValues.numButtons >= 1 ? "block" : "none" }}
            >
              <label htmlFor="button1Text">Button 1 text:</label>
              <input
                type="text"
                id="button1Text"
                name="button1Text"
                value={formValues.button1Text}
                onChange={handleChange}
              />
              {errors.buttons && (
                <span className="error">{errors.buttons}</span>
              )}
            </div>

            <div
              className="Form-field"
              style={{ display: formValues.numButtons == 2 ? "block" : "none" }}
            >
              <label htmlFor="button2Text">Button 2 text:</label>
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
              <label htmlFor="addImage">Do you want to add an Image?</label>
              <div className="radio-buttons">
                <div>
                  <label htmlFor="addImage1">
                    <input
                      type="radio"
                      id="addImage1"
                      name="addImage"
                      value="1"
                      checked={formValues.addImage == 1}
                      onChange={handleChange
                      }
                    />
                    Yes
                  </label>
                </div>
                <div>
                  <label htmlFor="addImage0">
                    <input
                      type="radio"
                      id="addImage0"
                      name="addImage"
                      value="0"
                      checked={formValues.addImage ==0}
                      onChange={handleChange
                      }
                    />
                    No
                  </label>
                </div>
              </div>
              {errors.imageAdd && (
                <span className="error">{errors.imageAdd}</span>
              )}
            </div>
            <div
              className="Form-field"
              style={{ display: formValues.addImage == 1 ? "block" : "none" }}
            >
              <label htmlFor="button2Text"> Image:</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
               // value={formValues.image.name}
                required
              />
              {errors.buttons && <span className="error">{errors.image}</span>}
            </div>
            <div className="Form-field">
              <label for="card-width">Card Width:</label>
              <select id="card-width" name="width" onChange={handleChange} value={formValues.width}>
                <option value="">Select</option>
                <option value="100%">100%</option>
                <option value="75%">75%</option>
                <option value="50%">50%</option>
                <option value="25%">25%</option>
              </select>
              {errors.width && <span className="error">{errors.width}</span>}
            </div>
            {/* <button  className="card-button"onClick={handleSubmit}>Submit</button> */}
            <div className="button-section">
              <div className="link-button">
                <Link
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={handleSubmit}
                >
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

export default EditCard;
