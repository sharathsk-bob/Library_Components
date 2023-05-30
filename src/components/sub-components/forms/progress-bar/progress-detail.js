import React from "react";
import FocusTrap from "focus-trap-react";
import closeIcon from "../../../asset/images/cross-white.png";

const ProgressDetail =(props)=>{

  const{close} = props; 

  return (
    <FocusTrap focusTrapOptions={{ onDeactivate: close }}>
      <div className="modal_wapper">
        <div className="modal-content header-modalcontainer detail-container">
          <div className="detail-header">
            <p>Progress Bar</p>
            <button className="close-button" aria-label="close progress bar details modal" onClick={close}>
              <img src={closeIcon}></img>
            </button>
          </div>
    
          <div className="modal-container details-section">
            <h1>
             Details for the Progress Bar section are below.
            </h1>
            <p>Please do follow the given instruction while creating the Progress component.</p>
            <div className="detail-content">
              <ul>
                <li>Progress label should not be more than 25 characters.</li>
                <li>User can select the Progress value in percentage</li>
                <li>User can select the Progress bar size</li>
                <li>User can select the theme for Progress bar from dropdown</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </FocusTrap>
    );
};
export default ProgressDetail;