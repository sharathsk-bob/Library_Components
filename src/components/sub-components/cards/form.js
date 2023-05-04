import React, { useContext } from "react";

import { useState } from "react";
import "./form.scss";
import Cards from "./cards";
// import { useNavigate } from 'react-router-dom';
import closeIcon from "../../../components/asset/images/cross-white.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../app-context";

function Form(props) {
  const { close } = props;
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
    setTheme,
    newCard

  } = useContext(AppContext);
 
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
  const resetNewCard = () => {
    setTitle("");
    setDescription("");
    setAddButton(null);
    setNumButtons(null);
    setButton1Text("");
    setButton2Text("");
    setImage(null);
    setAddImage(null);
    setWidth("");
    setTheme(null);
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
    if (theme == undefined || theme==null || theme=="") {
      errors.theme = "Theme is required";
      isValid = false;
    }

    setErrors(errors);

    return isValid;
  };
  console.log(errors);
  return (
    <div className="modal_wapper">
      <div className="modal-content form-modalcontainer">
        <div class="form-header">
          <p>Cards</p>
          <button className="close-button" onClick={()=>{resetNewCard();close();}}>
            <img src={closeIcon}></img>
          </button>
        </div>
        <div className="modal-container">
          <form
            className="Form"
            onSubmit={(event) => handleSubmit(event, newCard)}
          >
            <p>
              Please select the attributes according your prefrence to design
              the Card.
            </p>
            <div className="Form-field">
              <label htmlFor="title">
                Title: <span className="astrick">*</span>
              </label>
              <input
                type="text"
                id="title"
                //value={title}
                onChange={(event) => setTitle(event.target.value)}
                //maxlength="10" required
              />
              {errors.title && <span className="error">{errors.title}</span>}
            </div>

            <div className="Form-field">
              <label htmlFor="description">
                Description: <span className="astrick">*</span>
              </label>
              <textarea
                id="description"
                //value={description}
                onChange={(event) => setDescription(event.target.value)}
                //maxlength="500" rows="5" required
              />
              {errors.description && (
                <span className="error">{errors.description}</span>
              )}
            </div>
            <div className="Form-field">
              <label htmlFor="addButton">
                Add button: <span className="astrick">*</span>
              </label>
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
                    <div className="tag">
                      <span className="tag__cat">Yes </span>
                    </div>
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
              style={{ display: addButton == 1 ? "block" : "none" }}
            >
              <label htmlFor="numButtons">
                Number of Buttons: <span className="astrick">*</span>
              </label>
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
              style={{ display: numButtons >= 1 && addButton == 1  ? "block" : "none" }}
            >
              <label htmlFor="button1Text">
                Button 1 text: <span className="astrick">*</span>
              </label>
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
              style={{ display: numButtons == 2 && addButton == 1 ? "block" : "none" }}
            >
              <label htmlFor="button2Text">
                Button 2 text: <span className="astrick">*</span>
              </label>
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
              <label htmlFor="addImage">
                Do you want to add an Image? <span className="astrick">*</span>
              </label>
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
                    <div className="tag">
                      <span className="tag__cat">Yes </span>
                    </div>
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
            <div
              className="Form-field"
              style={{ display: addImage == 1 ? "block" : "none" }}
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
              <button className="upload-btn"><label  for="file-upload">Upload Image</label></button>
              {image?<span>{image.name}</span>:<span>No File Choosen</span>}
              {errors.buttons && <span className="error">{errors.image}</span>}
            </div>
            <div className="Form-field">
              <label for="card-width">
                Card Width: <span className="astrick">*</span>
              </label>
              <select
                id="card-width"
                name="cardWidth"
                onChange={(event) => setWidth(event.target.value)}
              >
                <option value="">Select</option>
                <option value="100%">100%</option>
                <option value="75%">75%</option>
                <option value="50%">50%</option>
                <option value="25%">25%</option>
              </select>
              {errors.width && <span className="error">{errors.width}</span>}
            </div>
            <div className="Form-field">
              <label for="theme">
                <p>
                  Please select the theme colour.
                  <span className="asterik">*</span>{" "}
                </p>
                <select
                  name="theme"
                  id="theme"
                  value={theme}
                  onChange={(event) => setTheme(event.target.value)}
                >
                  <option value="">Select</option>
                  <option value="Normal">Normal</option>
                  <option value="Dark">Dark</option>
                  <option value="cg1">Capgemini-blue</option>
                  <option value="cg2">Capgemini-purple</option>
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
