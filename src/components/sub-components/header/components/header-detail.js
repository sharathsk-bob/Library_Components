import React, { useContext, useEffect, useState } from "react";


import closeIcon from "../../../asset/images/cross-icon.png";
import "./header-details.scss";

const HeaderDetail =(props)=>{
   
    

        const{close} = props;
        
    
     
        
    return (
      <div className="modal_wapper">
        <div className="modal-content detail-container">
          <div className="detail-header">
            <p>Details</p>
          <button className="close-button" onClick={close}>
            <img src={closeIcon}></img>
          </button>
          </div>
         
    
          <div className="modal-container">
            <h1>
             Details for the Header section are below.
            </h1>
            <p>We have taken the prefrence of the user for the application name,application logo, User profile name, CapgeminiLogo.</p>
           <div className="detail-content">
<ul>
    <li>Application name should not be more than 70 characters.</li>
    <li>Application logo size is 50px width and 50px height.</li>
    <li>User profile name should not be more than 50 characters</li>

</ul>

           </div>
        </div>
        </div>
      </div>
    );

   
};
 export default HeaderDetail;