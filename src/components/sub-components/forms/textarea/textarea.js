import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import useModal from "../../use-modal/use-modal";
import styled from "styled-components";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import TextArea from "./textarea-main";
import TextAreaHtml from "./textarea-html";
import  EditTextAreaModal from "./edit-textarea";

export const CustomStyleTextArea = styled.div`
.input-output{
  margin: 20px;
}

.ta-normal {
  background-color: rgb(241, 244, 248)!important;
  border-style: solid;
  border-width: medium; 
  border-color: none !important;
}

.ta-dark {
  background-color: rgb(241, 244, 248)!important;
  border-style: solid;
  border-width: medium; 
  border-color: var(--color-black) !important;
}

.ta-blue {
  background-color: rgb(241, 244, 248)!important;
  border-style: solid;
  border-width: medium; 
  border-color: var(--color-capgemini-blue) !important;
}

.ta-purple {
  background-color: rgb(241, 244, 248)!important;
  border-style: solid;
  border-width: medium; 
  border-color: var(--color-purple-wbh) !important;
}

.cls-bordRadius {
  border-radius: 8px;
}

.cls-noRadius {
  border-radius: 0px;
}

.ta-w25 {
  width: 25%;
  // margin: 0 auto;
}
.ta-w50 {
  width: 50%;
}
.ta-w75 {
  width: 75%;
}
.ta-w100 {
  width: 98%;
}

.positionw-25 {
  position: relative;
  right: 1070px;
}
.positionw-50 {
  position: relative;
  right: 710px;
}
.positionw-75 {
  position: relative;
  right: 350px;
}
.positionw-100 {
  position: relative;
  right: 10px;
}
`;

const TextAreaComponent = ( ) => {

  const location = useLocation();
  const { open: openEditTextArea, close: closeEditTextArea, ModalWrapper: ModalWrapperEditTextArea } = useModal();
  const props = location.state.inputs;
  console.log(props, "valuee mains props");

  const [activeTab, setActiveTab] = useState(0);
  const formattedCSS = CustomStyleTextArea.componentStyle.rules[0];

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
    <ModalWrapperEditTextArea>
      <EditTextAreaModal close={closeEditTextArea} data={props} />
    </ModalWrapperEditTextArea>
    <div className= {`header-output ${props?.themeValue == "Normal"? "normal-header":""}`}>
      <div className="component-header">
        <div className="header-left">
          <h1>Text Area</h1><span> Component</span> 
        </div>
        <div className="header-right"> 
          <div className="button-section">
            <Link to="/formcomponents" className="link-button">
              Back
            </Link>
            <button class="buttons" onClick={openEditTextArea}  >
              Edit
            </button>
          </div>
        </div>
      </div>
      <TextArea TextAreaProps={props}/>
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
      <TextAreaHtml TextAreaProps = {props}/>
    )}
    </div>
    </>
  );
};
export default TextAreaComponent;