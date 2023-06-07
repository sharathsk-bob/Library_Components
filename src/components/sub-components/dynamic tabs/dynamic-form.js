import React, { useState } from 'react';
import FocusTrap from "focus-trap-react";
import closeIcon from "../../../components/asset/images/cross-white.png";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const DynamicTabsForm = (props) => {
    const { close } = props;
  const [numTabs, setNumTabs] = useState(0);
  const [tabData, setTabData] = useState([]);
  const history=useNavigate();
  const [theme,setTheme]=useState('');
  const [errors, setErrors] = useState([]);
  const tabsProps = {
    numTabs,
    tabData,
    theme
  };
  const handleNumTabsChange = (e) => {
    const value = parseInt(e.target.value);
    setNumTabs(value);
    setTabData(Array(value).fill({ heading: '', description: '' }));
    setErrors([]);
  };
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
     if (name === 'theme') {
      setTheme(value);
    } 
  };
  const handleTabInputChange = (e, index, field) => {
    const { value } = e.target;
  
    setTabData((prevState) => {
      const updatedTabData = [...prevState]; 
      updatedTabData[index] = {
        ...updatedTabData[index], 
        [field]: value 
      };
      return updatedTabData;
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
  
    tabData.forEach((tab, index) => {
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
  
    if (!numTabs) {
      newErrors.numTabs = `Number of tabs is required`;
    }
    if (!theme) {
      newErrors.theme = 'Theme is required';
    }
  
    if (Object.keys(newErrors).length === 0) {
      console.log(tabData,numTabs,theme);
      history("dynamictabs", {state: {tabsProps}});
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
  <label>
    Number of Tabs:</label>
    <select value={numTabs} onChange={handleNumTabsChange}>
      <option value="0">Select</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
    {errors.numTabs && <span className='error-message'>{errors.numTabs}</span>}
</div>

      {[...Array(numTabs)].map((_, index) => (
        <div key={index}>
          {/* <h4>Tab {index + 1}</h4> */}
          <div className='switch-fields'>
          <label>
            Tab-{index + 1} Heading (15 characters limit): </label>
            <input
              type="text"
              maxLength="15"
              value={tabData[index]?.heading || ''}
              onChange={(e) => handleTabInputChange(e, index, 'heading')}
            />
          {errors[index]?.heading && <span className='error-message'>{errors[index]?.heading}</span>}
          </div>
          <div className='switch-fields'>
          <label>
            Tab-{index + 1} Description (150 characters limit): </label>
            <textarea
              maxLength="1200"
              value={tabData[index]?.description || ''}
              onChange={(e) => handleTabInputChange(e, index, 'description')}
            />
            {errors[index]?.description && <span className='error-message'>{errors[index]?.description}</span>}
          </div>

        </div>
      ))}
<div className='switch-fields'>
        <label>Theme:</label>
        <select name="theme" value={theme} onChange={handleInputChange}>
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

export default DynamicTabsForm;
