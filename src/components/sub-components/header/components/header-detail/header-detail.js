import React, { useContext, useEffect, useState } from "react";


import closeIcon from "../../../../asset/images/cross-white.png";
import "../header-detail/header-details.scss";

const HeaderDetail =(props)=>{
   
    

        const{close} = props;
        
    
     
        
    return (
      <div className="modal_wapper">
        <div className="modal-content detail-container">
          <div className="detail-header">
            <p>Headers</p>
          <button className="close-button" onClick={close}>
            <img src={closeIcon}></img>
          </button>
          </div>
         
    
          <div className="modal-container details-section">
            <h1>
             Details for the Header section are below.
            </h1>
            <p>We have taken the prefrence of the user for the application name,application logo, User profile name, CapgeminiLogo.</p>
           <div className="detail-content">
<ul>
    <li>Application name should be less than 15 characters.</li>
    <li>It is mandatory for you to specify whether you want app logo with (Yes/No)</li>
    <li>If you have selected yes for profile icon than it is mandatory to speficy username</li>
    <li>Username should be less than 10 characters</li>
    <li>It is mandatory for you to specify whether you want capgemini logo with (Yes/No)</li>
    

</ul>

           </div>
        </div>
        </div>
      </div>
    );

   
};
 export default HeaderDetail;