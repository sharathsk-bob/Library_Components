
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

export const CustomStyleFile = styled.div`
.select-modal{
  .type-field{
      margin-top: 18px;
      p{
          margin-bottom: 4px;

      }
      .modal-content-checkbox{
          width: auto!important;
          .tag{
              line-height: 30px;
          }
      }
  }
  .size-field{
      margin-top: 4px!important;
  }
}
.custom-file-input {
  color: transparent;
  width: 96px;
}
.custom-file-input::-webkit-file-upload-button {
  visibility: hidden; 
}

.custom-file-input::before {
  content: 'Upload File';
  display: inline-block;
  color: #fff;
  background: linear-gradient(top, #f9f9f9, #e3e3e3);
  // border: 1px solid #999;
  border-radius: 3px;
  padding: 0.5rem 0.5rem;
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  cursor: pointer;
  // text-shadow: 1px 1px #fff;
  font-weight: 700;
 // font-size: 10pt;
}
.custom-file-input:hover::before {
  border-color: black;
}
.custom-file-input:active::before {
  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
}

#fileupload{
 
}
// input[type=file] #file-upload-button {
//     background-color: #0070AD;
// }

.close-button{
  float:right;
}
.file-item{
  display: flex;
  justify-content: space-between;
}
.file-name{
  //float: left;
}
.file-upload-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 200px; /* Adjust the height as needed */
  border: 1px dashed gray; /* Optional: Add a dashed border */
}

.file-upload-label {
  cursor: pointer;
}

.file-text {
  margin-top: 10px; /* Adjust the margin as needed */
}
.file-upload-label{
  margin:0rem  1rem 0rem 0rem;
  font-weight: bold;
  background-color: #0070AD;
  border-color: #0070AD;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  p{
  margin: 0px;
  }
}
.file-upload-label:focus{
  border: 2px solid black;
}
.file-output{
 
  .file-upload{
      padding: 18px;
  }
  .file-Dark{
      border: 2px solid black;
      color: black;
  }
  .file-Cg1{
      border:2px solid #0070AD; ;
      color: var(--color-capgemini-blue);
  }
  .file-Cg2{
      border: 2px solid #2b0a3d;
      color: var(--color-purple-wbh);
  }
  .file-Normal{
      background-color: rgb(241, 244, 248);
      border: 2px solid  gray;
  }
}

@media screen and (max-width: $bp-sm-mobile){
  .file-name{
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
  }
}
`;

const FileComponent = ( ) => {
  const location = useLocation();
  const { open: openEditFile, close: closeEditFile, ModalWrapper: ModalWrapperEditFile } = useModal();
  const props = location.state.fileProps;
  const formattedCSS = CustomStyleFile.componentStyle.rules[0];
  const [activeTab, setActiveTab] = useState(1);
  // console.log(props, "file component");
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
              aria-label="back to form component homepage"  
              className="link-button"  
            >
              Back
            </Link>
              <button class="buttons" aria-label="Edit values for File Upload Component" onClick={openEditFile}  >
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
          aria-label="HTML Page of File Upload Component"
          onClick={() => setActiveTab(1)}
        >
          HTML
        </button>
        <button
          className={activeTab === 0 ? "active" : ""}
          aria-label="CSS Page of File Upload Component"
          onClick={() => setActiveTab(0)}
        >
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
          <FileHtml  fileVals={props}/>
        )}
      </div>
    </>
  );
};
export default FileComponent;