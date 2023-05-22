import FocusTrap from "focus-trap-react";
import React, { useContext, useEffect, useState } from "react";

import closeIcon from "../../../components/asset/images/cross-white.png";
// import "./card-detail.scss";

const ToasterDetail =(props)=>{
   
    

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
            <p>Toaster</p>
          <button className="close-button" aria-label="close modal" onClick={close}>
            <img src={closeIcon}></img>
          </button>
          </div>
    
          <div className="modal-container details-section">
            <h1>
             Details for the Toaster section are below.
            </h1>
            <p>Please do follow the given instruction while creating the Toaster component.</p>
           <div className="detail-content">
<ul>
    <li>User Can select the toaster type.</li>
    <li>The Toaster title should only contain 20 characters.</li>
    <li>User can add a message of 100 words.</li>
    <li>User can select the Button text on click of which the toaster appears.</li>
    <li>User Can select the Toaster direction top/bottom</li>
    <li>User Can select the Toaster theme</li>


</ul>

           </div>
        </div>
        </div>
      </div>
      </FocusTrap>
    );

   
};
 export default ToasterDetail;