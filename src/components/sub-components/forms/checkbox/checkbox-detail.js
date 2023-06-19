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
                <button className="close-button" aria-label="close check box and radio button details modal" onClick={close}>
                    <img alt="close modal" src={closeIcon}></img>
                </button>
            </div>
    
        <div className="modal-container details-section">
            {/* <h1>
            Details for the Check Box/Radio Button section are below:
            </h1> */}
            <p>Please do follow the given instruction while creating the Check Box/Radio Button component.</p>
            <div className="detail-content">
                <ul>
                    <li>User can enter label text for fieldset of check box/radio button having not more than 15 characters.</li>
                    <li>User can select the number of check boxes/radio buttons they want, limiting maximum upto 4.</li>
                    <li>User can select display layout as horizontal or vertical for check box/radio button.</li>
                    <li>User can select width of the fieldset for check box/radio button.</li>
                    <li>User can select the theme of the check box/radio button from the dropdown.</li>
                </ul>
            </div>
        </div>
        </div>
      </div>
      </FocusTrap>
    ); 
};
export default CheckBoxDetail;