import React, { useContext, useEffect, useState } from "react";


import closeIcon from "../../../components/asset/images/cross-white.png";
import "./card-detail.scss";

const CardDetail =(props)=>{
   
    

        const{close} = props; 
        
    
     
        
    return (
      <div className="modal_wapper">
        <div className="modal-content header-modalcontainer detail-container">
        <div className="detail-header">
            <p>Cards</p>
          <button className="close-button" onClick={close}>
            <img src={closeIcon}></img>
          </button>
          </div>
    
          <div className="modal-container details-section">
            <h1>
             Details for the Cards section are below.
            </h1>
            <p>We have taken the prefrence of the user for the application name,application logo, User profile name, CapgeminiLogo.</p>
           <div className="detail-content">
<ul>
    <li>Application title sholud not be more than 10 characters.</li>
    <li>Application description not be more than 100 words.</li>
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
    );

   
};
 export default CardDetail;