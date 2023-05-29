import FocusTrap from "focus-trap-react";
import React, { useContext, useEffect, useState } from "react";

import closeIcon from "../../../asset/images/cross-white.png";
//import "./card-detail.scss";

const ProgressDetail =(props)=>{
   
    

        const{close} = props; 
        
    
     
        
    return (
      <FocusTrap
    focusTrapOptions={{
      // escapeDeactivates: false
      onDeactivate: close
    }}
  >
      <div className="modal_wapper">
        <div className="modal-content header-modalcontainer detail-container">
        <div className="detail-header">
            <p>ProgressBar</p>
          <button className="close-button" aria-label="close modal" onClick={close}>
            <img src={closeIcon}></img>
          </button>
          </div>
    
          <div className="modal-container details-section">
            <h1>
             Details for the Progress section are below.
            </h1>
            <p>Please do follow the given instruction while creating the Progress component.</p>
           <div className="detail-content">
<ul>
    <li>Progress label sholud not be more than 25 characters.</li>
    <li>User Can select the Progress max value</li>
    <li>User Can select the Progress  min value</li>
    <li>User Can select the Progress size</li>
    <li>User Can select the Progress theme</li>


</ul>

           </div>
        </div>
        </div>
      </div>
      </FocusTrap>
    );

   
};
 export default ProgressDetail;