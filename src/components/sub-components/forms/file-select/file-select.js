
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import  EditFileModal from "../../forms/file-select/edit-file";
import useModal from "../../../sub-components/use-modal/use-modal";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from "styled-components";
import FileMains from "./file-main";
import FileHtml from "./file-html";





const FileComponent = ( ) => {
    const location = useLocation();
    const { open: openEditFile, close: closeEditFile, ModalWrapper: ModalWrapperEditFile } = useModal();
    const props = location.state.fileProps;
    
  const [activeTab, setActiveTab] = useState(1);
    // console.log(props, "file component");
    
    return (
      <>
     <ModalWrapperEditFile>
      < EditFileModal close={closeEditFile} data={props} />
              </ModalWrapperEditFile>
    
     <div className= "header-output">
        <div className="component-header">
          <div className="header-left">
           <h1>File-Select</h1><span> Component</span> 
          </div>
          <div className="header-right"> 
          <div className="button-section">
         
          <Link
                to="/formcomponents"     
                className="link-button"     
              >
                Back
              </Link>
                  <button class="buttons" onClick={openEditFile}  >
                    Edit
                  </button>
                </div>
          </div>
        </div>
      <FileMains fileVals={props}/>
      </div>
      <div className="card-tabs">
  <button
    className={activeTab === 1 ? "active" : ""}
    onClick={() => setActiveTab(1)}
  >
    HTML
  </button>
  <button
    className={activeTab === 0 ? "active" : ""}
    onClick={() => setActiveTab(0)}
  >
    CSS
  </button>
</div>
<div className="card-content">
  {activeTab === 0 ? (
    <>
    {/* <div className='clipboard-div'>
      <button className='clipboard-btn' onClick={copyToClipboard}>
          <i className={`fa ${copied ? 'fa-check' : 'fa-copy'}`} >
              {copied ? ' Copied!' : ' Copy Code'}
          </i>
      </button>
    </div> */}
    {/* <SyntaxHighlighter language="css" style={coy}>
    {formattedCSS}
    </SyntaxHighlighter> */}
    </>
  ) : (
    <FileHtml  fileVals={props}/>
  )}
</div>
      </>
    );
  };
  export default FileComponent;