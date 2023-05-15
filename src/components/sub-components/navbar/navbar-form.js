import React, { useContext } from "react";

import { useState } from "react";
import "./navbar-form.scss";
//import Cards from "./cards";
// import { useNavigate } from 'react-router-dom';
import FocusTrap from "focus-trap-react";
import closeIcon from "../../../components/asset/images/cross-white.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../app-context";

function NavbarForm(props) {
  const { close } = props;
  const {
    noOfMenus,
    eachMenu,
    basicValues,
    noOfOptions,
    dropdownValues,
    navtheme,
    showIcons,
    setNoOfMenus,
    setEachMenu,
    setNoOfOptions,
    setNavTheme,
    setShowIcons,
    navValues,
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
        pathname: "/navbar",
      });
    }
  };
  console.log(navValues);

  // const resetNewCard = () => {
  //   setTitle("");
  //   setDescription("");
  //   setAddButton("");
  //   setNumButtons("");
  //   setButton1Text("");
  //   setButton2Text("");
  //   setImage("");
  //   setAddImage("");
  //   setWidth("");
  //   setTheme("");
  // };
  const validateForm = () => {
    let errors = {};
    let isValid = true;
    if (noOfMenus === "") {
      errors.noofmenus = "Number of Menu is required";
      isValid = false;
    }
    if (navtheme == undefined || navtheme == null || navtheme == "") {
      errors.theme = "Theme is required";
      isValid = false;
    }
    // if(showIcons){
    //   errors.showIcons="please select a"
    // }
    setErrors(errors);

    return isValid;
  };
  console.log(errors);

  const handleMenuTypeChange = (event, index) => {
    console.log(event);
    if (event == "link") {
      const newEachMenu = basicValues;
      newEachMenu.type = event;
      eachMenu.push(newEachMenu);
    } else if (event == "dropdown") {
      const newEachMenu = dropdownValues;
      console.log(newEachMenu);
      newEachMenu.type = event;
      eachMenu.push(newEachMenu);
    }
  };

  const handleMenuTextChange = (event, index) => {
    console.log(event);
    if (eachMenu[index].type == "link") {
      const newEachMenu = eachMenu[index];
      newEachMenu.menuText = event;
      // eachMenu.push(newEachMenu);
    } else if (eachMenu[index].type == "dropdown") {
      const newEachMenu = eachMenu[index];
      newEachMenu.menuText = event;
      eachMenu.push(newEachMenu);
    }
  };
  const resetNav = () => {
    setNoOfMenus("");
    setEachMenu([]);
    setNoOfOptions("");
    setNavTheme("");
    setShowIcons("");
  };

  return (
    <FocusTrap
      focusTrapOptions={{
        escapeDeactivates: false,
        //onDeactivate: closeModal
      }}
    >
      <div className="modal_wapper">
        <div className="modal-content form-modalcontainer">
          <div class="form-header">
            <p>NavBar</p>
            <button
              className="close-button"
              aria-label="close modal"
              onClick={() => {
                resetNav();
                close();
              }}
            >
              <img src={closeIcon}></img>
            </button>
          </div>
          <div className="modal-container">
            <form
              className="Form"
              onSubmit={(event) => handleSubmit(event, navValues)}
            >
              <p className="heading-text">
                Please select the attributes according your prefrence to design
                the NavBar.
              </p>
              <div className="Form-field">
                <label
                  htmlFor="noofmenus"
                  aria-label="Title for Asterik-Required"
                >
                  how many menus do you want?<span className="astrick">*</span>
                </label>
                <input
                  type="number"
                  id="noofmenus"
                  //value={title}
                  onChange={(event) => setNoOfMenus(event.target.value)}
                />
                {errors.noofmenus && (
                  <span className="error">{errors.noofmenus}</span>
                )}
              </div>
              {Array.from({ length: noOfMenus }, (_, i) => i + 1).map(
                (menuIndex) => (
                  <div className="menu-field" key={`menu-${menuIndex}`}>
                    <h3 className="menu-header">Menu {menuIndex}</h3>
                    <div className="Form-field">
                      <label
                        htmlFor={`menu-type-${menuIndex}`}
                        aria-label={`Menu Type for Menu ${menuIndex}`}
                      >
                        Menu Type<span className="astrick">*</span>
                      </label>
                      <select
                        id={`menu-type-${menuIndex}`}
                        onChange={(event) =>
                          handleMenuTypeChange(
                            event.target.value,
                            menuIndex - 1
                          )
                        }
                        //value={eachMenu[menuIndex - 1]?.type || ""}
                      >
                        <option value="">Select</option>
                        <option value="link">Link</option>
                        <option value="dropdown">Dropdown</option>
                      </select>
                      {errors[`menu-type-${menuIndex}`] && (
                        <span className="error">
                          {errors[`menu-type-${menuIndex}`]}
                        </span>
                      )}
                    </div>
                    <div className="Form-field">
                      <label
                        htmlFor={`menu-text-${menuIndex}`}
                        aria-label={`Menu Text for Menu ${menuIndex}`}
                      >
                        Menu Text<span className="astrick">*</span>
                      </label>
                      <input
                        type="text"
                        id={`menu-text-${menuIndex}`}
                        onChange={(event) =>
                          handleMenuTextChange(
                            event.target.value,
                            menuIndex - 1
                          )
                        }
                        //value={eachMenu[menuIndex - 1]?.text || ""}
                      />
                      {errors[`menu-text-${menuIndex}`] && (
                        <span className="error">
                          {errors[`menu-text-${menuIndex}`]}
                        </span>
                      )}
                    </div>
                  </div>
                )
              )}
              <div className="Form-field">
                <label htmlFor="showIcons">Show icons</label>
                <input
                  type="checkbox"
                  id="showIcons"
                  checked={showIcons}
                  onChange={(event) => setShowIcons(event.target.checked)}
                />
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
                    value={navtheme}
                    onChange={(event) => setNavTheme(event.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="Normal">Transparent</option>
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

export default NavbarForm;
