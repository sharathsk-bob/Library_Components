import React,{useState} from 'react';
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import useModal from "../../sub-components/use-modal/use-modal";
import EditToaster from './edit-toaster';
import "./toaster.scss";
import ToasterMain from './toaster-main';
import ToasterHtml from './toaster-html';

function Toaster() {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(1);

    const props = location.state.toasterProps;
    const { open: openEditToaster, close: closeEditToaster, ModalWrapper: ModalWrapperEditToaster } = useModal();
   
    
    
  return (
    <>
           <ModalWrapperEditToaster>
        <EditToaster close={closeEditToaster} data={props} />
			</ModalWrapperEditToaster>
     <div className="component-toaster">
            <div className="toaster-left">
              <h1>Toaster</h1>
              <span> Component</span>
            </div>
            <div className="toaster-right">
              <div className="button-section">
                {/* <div  className="buttons"> */}
                <Link
                  to="/"
                  // state={headerData}
                  className="link-button"
                >
                  Back
                </Link>
                {/* </div> */}

                {/* <button className="backToHome" onClick={()=>{history("/")}}>Back</button> */}
                <button class="buttons" onClick={openEditToaster}>Edit</button>
              </div>
            </div>
          </div>
          <ToasterMain {...props}/>
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
    TAB2
  </button>
</div>
<div className="card-content">
  {activeTab === 0 ? (
    ("")
  ) : (
    <ToasterHtml {...props} />
  )}
</div>
    </>
  )
}

export default Toaster