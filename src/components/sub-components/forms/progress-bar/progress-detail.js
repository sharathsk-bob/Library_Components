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
              <img alt="close modal" src={closeIcon}></img>
            </button>
          </div>
    
          <div className="modal-container details-section">
            <h1>
             Details for the Progress Bar section are below:
            </h1>
            <p>Please do follow the given instruction while creating the Progress Bar component.</p>
            <div className="detail-content">
              <ul>
                <li>User can enter progress bar label text limiting to 25 characters.</li>
                <li>User can select the progress bar value in percentage.</li>
                <li>User can select the progress bar size.</li>
                <li>User can select the theme for progress bar from dropdown.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </FocusTrap>
    );
};
export default ProgressDetail;