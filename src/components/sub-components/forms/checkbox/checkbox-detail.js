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
            <p>Check Box</p>
                <button className="close-button" aria-label="close check box details modal" onClick={close}>
                    <img src={closeIcon}></img>
                </button>
            </div>
    
        <div className="modal-container details-section">
            <h1>
            Details for the Check Box Section are Below:
            </h1>
            <p>Please do follow the given instruction while creating the Check Box component.</p>
            <div className="detail-content">
                <ul>
                    <li>Text for label for fieldset of check box should not be more than 15 characters</li>
                    <li>User can the number of check boxes they want, maximum upto 4</li>
                    <li>User can select display layout as horizontal or vertical for check box</li>
                    <li>User can select width of the fieldset for check box</li>
                    <li>User can select the theme of the check box from the dropdown</li>
                </ul>
            </div>
        </div>
        </div>
      </div>
      </FocusTrap>
    ); 
};
export default CheckBoxDetail;