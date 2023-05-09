import React, { useContext, useEffect, useState } from "react";

import closeIcon from "../../asset/images/cross-white.png";
import "./button.scss";

const ButtonDetail =(props)=>{

    const{close} = props;
 
    return (
      <div className="modal_wapper">
        <div className="modal-content detail-container">
            <div className="detail-header">
            <p>Buttons</p>
                <button className="close-button" onClick={close}>
                    <img src={closeIcon}></img>
                </button>
            </div>
    
        <div className="modal-container details-section">
            <h1>
            Details for the Button Section are Below:
            </h1>
            <p>Please do follow the given instruction while creating the Button component.</p>
            <div className="detail-content">
                <ul>
                    <li>Text for button should not be more than 15 characters</li>
                    <li>Border Radius in pixels</li>
                    <li>Border Width in pixels</li>
                    <li>User Can select if he/she want to add a box shadow</li>
                    <li>User can select the size of the button from the dropdown (padding both sides)</li>
                </ul>
            </div>
        </div>
        </div>
      </div>
    );

   
};
 export default ButtonDetail;