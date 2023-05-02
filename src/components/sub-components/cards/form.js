import React, { useContext } from "react";

import { useState } from "react";
import "./form.scss";
import Cards from "./cards";
// import { useNavigate } from 'react-router-dom';
import closeIcon from "../../asset/images/cross-icon.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../app-context";

function Form(props) {
  const { close } = props;
  const {
    title,
    description,
    button1Text,
    button2Text,
    image,
    width,
    setTitle,
    setDescription,
    setButton1Text,
    setButton2Text,
    setImage,
    setWidth,
    newCard,

  } = useContext(AppContext);
  const [errors, setErrors] = useState({});
  //const navigate=useNavigate();
  const [activate, setActivate] = useState(false);
  const history = useNavigate();
  const [addButton, setAddButton] = useState(null);
  const [numButtons, setNumButtons] = useState(null);
  const [addImage, setAddImage] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateForm();
    if (isValid) {
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

    if (title.trim() === "") {
      errors.title = "Title is required";
      isValid = false;
    }

    if (description.trim() === "") {
      errors.description = "Description is required";
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
  console.log(errors);
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
              <label htmlFor="addButton">Add button:</label>
              <div className="radio-buttons">
                <div>
                  <label htmlFor="addButton1">
                    <input
                      type="radio"
                      id="addButton1"
                      name="addButton"
                      value="1"
                      //checked={addButton === true}
                      onChange={(event) =>
                        setAddButton(parseInt(event.target.value))
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
                      //checked={addButton === false}
                      onChange={(event) =>
                        setAddButton(parseInt(event.target.value))
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
              style={{ display: addButton == 1 ? "block" : "none" }}
            >
              <label htmlFor="numButtons">Number of Buttons:</label>
              <select
                id="numButtons"
                value={numButtons}
                onChange={(event) => setNumButtons(event.target.value)}
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
              style={{ display: numButtons >= 1 ? "block" : "none" }}
            >
              <label htmlFor="button1Text">Button 1 text:</label>
              <input
                type="text"
                id="button1Text"
                value={button1Text}
                onChange={(event) => setButton1Text(event.target.value)}
              />
              {errors.buttons && (
                <span className="error">{errors.buttons}</span>
              )}
            </div>

            <div
              className="Form-field"
              style={{ display: numButtons == 2 ? "block" : "none" }}
            >
              <label htmlFor="button2Text">Button 2 text:</label>
              <input
                type="text"
                id="button2Text"
                value={button2Text}
                onChange={(event) => setButton2Text(event.target.value)}
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
                      //checked={addButton === true}
                      onChange={(event) =>
                        setAddImage(parseInt(event.target.value))
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
                      //checked={addButton === false}
                      onChange={(event) =>
                        setAddImage(parseInt(event.target.value))
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
              style={{ display: addImage == 1 ? "block" : "none" }}
            >
              <label htmlFor="button2Text"> Image:</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                required
              />
              {errors.buttons && <span className="error">{errors.image}</span>}
            </div>
            <div className="Form-field">
              <label for="card-width">Card Width:</label>
              <select id="card-width" name="cardWidth" onChange={(event) => setWidth(event.target.value)}>
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

export default Form;
