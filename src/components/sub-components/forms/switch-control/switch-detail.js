import React from "react";
import FocusTrap from "focus-trap-react";
import closeIcon from "../../../asset/images/cross-white.png";

const SwitchDetail =(props)=>{

  const{close} = props; 
 
  return (
    <FocusTrap focusTrapOptions={{onDeactivate: close}}>
      <div className="modal_wapper">
        <div className="modal-content header-modalcontainer detail-container">
          <div className="detail-header">
              <p>Switch Control</p>
            <button className="close-button" aria-label="close switch control details modal" onClick={close}>
              <img alt="close modal" src={closeIcon}></img>
            </button>
          </div>
    
          <div className="modal-container details-section">
            {/* <h1>
              Details for the Switch section are below:
            </h1> */}
            <p>Please do follow the given instruction while creating the Switch component.</p>
            <div className="detail-content">
              <ul>
                <li>Text label for switch control should not be more than 25 characters.</li>
                <li>User can select the size of switch control.</li>
                <li>User can select the theme for switch control.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </FocusTrap>
    );
};
export default SwitchDetail;