import FocusTrap from "focus-trap-react";
import React, { useContext, useEffect, useState } from "react";

import closeIcon from "../../../components/asset/images/cross-white.png";
import "./card-detail.scss";

const CardDetail =(props)=>{
   
    

        const{close} = props; 
        
    
     
        
    return (
      <FocusTrap
    focusTrapOptions={{
      escapeDeactivates: false
      //onDeactivate: closeModal
    }}
  >
      <div className="modal_wapper">
        <div className="modal-content header-modalcontainer detail-container">
        <div className="detail-header">
            <p>Cards</p>
          <button className="close-button" aria-label="close modal" onClick={close}>
            <img src={closeIcon}></img>
          </button>
          </div>
    
          <div className="modal-container details-section">
            <h1>
             Details for the Cards section are below.
            </h1>
            <p>Please do follow the given instruction while creating the Card component.</p>
           <div className="detail-content">
<ul>
    <li>Card title sholud not be more than 10 characters.</li>
    <li>Card description should not be more than 200 words.</li>
    <li>User Can select if he/she want to add a button</li>
    <li> If User select to add a Button then he can choose max upto two buttons and their respective text</li>
    <li>User Can select if he/she want to add a Image</li>
    <li>User Can select the card width</li>
    <li>User Can select the card theme</li>


</ul>

           </div>
        </div>
        </div>
      </div>
      </FocusTrap>
    );

   
};
 export default CardDetail;