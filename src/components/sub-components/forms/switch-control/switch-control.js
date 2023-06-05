import React,{useState} from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import useModal from "../../use-modal/use-modal";
import EditSwitchForm from "./edit-switch";
import "./switch-control.scss";
import SwitchHtml from "./switch-html";
import SwitchMain from "./switch-main";
function SwitchControl() {
  const location = useLocation();
  const props = location.state.switchProps;
  const [activeTab, setActiveTab] = useState(1);
  const {
    open: openEditSwitch,
    close: closeEditSwitch,
    ModalWrapper: ModalWrapperEditSwitch,
  } = useModal();
  return (
    <>
       <ModalWrapperEditSwitch>
      <EditSwitchForm close={closeEditSwitch} data={props}/>
    </ModalWrapperEditSwitch>
      <div className="component-toaster">
        <div className="toaster-left">
          <h1>Switch Control</h1>
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
            <button class="buttons" onClick={openEditSwitch}>
              Edit
            </button>
          </div>
        </div>
      </div>
      <SwitchMain props={props}/>
      <div className="card-tabs">
  <button
    className={activeTab === 1 ? "active" : ""}
    aria-label="HTML Page of Switch Control Component"
    onClick={() => setActiveTab(1)}
  >
    HTML
  </button>
  <button
    className={activeTab === 0 ? "active" : ""}
    aria-label="CSS Page of Switch Control Component"
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
    <SwitchHtml props={props} />
  )}
</div>
    </>
  );
}

export default SwitchControl;
