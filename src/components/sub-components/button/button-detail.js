import React from "react";
import closeIcon from "../../asset/images/cross-white.png";
import FocusTrap from "focus-trap-react";
import "./button.scss";

const ButtonDetail =(props)=>{

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
                <p>Button</p>
                    <button className="close-button" aria-label="close button details modal" onClick={close}>
                        <img src={closeIcon}></img>
                    </button>
                </div>
        
            <div className="modal-container details-section">
                {/* <h1>
                Details for the Button section are below:
                </h1> */}
                <p>Please do follow the given instruction while creating the Button component.</p>
                <div className="detail-content">
                    <ul>
                        <li>Text for button should not be more than 15 characters.</li>
                        <li>User can select if he/she want to add border radius or not and enter its value in pixels.</li>
                        <li>User can enter border width in pixels.</li>
                        <li>User can choose if he/she wants to add a box shadow to button.</li>
                        <li>User can select the width of the button in the screen.</li>
                        <li>User can select the theme of the button from the dropdown.</li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
        </FocusTrap>
    );
};
export default ButtonDetail;