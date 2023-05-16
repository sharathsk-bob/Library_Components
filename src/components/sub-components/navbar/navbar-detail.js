import FocusTrap from "focus-trap-react";
import React, { useContext, useEffect, useState } from "react";

import closeIcon from "../../../components/asset/images/cross-white.png";
import "./navbar-detail.scss";

const NavbarDetail =(props)=>{
   
    

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
            <p>Navbar</p>
          <button className="close-button" aria-label="close modal" onClick={close}>
            <img src={closeIcon}></img>
          </button>
          </div>
    
          <div className="modal-container details-section">
            <h1>
             Details for the Navbar section are below.
            </h1>
            <p>Please do follow the given instruction while creating the Navbar component.</p>
           <div className="detail-content">
<ul>
    <li>User can choose the Number of Navbar Menus</li>
    <li>For Each Navbar menu the user can choose the type of menu</li>
    <li>In Case user selects Basic Menu then he/she can choose the menu text</li>
    <li> If User choose Dropdown then he/she can choose the number of options and menu text for each options </li>
    <li>User can choose if he/she wants to add navbar icons</li>
    <li>User Can select the Navbar theme</li>


</ul>

           </div>
        </div>
        </div>
      </div>
      </FocusTrap>
    );

   
};
 export default NavbarDetail;