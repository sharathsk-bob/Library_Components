import React from 'react';
import closeIcon from "../../asset/images/cross-white.png";
import FocusTrap from "focus-trap-react";
import './alert.scss';

function Alert(props) {

    const{close, AlertProps} = props;
    console.log(AlertProps, "props in Alert-main.js");

    return(
        <>
        <FocusTrap focusTrapOptions={{ onDeactivate: close }}>
            <div className="alert_wrapper">
            <div className="alert-content detail-container">
                
                { AlertProps.Choice_HeaderIf == "Yes" ? (
                    <div className={` ${AlertProps?.Choice_Theme == "Dark"?"dark":AlertProps?.Choice_Theme == "cg1"?"blue": 
                    AlertProps?.Choice_Theme == "cg2"?"purple":AlertProps?.Choice_Theme == "Normal"?"normal":"" }`}>
                        <p>{AlertProps.alerthead}</p>
                        <button className="close-button" aria-label="close tooltip details alert" onClick={close}>
                            <img src={closeIcon}></img>
                        </button>
                    </div>
                ) : ("")}
        
                <div className="alert-container">
                    <div className='icon-section'>
                        { AlertProps.Choice_Alerttype == 'warning' ? (
                            <i class="fa fa-warning fa-2x warn-delete" aria-hidden="true"></i>
                        ) : AlertProps.Choice_Alerttype == 'success' ? (
                            <i class="fa fa-check-circle fa-2x success-icon" aria-hidden="true"></i>
                        ) : AlertProps.Choice_Alerttype == 'info' ? (
                            <i class="fa fa-info-circle fa-2x info-icon" aria-hidden="true"></i>
                        ) : (
                            <i class="fa fa-times-circle fa-2x error-icon" aria-hidden="true"></i>
                        )}                        
                    </div>

                    <div className='text-section'>
                        <p>{AlertProps.alerttext}</p>
                    </div>
                    
                    <div className='button-section'>
                        <button className='btn' onClick={close}>Yes</button>
                        <button className='btn' onClick={close}>No</button>
                    </div>
                </div>
            </div>
            </div>
        </FocusTrap>
        </>
    )
}

export default Alert;