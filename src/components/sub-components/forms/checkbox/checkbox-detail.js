import React from "react";
import closeIcon from "../../../asset/images/cross-white.png";
import FocusTrap from "focus-trap-react";

const CheckBoxDetail = (props)=>{

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
            <p>Check Box/Radio Button</p>
                <button className="close-button" aria-label="close check box details modal" onClick={close}>
                    <img src={closeIcon}></img>
                </button>
            </div>
    
        <div className="modal-container details-section">
            <h1>
            Details for the Check Box/Radio Button Section are Below:
            </h1>
            <p>Please do follow the given instruction while creating the Check Box/Radio Button component.</p>
            <div className="detail-content">
                <ul>
                    <li>Text for label for fieldset of Check Box/Radio Button should not be more than 15 characters</li>
                    <li>User can the number of Check Boxes/Radio Buttons they want, maximum upto 4</li>
                    <li>User can select display layout as horizontal or vertical for Check Box/Radio Button</li>
                    <li>User can select width of the fieldset for Check Box/Radio Button</li>
                    <li>User can select the theme of the Check Box/Radio Button from the dropdown</li>
                </ul>
            </div>
        </div>
        </div>
      </div>
      </FocusTrap>
    ); 
};
export default CheckBoxDetail;