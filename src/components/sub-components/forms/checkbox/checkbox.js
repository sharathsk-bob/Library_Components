import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import useModal from "../../use-modal/use-modal";
import styled from "styled-components";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CheckBox from "./checkbox-main";
import CheckBoxHtml from "./checkbox-html";
import EditCheckBoxModal from "./edit-checkbox";

export const CustomStyleCheckBox = styled.div`
.CheckBox-Content {
    font-size:16px;
    margin-bottom: 32px;
    margin-top: 32px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        font-size:12px;
    }
}

fieldset {
    // border: 1px solid #999999 !important;
    margin-bottom: 1.25em !important;
    padding: 0.6em !important;
}

fieldset legend {
    float: none;
    margin-bottom: 0px;
    font-size: 0.9em;
    width: auto;
    display: block;
    max-width: 100%;
    padding: 0px 8px;
    line-height: inherit;
    color: inherit;
    white-space: normal;
}

.block-element {
    display: flex;
    align-items: center;
}

.disp-col {
    display: flex;
    flex-direction: column;
}

.disp-row {
    display: flex;
    flex-direction: row;
}

fieldset label {
    font-size: 0.9em;
    margin-left: 4px;
    display: inline-block;
}

.cb-normal {
    background-color: rgb(241, 244, 248)!important;
    border-style: solid;
    border-width: medium; 
    border-color: none !important;
}

.cb-dark {
    background-color: rgb(241, 244, 248)!important;
    border-style: solid;
    border-width: medium; 
    border-color: var(--color-black) !important;
}

.cb-blue {
    background-color: rgb(241, 244, 248)!important;
    border-style: solid;
    border-width: medium; 
    border-color: var(--color-capgemini-blue) !important;
}

.cb-purple {
    background-color: rgb(241, 244, 248)!important;
    border-style: solid;
    border-width: medium; 
    border-color: var(--color-purple-wbh) !important;
}

.cb-w25 {
    width: 25%;
    // margin: 0 auto;
}
.cb-w50 {
    width: 50%;
}
.cb-w75 {
    width: 75%;
}
.cb-w100 {
    width: 98%;
}
`;

const CheckBoxComponent = ( ) => {

    const location = useLocation();
    const { open: openEditCheckBox, close: closeEditCheckBox, ModalWrapper: ModalWrapperEditCheckBox } = useModal();
    const props = location.state.inputs;
    console.log(props, "valuee mains props");
  
    const [activeTab, setActiveTab] = useState(0);
    const formattedCSS = CustomStyleCheckBox.componentStyle.rules[0];
  
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
  
    return (
    <>
        <ModalWrapperEditCheckBox>
            <EditCheckBoxModal close={closeEditCheckBox} data={props} />
        </ModalWrapperEditCheckBox>
        <div className= {`header-output ${props?.themeValue == "Normal"? "normal-header":""}`}>
            <div className="component-header">
            <div className="header-left">
                <h1>{`${props?.Choice_SelectionType}`}</h1><span> Component</span> 
            </div>
            <div className="header-right"> 
                <div className="button-section">
                <Link to="/formcomponents" className="link-button">
                    Back
                </Link>
                <button class="buttons" onClick={openEditCheckBox}  >
                    Edit
                </button>
                </div>
            </div>
            </div>
            <CheckBox CheckBoxProps={props}/>
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
            <>
            <div className='clipboard-div'>
                <button className='clipboard-btn' onClick={copyToClipboard}>
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
            <CheckBoxHtml CheckBoxProps = {props}/>
        )}
        </div>
    </>
    );
};
export default CheckBoxComponent;