import React from "react";
import FocusTrap from "focus-trap-react";
import closeIcon from "../../../asset/images/cross-white.png";

const RangeDetail =(props)=>{

  const{close} = props; 

  return (
    <FocusTrap focusTrapOptions={{ onDeactivate: close }}>
      <div className="modal_wapper">
        <div className="modal-content header-modalcontainer detail-container">
          <div className="detail-header">
            <p>Range</p>
            <button className="close-button" aria-label="close progress bar details modal" onClick={close}>
              <img src={closeIcon}></img>
            </button>
          </div>
    
          <div className="modal-container details-section">
            {/* <h1>
             Details for the Range section are below.
            </h1> */}
            <p>Please do follow the given instruction while creating the Range component.</p>
            <div className="detail-content">
              <ul>
                <li>Range label should not be more than 25 characters.</li>
                <li>User can select the Range min value </li>
                <li>User can select the Range max value</li>
                <li>User can select the theme and width for Range</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </FocusTrap>
    );
};
export default RangeDetail;