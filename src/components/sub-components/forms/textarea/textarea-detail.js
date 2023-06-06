import React from "react";
import closeIcon from "../../../asset/images/cross-white.png";
import FocusTrap from "focus-trap-react";

const TextAreaDetail = (props)=>{

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
            <p>Text Area</p>
                <button className="close-button" aria-label="close text area details modal" onClick={close}>
                    <img src={closeIcon}></img>
                </button>
            </div>
    
        <div className="modal-container details-section">
            <h1>
            Details for the Text Area section are below:
            </h1>
            <p>Please do follow the given instruction while creating the Text Area component.</p>
            <div className="detail-content">
                <ul>
                    <li>User can provide label text with maximum 15 characters.</li> 
                    <li>User can choose if border radius is to be applied to text area.</li>
                    <li>User can select the box size of text area.</li>
                    <li>User can select the theme for the text area.</li>
                </ul>
            </div>
        </div>
        </div>
      </div>
      </FocusTrap>
    ); 
};
 export default TextAreaDetail;