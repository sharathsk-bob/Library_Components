import React from "react";
import closeIcon from "../../../asset/images/cross-white.png";
import FocusTrap from "focus-trap-react";

const RadioButtonDetail = (props)=>{

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
            <p>Radio Button</p>
                <button className="close-button" aria-label="close radio button details modal" onClick={close}>
                    <img src={closeIcon}></img>
                </button>
            </div>
    
        <div className="modal-container details-section">
            <h1>
            Details for the Radio Button Section are Below:
            </h1>
            <p>Please do follow the given instruction while creating the Radio Button component.</p>
            <div className="detail-content">
                <ul>
                    <li>Text for Label of radio button should not be more than 15 characters</li>
                    <li>User can select the Date picker types as - Date, Time & Date-Time</li>
                    <li>User can select width of the input from the dropdown</li>
                    <li>User can select the theme of the date picker from the dropdown</li>
                </ul>
            </div>
        </div>
        </div>
      </div>
      </FocusTrap>
    ); 
};
 export default RadioButtonDetail;