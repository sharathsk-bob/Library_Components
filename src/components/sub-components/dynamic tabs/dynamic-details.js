import FocusTrap from "focus-trap-react";
import React from "react";
import closeIcon from "../../../components/asset/images/cross-white.png";

const DynamicDetail =(props)=>{
    
  const{close} = props; 
     
  return (
    <FocusTrap
      focusTrapOptions={{
        onDeactivate: close
      }}
    >
    <div className="modal_wapper">
      <div className="modal-content header-modalcontainer detail-container">
      <div className="detail-header">
          <p>Tab / Panel</p>
          <button className="close-button" aria-label="close tab or panel details modal" onClick={close}>
            <img alt="close modal" src={closeIcon}></img>
          </button>
        </div>
  
        <div className="modal-container details-section">
          {/* <h1>
            Details for the Tab / Panel section are below:
          </h1> */}
          <p>Please do follow the given instruction while creating the Tab / Panel component.</p>
          <div className="detail-content">
            <ul>
              <li>User can select the number of tabs with a limit of maximum 4 tabs.</li>
              <li>User can add tab heading and description for each tab.</li>
              <li>Tab heading has a limit of 15 characters.</li>
              <li>Tab description has a limit of 200 words.</li>
              <li>User can select the tab theme.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </FocusTrap>
  );
};
export default DynamicDetail;