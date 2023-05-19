import React, { useState } from "react";
import { Link } from "react-router-dom";
import useModal from "../../sub-components/use-modal/use-modal";
// import EditAlertModal from "./edit-alert";
import AlertHtml from "./alert-html";
import Alert from "./alert-main";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';


const AlertComponent = ( props, data ) => {

    const {close} = props;
    const { open: openEditAlert, close: closeEditAlert, ModalWrapper: ModalWrapperEditAlert } = useModal();


    const [activeTab, setActiveTab] = useState(0);
    console.log(props, "props in Alert.js");
    // const themeClass = {props.themeValue?}
    return (
        <>
        <ModalWrapperEditAlert >
            {/* <EditAlertModal close={closeEditAlert} data={props} /> */}
        </ModalWrapperEditAlert >
        <div className="header-output">
            <div className="component-header">
                <div className="header-left">
                    <h1>Alert </h1> <span> Component</span> 
                </div>
                <div className="header-right">
                    <div className="button-section">
                        <Link to="/" className="link-button" aria-label="back to various component homepage">
                            Back
                        </Link>
                        <button class="buttons" aria-label="Edit values for Alert Component" onClick={openEditAlert} >
                            Edit
                        </button>
                    </div>
                </div>
            </div>
            <Alert AlertProps = {props} />
        </div>

        <div className="card-tabs">
            <button className={activeTab === 1 ? "active" : ""} onClick={() => setActiveTab(1)}>
                HTML
            </button>
            <button className={activeTab === 0 ? "active" : ""} onClick={() => setActiveTab(0)}>
                CSS
            </button>
        </div>

        <div className="card-content">
        {activeTab === 0 ? (
            <SyntaxHighlighter language="css" style={coy}>
                {/* {CustomStyleTooltip.componentStyle.rules[0]} */}
            </SyntaxHighlighter>   
        ) : (
            <AlertHtml AlertProps ={props} />
        )}
        </div>
        
        </>
    );
};
export default AlertComponent;
