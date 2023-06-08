import React from "react";
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
            Details for the Form Components section are below:
            </h1>
            {/* <p>Please do follow the given instruction while creating the any of the Form component.</p> */}
            <p>Form Components mainly consist of: </p>
            <div className="detail-content">
                <ul>
                    <li>Input Text - to enter text.</li>
                    <li>Text Area - to enter large text.</li>
                    <li>Check Boxes - to make multiple choices from provided options.</li>
                    <li>Radio Buttons - to make a single choice from multiple options.</li>
                    <li>Select - to make multiple choices from provided options.</li>
                    <li>Date Picker - to select date related input.</li>
                    <li>File Upload - to select file related input.</li>
                    <li>Switch Control - to toggle between two values.</li>
                    <li>Progress Bar - to show progress of any activity.</li>
                    <li>Range - to show and select a range of values.</li>
                </ul>
            </div>
        </div>
        </div>
      </div>
      </FocusTrap>
    ); 
};
 export default FormComponentDetail;