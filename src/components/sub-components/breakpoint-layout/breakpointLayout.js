import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useModal from "../../sub-components/use-modal/use-modal";
import styled from "styled-components";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import EditBreakpointLayoutModal from "./edit-breakpointLayout";
import BreakpointLayoutHtml from "./breakpointLayout-html";
import BreakpointLayout from "./breakpointLayout-main";
import './breakpointLayout.scss'

export const CustomStyleBreakpointLayout = styled.div`
.BreakpointLayout-Content {
    margin: 8px auto;
    margin-top: 32px;
}

.row {
    margin-top: 0;
    margin-right: 0; 
    margin-left: 0;
}

.row>* {
    padding-left: 0;
    padding-right: 0;
}

.column {
    border: 0.5px #cccc solid;
    margin: 4px;
    background-color: white !important;
    height: 100%;
    
    h5 {
        padding: 8px 8px;
    }
    p {
        padding: 8px 8px;
        word-break: break-all;
    }
} 

.BL-dark {
    background-color: var(--color-black);
    color: var(--color-white);
}

.BL-normal {
    background-color: rgb(241, 244, 248);
    color: var(--color-black);
    // border: 1px solid var(--color-black);
}

.BL-blue {
    background-color: var(--color-capgemini-blue);
    color: var(--color-white);
}

.BL-purple {
    background-color: var(--color-purple-wbh);
    color: var(--color-white);
}

@media screen and (max-width: 520px) {
    .header-output{
        .break-pointHeader{
            display: block;
           }
    }
}
@media screen and (max-width: $bp-mobile) {
    .col-md-3, .col-md-4, .col-md-6 {
        margin-bottom: 16px;
    }
}
`;

const BreakpointLayoutComponent = ( ) => {

    const location = useLocation();
    const props = location.state.inputs;
    const { open: openEditBreakpointLayout, close: closeEditBreakpointLayout, ModalWrapper: ModalWrapperEditBreakpointLayout } = useModal();

    const [activeTab, setActiveTab] = useState(0);

    const formattedCSS = CustomStyleBreakpointLayout.componentStyle.rules[0];

    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(formattedCSS)
        .then(() => {
            setCopied(true);
            setTimeout(() => {
            setCopied(false);
            }, 2000);
        })
        .catch((error) => {
            console.error('Failed to copy to clipboard:', error);
        });
    };

    console.log(props, "props in BreakpointLayout.js");
    // const themeClass = {props.themeValue?}
    return (
        <>
        <ModalWrapperEditBreakpointLayout >
            <EditBreakpointLayoutModal close={closeEditBreakpointLayout} data={props} />
        </ModalWrapperEditBreakpointLayout >

        <div className="header-output">
            <div className="component-header break-pointHeader">
                <div className="header-left">
                    <h1>Breakpoint Layout </h1> <span> Component</span> 
                </div>
                <div className="header-right">
                    <div className="button-section">
                        <Link to="/" className="link-button" aria-label="back to various component homepage">
                            Back
                        </Link>
                        <button class="buttons" aria-label="Edit values for Breakpoint Layout Component" onClick={openEditBreakpointLayout} >
                            Edit
                        </button>
                    </div>
                </div>
            </div>
            <BreakpointLayout BreakpointLayoutProps={props}/>
        </div>

        <div className="card-tabs">
            <button className={activeTab === 1 ? "active" : ""} aria-label="HTML Page of Breakpoint Layout Component" onClick={() => setActiveTab(1)}>
                HTML
            </button>
            <button className={activeTab === 0 ? "active" : ""} aria-label="CSS Page of Breakpoint Layout Component" onClick={() => setActiveTab(0)}>
                CSS
            </button>
        </div>

        <div className="card-content">
        {activeTab === 0 ? (
            <>
                <div className='clipboard-div'>
                    <button className='clipboard-btn' aria-label="copy to clipboard button" onClick={copyToClipboard}>
                        <i className={`fa ${copied ? 'fa-check' : 'fa-copy'}`} >
                            {copied ? ' Copied!' : ' Copy Code'}
                        </i>
                    </button>
                </div>
                <SyntaxHighlighter language="css" style={coy}>
                    {formattedCSS}
                </SyntaxHighlighter>  
            </>
        ) : (
            <BreakpointLayoutHtml BreakpointLayoutProps ={props} />
        )}
        </div>
        </>
    );
};
export default BreakpointLayoutComponent;