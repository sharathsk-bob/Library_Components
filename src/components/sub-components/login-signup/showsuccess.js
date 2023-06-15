import React from 'react';
import closebIcon from "../../asset/images/cross-icon.png";
import FocusTrap from "focus-trap-react";
// import './alert.scss';
import './login-main.scss'

function ShowSuccess(props) {

    const{ close } = props;

    return(
        <>
        <FocusTrap focusTrapOptions={{ onDeactivate: close }}>
            <div className="alert_wrapper">
                <div className={`alert-content `}>
                    <div className={`alert-header border-bottom`}>
                        <p>{ ("Success Alert")}
                        </p>
                        <button className="close-button" aria-label="close alert popup" onClick={close}>
                            { <img src={closebIcon}></img> }
                        </button>
                    </div>
            
                    <div className="alert-container">
                        <div className='icon-section'>
                            { <i class="fa fa-check-circle fa-2x success-icon" aria-hidden="true"></i> }                        
                        </div>

                        <div className='text-section'>
                            <p>{ "You are Logged in successfully !! "}</p>
                        </div>
                        
                        <div className='alertbtn-section'>
                            <button className={`btn-alert`} aria-label="okay button" onClick={close}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </FocusTrap>
        </>
    )
}

export default ShowSuccess;