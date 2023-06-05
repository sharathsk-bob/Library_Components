import InputMains from "./input-main";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import  EditInputModal from "../../forms/inputtext/edit-input";
import useModal from "../../../sub-components/use-modal/use-modal";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from "styled-components";
import InputHtml from "./input-html";

export const CustomStyleHeader = styled.div`
.full-width{
  width: 100%;
}
.width-option{
  width:75%;
}
.halfwidth{
  width: 50%;
}.one-fourth{
  width: 25%;
}

.input-output {

  .light-theme{
  
      background-color: rgb(241, 244, 248)!important;
      color: var(--color-black) !important;
  
}

.Dark{
 
      background-color: transparent!important;
      border: 2px solid black;
      color: var(--color-black) !important;
  
}

.cg1{
  background-color: transparent!important;
  border: 2px solid #0070AD;
      // background-color: var(--color-capgemini-blue)!important;
      color:var(--color-capgemini-blue)!important;

  
}

.Cg2{
  background-color: transparent!important;
  border: 2px solid #2b0a3d;
      // background-color: var(--color-capgemini-blue)!important;
      color:var(--color-purple-wbh)!important;
     
  
}
  .form-control-char-size{
      color: #646464;
      margin-left: auto;
      font-size: .75rem;
      font-weight: 300;
      letter-spacing: .12px;
      line-height: 1rem;
      float: right;
      margin-top: 4px;
  }
}
`;

const InputComponent = ( ) => {
    const location = useLocation();
    const { open: openEditInput, close: closeEditInput, ModalWrapper: ModalWrapperEditInput } = useModal();
    const props = location.state.inputProps;
    const [activeTab, setActiveTab] = useState(0);
   console.log(props, "valuee mains props");
   const formattedCSS = CustomStyleHeader.componentStyle.rules[0];
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
      <ModalWrapperEditInput>
      < EditInputModal close={closeEditInput} data={props} />
              </ModalWrapperEditInput>
      <div className= {`header-output ${props?.themeValue == "Normal"? "normal-header":""}`}>
        <div className="component-header">
          <div className="header-left">
           <h1>Input Text</h1><span> Component</span> 
          </div>
          <div className="header-right"> 
          <div className="button-section">
         
          <Link
                to="/formcomponents"     
                className="link-button"     
              >
                Back
              </Link>
                  <button class="buttons" onClick={openEditInput}  >
                    Edit
                  </button>
                </div>
          </div>
        </div>
      <InputMains inputVals={props}/>
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
          <InputHtml inputVals={props} />
      )}
      </div>
      </>
    );
  };
  export default InputComponent;