import React from "react";
import closeIcon from "../../asset/images/cross-white.png";
import FocusTrap from "focus-trap-react";

const LoginSignDetail = (props)=>{

    const{close} = props;
 
    return (
        <FocusTrap
			focusTrapOptions={{
				onDeactivate: close
			}}
		>
      <div className="modal_wapper">
        <div className="modal-content detail-container">
            <div className="detail-header">
            <p>Login / Signup</p>
                <button className="close-button" aria-label="close login and signup details modal" onClick={close}>
                    <img alt="close modal" src={closeIcon}></img>
                </button>
            </div>
    
        <div className="modal-container details-section">
            {/* <h1>
            Details for the Login / Signup section are below:
            </h1> */}
            <p>Please do follow the given instruction while creating the Login / Signup component.</p>
            <div className="detail-content">
                <ul>
                    <li>User can give label for user name and password</li>
                    <li>Password created by user should have a limit between 8-15 characters.</li>
                    <li>User can select validation criteria.</li>
                    <li>User can select the width of the login form</li>
                    <li>User can select the theme of the login form</li>
                </ul>
            </div>
        </div>
        </div>
      </div>
      </FocusTrap>
    ); 
};
export default LoginSignDetail;