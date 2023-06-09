import FocusTrap from "focus-trap-react";
import React from "react";
import closeIcon from "../../../components/asset/images/cross-white.png";

const ToasterDetail =(props)=>{
    
  const{close} = props; 

  return (
    <FocusTrap focusTrapOptions={{ onDeactivate: close }}>
      <div className="modal_wapper">
        <div className="modal-content header-modalcontainer detail-container">
          <div className="detail-header">
            <p>Toaster</p>
            <button className="close-button" aria-label="close toaster details modal" onClick={close}>
              <img alt="close modal" src={closeIcon}></img>
            </button>
          </div>
          <div className="modal-container details-section">
            {/* <h1>
              Details for the Toaster section are below:
            </h1> */}
            <p>Please do follow the given instruction while creating the Toaster component.</p>
            <div className="detail-content">
              <ul>
                <li>User can select the toaster type.</li>
                <li>The toaster title should only contain 15 characters.</li>
                <li>User can add a description message in toaster consisting of 25 words.</li>
                <li>User can enter the button text on click of which the toaster appears.</li>
                <li>User can choose the direction to display toaster as in top or bottom.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </FocusTrap>
  );
};
 export default ToasterDetail;