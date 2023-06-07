import React, { useState } from 'react';
import FocusTrap from "focus-trap-react";
import closeIcon from "../../../components/asset/images/cross-white.png";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const EditDynamicTabs = (props) => {
    const { close,data } = props;
  const [numTabs, setNumTabs] = useState(0);
  const [tabData, setTabData] = useState([]);
  const history=useNavigate();
  const [theme,setTheme]=useState('');
  const [errors, setErrors] = useState([]);
  const initialValues={
    numTabs:data.numTabs,
    tabData:data.tabData,
    theme:data.theme
  };
  const [formValues,setFormValues]=useState(initialValues);
  const tabsProps = {
    numTabs:formValues.numTabs,
    tabData:formValues.tabData,
    theme:formValues.theme
  };
  
  const handleNumTabsChange = (e) => {
    const value = parseInt(e.target.value);
    if (value >= 1 && value <= 4) {
      const newMenus = Array.from({ length: value }, (item, index) => {
        return formValues.tabData[index] || { heading: '', description: '' };
      });
      const newFormValues = {...formValues, tabData: newMenus,numTabs:value};
      setFormValues(newFormValues)
      setErrors([]);
      
    } else {
      setErrors([{ numTabs: "Number of menus must be greater than 0" }]);
    }
  };
  

  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
     if (name === 'theme') {
        setFormValues({...formValues,theme:value})
    } 
  };
  const handleTabInputChange = (e,index, text) => {
    const { value } = e.target;
    const newMenus = [...formValues.tabData];
  newMenus[index] = {...newMenus[index],[text]:value};
  console.log(newMenus);
  const newFormValues = {...formValues, tabData: newMenus};
  setFormValues(newFormValues);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
  
    formValues.tabData.forEach((tab, index) => {
      const tabErrors = {}; 
  
      if (tab.heading.length > 15) {
        tabErrors.heading = `Tab ${index + 1}: Heading exceeds 15 characters limit`;
      }
      if (!tab.heading) {
        tabErrors.heading = `Tab ${index + 1}: Heading is required`;
      }
      // if (tab.description.length > 150) {
      //   tabErrors.description = `Tab ${index + 1}: Description exceeds 150 characters limit`;
      // }
      if (!tab.description) {
        tabErrors.description = `Tab ${index + 1}: Description is required`;
      }
  
      if (Object.keys(tabErrors).length > 0) {
        newErrors[index] = tabErrors;
      }
    });
  
    if (!formValues.numTabs) {
      newErrors.numTabs = `Number of tabs is required`;
    }
    if (!formValues.theme) {
      newErrors.theme = 'Theme is required';
    }
  
    if (Object.keys(newErrors).length === 0) {
      console.log(tabData,numTabs,theme);
      history("/dynamictabs", {state: {tabsProps}});
    } else {
      setErrors(newErrors);
    }
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
          <p>Dynamic Tabs</p>
          <button className="close-button" aria-label="close modal" onClick={()=>{close();}}>
            <img src={closeIcon}></img>
          </button>
        </div>
        <div className="modal-container card-section">
    <form onSubmit={handleSubmit}>
    <div className='switch-fields'>
  <label htmlFor='numTabs'>
    Number of Tabs:
    <select  id="numTabs" name="numTabs" value={formValues.numTabs} onChange={handleNumTabsChange}>
      <option value="0">Select</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
    {errors.numTabs && <span className='error-message'>{errors.numTabs}</span>}
  </label>
</div>

      {[...Array(formValues.numTabs)].map((_, index) => (
        <div key={index}>
          {/* <h4>Tab {index + 1}</h4> */}
          <div className='switch-fields'>
          <label htmlFor={`tabData[${index}].heading`}>
            Tab-{index + 1} Heading (15 characters limit):
            <input
              type="text"
              id={`tabData[${index}].heading`}
              name={`tabData[${index}].heading`}
              maxLength="15"
              value={formValues.tabData[index]?.heading || ''}
              onChange={(e) => handleTabInputChange(e, index, 'heading')}
            />
          {errors[index]?.heading && <span className='error-message'>{errors[index]?.heading}</span>}
          </label>
          </div>
          <div className='switch-fields'>
          <label htmlFor={`tabData[${index}].description`}>
            Tab-{index + 1} Description (150 characters limit):
            <textarea
              maxLength="1200"
              id={`tabData[${index}].description`}
              name={`tabData[${index}].description`}
              value={formValues.tabData[index]?.description || ''}
              onChange={(e) => handleTabInputChange(e, index, 'description')}
            />
            {errors[index]?.description && <span className='error-message'>{errors[index]?.description}</span>}
          </label>
          </div>

        </div>
      ))}
<div className='switch-fields'>
        <label>Theme:</label>
        <select name="theme" value={formValues.theme} onChange={handleInputChange}>
        <option value="">Select</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="cg1-blue">Blue</option>
          <option value="cg2-purple">Purple</option>
        </select>
        {errors.theme && <span className='error-message'>{errors.theme}</span>}
      </div>
      {/* {errors.length > 0 && (
        <div>
          <h4>Validation Errors:</h4>
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )} */}

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
};

export default EditDynamicTabs;
