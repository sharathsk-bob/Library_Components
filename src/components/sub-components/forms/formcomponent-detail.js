import React, { useEffect, useState } from "react";
import closeIcon from "../../asset/images/cross-white.png";
import FocusTrap from "focus-trap-react";

const FormComponentDetail = (props)=>{

    const{close} = props;
 
    return (
        <FocusTrap
			focusTrapOptions={{
				onDeactivate: close
			}}
		>
      <div className="modal_wapper">
        <div className="modal-content detail-container">
            <div className="detail-header">
            <p>Form Components</p>
                <button className="close-button" aria-label="close form component details modal" onClick={close}>
                    <img src={closeIcon}></img>
                </button>
            </div>
    
        <div className="modal-container details-section">
            <h1>
            Details for the Form Component Section are Below:
            </h1>
            {/* <p>Please do follow the given instruction while creating the any of the Form component.</p> */}
            <p>Form Components mainly consist of: </p>
            <div className="detail-content">
                <ul>
                    <li>Input Text</li>
                    <li>Text Area</li>
                    <li>Check Boxes</li>
                    <li>Radio Buttons</li>
                    <li>Select</li>
                    <li>Date Picker</li>
                    <li>File Upload</li>
                    <li>Switch Control</li>
                    <li>Progress Bar</li>
                    <li>Range</li>
                    {/* <li>User can select the theme of the tooltip from the dropdown</li> */}
                </ul>
            </div>
        </div>
        </div>
      </div>
      </FocusTrap>
    ); 
};
 export default FormComponentDetail;