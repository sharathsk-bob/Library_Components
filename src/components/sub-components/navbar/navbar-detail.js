import FocusTrap from "focus-trap-react";
import React from "react";
import closeIcon from "../../../components/asset/images/cross-white.png";

const NavbarDetail =(props)=>{
   
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
          <p>Navbar</p>
          <button className="close-button" aria-label="close navbar details modal" onClick={close}>
            <img src={closeIcon}></img>
          </button>
        </div>
  
        <div className="modal-container details-section">
          <h1>
            Details for the Navbar section are below:
          </h1>
          <p>Please do follow the given instruction while creating the Navbar component.</p>
          <div className="detail-content">
            <ul>
              <li>User can choose the number of navbar menus.</li>
              <li>For each navbar menu the user can choose the type of menu as basic or dropdown.</li>
              <li>If user chooses type as basic menu then he/she is opted for entering the menu text.</li>
              <li>If user chooses type as dropdown then he/she can choose the number of submenus and enter text for each submenus.</li>
              <li>User can choose if he/she wants to add navbar icons.</li>
              <li>User can select the theme for the navbar.</li>
            </ul>
          </div>
      </div>
      </div>
    </div>
    </FocusTrap>
  );
};
export default NavbarDetail;