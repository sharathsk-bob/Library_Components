import React, { useContext, useEffect, useState } from "react";

import closeIcon from "../../asset/images/cross-icon.png";
import "../header/components/header-modal.scss";

const ButtonDetail =(props)=>{

    const{close} = props;
 
    return (
      <div className="modal_wapper">
        <div className="modal-content header-modalcontainer detail-container">
        <button className="close-button" onClick={close}>
            <img src={closeIcon}></img>
        </button>
    
        <div className="modal-container ">
            <h1>
            Details for the Button Section are Below:
            </h1>
            <p>We have taken the preferene of the user for creating button for the application, for now this include:</p>
            <div className="detail-content">
                <ul>
                    <li>Text for button should not be more than 15 characters</li>
                    <li>Border Radius in pixels</li>
                    <li>Border Width in pixels</li>
                    {/* <li>Box shadow (Needs to be discussed)</li> */}
                    <li>Size of the button (padding both sides)</li>
                </ul>
            </div>
        </div>
        </div>
      </div>
    );

   
};
 export default ButtonDetail;