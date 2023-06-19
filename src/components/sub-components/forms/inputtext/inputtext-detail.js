import React from "react";
import FocusTrap from "focus-trap-react";
import closeIcon from "../../../asset/images/cross-white.png";


const InputTextDetail =(props)=>{

    const{close} = props;
 
    return (
        <FocusTrap
			focusTrapOptions={{onDeactivate: close}}
		>
      <div className="modal_wapper">
        <div className="modal-content detail-container">
            <div className="detail-header">
            <p>Input Text</p>
                <button className="close-button" aria-label="close input text details modal" onClick={close}>
                    <img alt="close modal" src={closeIcon}></img>
                </button>
            </div>
    
        <div className="modal-container details-section">
            {/* <h1>
            Details for the Input Text section are below:
            </h1> */}
            <p>Please do follow the given instruction while creating the Input Text component.</p>
            <div className="detail-content">
                <ul>
                    <li>User can provide label text with maximum 15 characters.</li> 
                    <li>User can select the type of input from the dropdown.</li>
                    <li>User can select the box size of input.</li>
                    <li>User can select the theme for the input box.</li>
                </ul>
            </div>
        </div>
        </div>
      </div>
      </FocusTrap>
    );
    
   
};
 export default InputTextDetail;