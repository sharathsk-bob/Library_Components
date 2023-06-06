import React from "react";
import closeIcon from "../../asset/images/cross-white.png";
import FocusTrap from "focus-trap-react";

const AlertDetail = (props)=>{

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
            <p>Alert</p>
                <button className="close-button" aria-label="close alert details modal" onClick={close}>
                    <img src={closeIcon}></img>
                </button>
            </div>
    
        <div className="modal-container details-section">
            <h1>
            Details for the Alert section are below:
            </h1>
            <p>Please do follow the given instruction while creating the Alert component.</p>
            <div className="detail-content">
                <ul>
                    <li>Text for alert should not be more than 50 characters</li>
                    <li>User can choose the alert type they wish</li>
                    <li>Header of the alert is determined by the alert type and is mandatory</li>
                    <li>User can select the width of the alert in the screen</li>
                    <li>User can select the theme of the alert from the dropdown which applies to header</li>
                </ul>
            </div>
        </div>
        </div>
      </div>
      </FocusTrap>
    ); 
};
export default AlertDetail;