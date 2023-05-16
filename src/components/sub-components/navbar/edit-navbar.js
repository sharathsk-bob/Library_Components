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
function EditNav(props) {
  const { close } = props;
  const { numMenus,
    menus,
    hasIcons,
    navtheme,
    setNumMenus,
    setMenus,
    setHasIcons,
    setNavTheme,
    navValues
    }=useContext(AppContext);
    const history=useNavigate();
  const [errors, setErrors] = useState({});
  const initialValues={ numMenus: numMenus,menus:menus, hasIcons: hasIcons, navtheme: navtheme};
  const [formValues,setFormValues]=useState(initialValues);
  const handleNumMenusChange = (event) => {
    const value = parseInt(event.target.value);
    if (value >= 1 && value <= 5) {
      const newMenus = Array.from({ length: value }, (item, index) => {
        return formValues.menus[index] || { type: "basic", text: "" };
      });
  
      setNumMenus(value);
      setMenus(newMenus);
      setErrors({});
      
    } else {
      // Create a new array of menus with the existing values
      setErrors({ numMenus: "Number of menus must be greater than 0" });
    }
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;
    // const isTitleValid = title.length <= 10;
    // const isDescriptionValid = description.split(" ").length <= 100;
    // Validate number of menus
  if (!formValues.numMenus || formValues.numMenus < 1) {
    errors.numMenus = "Please enter a valid number of menus";
    isValid = false;
  }

  formValues.menus.forEach((menu, i) => {
    if (menu.type === "dropdown" && menu.options) {
      menu.options.forEach((option, j) => {
        if (!option) {
          errors[`menu${i}Option${j}Text`] = "Please enter option text";
          isValid = false;
        }
      });
    }
    if (!menu.text) {
      errors[`menu${i}Text`] = "Please enter menu text";
      isValid = false;
    }

    if (menu.type === "dropdown" && (!menu.numOptions || menu.numOptions < 1)) {
      errors[`menu${i}NumOptions`] = "Please enter a valid number of options";
      isValid = false;
    }

    menu.options?.forEach((option, j) => {
      if (!option) {
        errors[`menu${i}Option${j}Text`] = "Please enter option text";
        isValid = false;
      }
    });
  });

    if (formValues.navtheme == undefined || formValues.navtheme==null || formValues.navtheme=="") {
      errors.navtheme = "Theme is required";
      isValid = false;
    }
    
    if (formValues.hasIcons == undefined || formValues.hasIcons==null || formValues.hasIcons=="") {
      errors.hasIcons = "Please Select an option";
      isValid = false;
    }

    setErrors(errors);

    return isValid;
  };

  const handleMenuTypeChange = (index, type) => {
    const newMenus = [...formValues.menus];
    if (type === "basic") {
      newMenus[index] = { type: "basic", text: "" };
    } else {
      newMenus[index] = { type: "dropdown", numOptions: 1, options: [""] };
    }
    setMenus(newMenus);
  };

  const handleMenuTextChange = (index, text) => {
    const newMenus = [...formValues.menus];
  newMenus[index].text = text;
  const newFormValues = {...formValues, menus: newMenus};
  setFormValues(newFormValues);
  };

  const handleNumOptionsChange = (index, numOptions) => {
    const newMenus = [...formValues.menus];
    if (numOptions < 1) {
      setErrors({
        ...errors,
        [`menu-${index}-numOptions`]:
          "Number of options must be greater than 0",
      });
    } else {
      newMenus[index].numOptions = numOptions;
      if (newMenus[index].options) {
        newMenus[index].options = newMenus[index].options.slice(0, numOptions);
      } else {
        newMenus[index].options = [...Array(numOptions)].map(() => "");
      }
      setMenus(newMenus);
      setErrors({ ...errors, [`menu-${index}-numOptions`]: undefined });
    }
  };

  const handleOptionTextChange = (menuIndex, optionIndex, text) => {
    const newMenus = [...formValues.menus];
    newMenus[menuIndex].options[optionIndex] = text;
    const newFormValues = { ...formValues, menus: newMenus };
    setFormValues(newFormValues);
    
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("change");
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      close();
      setNumMenus(formValues.numMenus);
    setMenus(formValues.menus);
    setHasIcons(formValues.hasIcons);
    setNavTheme(formValues.navtheme);

    }
  };

  return (
    <FocusTrap
      focusTrapOptions={{
        // escapeDeactivates: false,
        onDeactivate: close
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
                close();
              }}
            >
              <img src={closeIcon}></img>
            </button>
          </div>
          <div className="modal-container">
            <form onSubmit={handleSubmit}>
            <label htmlFor="num-menus" aria-label="Number of menues for Asterik-Required">
                Number of menus:<span className="astrick">*</span>
              </label>
              <select
                id="num-menus"
                name="num-menus"
                value={formValues.numMenus}
                onChange={handleNumMenusChange}
              >
                <option value="">Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              {errors.numMenus && <p className="error">{errors.numMenus}</p>}
              <br />
              <br />

              {[...Array(formValues.numMenus)].map((_, i) => (
                <div key={i}>
                  <label htmlFor={`menu-${i}-type`} aria-label="Menu Type for Asterik-Required">Menu {i + 1} type:<span className="astrick">*</span></label>
                  <select
                    id={`menu-${i}-type`}
                    name={`menu-${i}-type`}
                    value={formValues.menus[i].type}
                    onChange={(event) =>
                      handleMenuTypeChange(i, event.target.value)
                    }
                  >
                    <option value="basic">Basic</option>
                    <option value="dropdown">Dropdown</option>
                  </select>
                  <br />
                  <br />

                  <label htmlFor={`menu-${i}-text`} aria-label="Menu Text for Asterik-Required">Menu {i + 1} text:<span className="astrick">*</span></label>
                  <input
                    type="text"
                    id={`menu-${i}-text`}
                    name={`menu-${i}-text`}
                    value={formValues.menus[i].text}
                    onChange={(event) =>
                      handleMenuTextChange(i, event.target.value)
                    }
                  />
                  {errors[`menu${i}Text`] && (
            <p className="error">{errors[`menu${i}Text`]}</p>
          )}
                  <br />
                  <br />

                  {formValues.menus[i].type === "dropdown" && (
                    <fieldset>
                      <legend>Options:<span className="astrick">*</span></legend>
                      <label htmlFor={`menu-${i}-num-options`} aria-label="Number of Options for Asterik-Required">
                        Number of options:
                      </label>
                      <select
                        id={`menu-${i}-num-options`}
                        name={`menu-${i}-num-options`}
                        value={formValues.menus[i].numOptions}
                        onChange={(event) =>
                          handleNumOptionsChange(
                            i,
                            parseInt(event.target.value)
                          )
                        }
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        {/* Add more options as needed */}
                      </select>
                      {errors[`menu${i}NumOptions`] && (
                        <p className="error">{errors[`menu${i}NumOptions`]}</p>
                      )}
                      {[...Array(formValues.menus[i].numOptions)].map((_, j) => (
                        <div key={j}>
                          <label htmlFor={`menu-${i}-option-${j}`} aria-label="Option Text for Asterik-Required">
                            Option {j + 1} text:<span className="astrick">*</span>
                          </label>
                          <input
                            type="text"
                            id={`menu-${i}-option-${j}`}
                            name={`menu-${i}-option-${j}`}
                            value={formValues.menus[i].options[j]}
                            onChange={(event) =>
                              handleOptionTextChange(i, j, event.target.value)
                            }
                          />
                           {errors[`menu${i}Option${j}Text`] && (
                    <p className="error">{errors[`menu${i}Option${j}Text`]}</p>
                  )}
                          <br />
                          <br />
                        </div>
                      ))}
                    </fieldset>
                  )}
                </div>
              ))}
              <div>
                <label aria-label="Navbar Icon for Asterik-Required">Navbar icons:<span className="astrick">*</span></label>
                <div className="nav-icons">
                <label htmlFor="nav-yes" aria-label="Select Yes">
                  <input
                    type="radio"
                    id="nav-yes"
                    name="hasIcons"
                    value="yes"
                    checked={formValues.hasIcons=="yes"}
                    onChange={handleChange}
                  />
                  <div className="tag">
                      <span className="tag__cat">Yes </span>
                    </div>
                </label>
                <label htmlFor="nav-no" aria-label="Select No">
                  <input
                    type="radio"
                    id="nav-no"
                    name="hasIcons"
                    value="no"
                    checked={formValues.hasIcons=="no"}
                    onChange={handleChange}
                  />
                  <div className="tag">
                      <span className="tag__cat">No </span>
                    </div>
                  </label>
                  </div>
                {errors.hasIcons && <p className="error">{errors.hasIcons}</p>}
              </div>
              <div>
                <label htmlFor="theme" aria-label="Theme for Asterik-Required">Theme:<span className="astrick">*</span></label>
                <select
                  id="theme"
                  name="navtheme"
                  value={formValues.navtheme}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="Normal">Transparent</option>
                  <option value="Dark">Dark</option>
                  <option value="cg1">Capgemini Blue</option>
                  <option value="cg2">Capgemini Purple</option>
                </select>
                {errors.navtheme && <p className="error">{errors.navtheme}</p>}
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

export default EditNav;
