import React, { useEffect, useState } from "react";
import closeIcon from "../../asset/images/cross-white.png";
import FocusTrap from "focus-trap-react";

const TooltipDetail = (props)=>{

    const{close} = props;
 
    return (
        <FocusTrap
			focusTrapOptions={{
				escapeDeactivates: false
				//onDeactivate: closeModal
			}}
		>
      <div className="modal_wapper">
        <div className="modal-content detail-container">
            <div className="detail-header">
            <p>Tooltip</p>
                <button className="close-button" onClick={close}>
                    <img src={closeIcon}></img>
                </button>
            </div>
    
        <div className="modal-container details-section">
            <h1>
            Details for the Tooltip Section are Below:
            </h1>
            <p>Please do follow the given instruction while creating the Tooltip component.</p>
            <div className="detail-content">
                <ul>
                    <li>Text for Tooltip Icon should not be more than 15 characters</li>
                    <li>Text for Tooltip Text on hover should not be more than 25 characters</li>
                    <li>User Can select among 8 primary directions to display the tooltip</li>
                    <li>User can select the theme of the tooltip from the dropdown</li>
                </ul>
            </div>
        </div>
        </div>
      </div>
      </FocusTrap>
    ); 
};
 export default TooltipDetail;