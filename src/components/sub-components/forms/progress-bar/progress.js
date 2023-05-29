import React,{useState} from 'react';
import { useLocation } from "react-router-dom";
import "./progress.scss";
import { Link } from 'react-router-dom';
import useModal from '../../use-modal/use-modal';
import ProgressEditForm from './edit-progress-form';
import ProgressMain from './progress-main';
import ProgressHtml from './progress-html';

function ProgressBar() {
    const location = useLocation();
    const props = location.state.progressProps;
    const [activeTab, setActiveTab] = useState(1);
    const { open: openEditProgress, close: closeEditProgress, ModalWrapper: ModalWrapperEditProgress } = useModal();
    const [copied, setCopied] = useState(false);

  // const copyToClipboard = () => {
  //     navigator.clipboard.writeText(formattedCSS)
  //     .then(() => {
  //         setCopied(true);
  //         setTimeout(() => {
  //         setCopied(false);
  //         }, 2000);
  //     })
  //     .catch((error) => {
  //         console.error('Failed to copy to clipboard:', error);
  //     });
  // };
    
    
  return (
    <>
    <ModalWrapperEditProgress>
      <ProgressEditForm close={closeEditProgress} data={props}/>
    </ModalWrapperEditProgress>
    <div className="component-toaster">
            <div className="toaster-left">
              <h1>Progress Bar</h1>
              <span> Component</span>
            </div>
            <div className="toaster-right">
              <div className="button-section">
                {/* <div  className="buttons"> */}
                <Link
                  to="/formcomponents"
                  // state={headerData}
                  className="link-button"
                >
                  Back
                </Link>
                {/* </div> */}

                {/* <button className="backToHome" onClick={()=>{history("/")}}>Back</button> */}
                <button class="buttons" onClick={openEditProgress}>Edit</button>
              </div>
            </div>
          </div>
    <ProgressMain props={props}/>
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
    <ProgressHtml props={props} />
  )}
</div>
  </>
  )
}

export default ProgressBar