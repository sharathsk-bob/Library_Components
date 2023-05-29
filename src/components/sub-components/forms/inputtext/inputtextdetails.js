import React, { useContext, useEffect, useState } from "react";

import closeIcon from "../../../asset/images/cross-white.png";
// import "./button.scss";
import FocusTrap from "focus-trap-react";

const InputDetail =(props)=>{

    const{close} = props;
 
    return (
        <FocusTrap
			focusTrapOptions={{
				// escapeDeactivates: false
				onDeactivate: close
			}}
		>
      <div className="modal_wapper">
        <div className="modal-content detail-container">
            <div className="detail-header">
            <p>Input Text</p>
                <button className="close-button" aria-label="close button details modal" onClick={close}>
                    <img src={closeIcon}></img>
                </button>
            </div>
    
        <div className="modal-container details-section">
            <h1>
            Details for the Input Text are Below:
            </h1>
            <p>Please do follow the given instruction while creating the Input component.</p>
            <div className="detail-content">
                <ul>
                  <li>User can provide label text.</li>
                  <li>User can select the type of input.</li>
                  <li>User can select the size of input box</li>
                  <li>User can select the theme for the input box</li>
                </ul>
            </div>
        </div>
        </div>
      </div>
      </FocusTrap>
    );
    
   
};
 export default InputDetail;