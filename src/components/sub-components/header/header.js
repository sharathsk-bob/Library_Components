import "../header/header.scss";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import EditHeaderModal from "../header/components/header-modal/edit-header";
import useModal from "../../sub-components/use-modal/use-modal";
import Header from "./components/header-modal/header-main";
import HeaderHtml from "./components/header-modal/header-html";
import { useState } from "react";
const HeaderComponent = ( ) => {
  const location = useLocation();
  const { open: openEditHeader, close: closeEditHeader, ModalWrapper: ModalWrapperEditHeader } = useModal();
  const props = location.state.headerProps;
  // console.log(location.state.headerProps, "props in header");
  const [activeTab, setActiveTab] = useState(0);
  
 
  return (
    <>
    <ModalWrapperEditHeader>
    <EditHeaderModal close={closeEditHeader} data={props} />
			</ModalWrapperEditHeader>
    <div className= {`header-output ${props?.themeValue == "Normal"? "normal-header":""}`}>
      <div className="component-header">
        <div className="header-left">
         <h1>Header</h1><span> Component</span> 
        </div>
        <div className="header-right"> 
        <div className="button-section">
       
        <Link
              to="/"
             
              className="link-button"
             
            >
              Back
            </Link>
    
                
             
                <button class="buttons" onClick={openEditHeader} >
                  Edit
                </button>
              </div>
        </div>
      </div>
    <Header headerVal={props}/>
    </div>
    <div className="card-tabs">
        <button className={activeTab === 1 ? "active" : ""} onClick={() => setActiveTab(1)}>
            HTML
        </button>
        <button className={activeTab === 0 ? "active" : ""} onClick={() => setActiveTab(0)}>
            TAB2
        </button>
    </div>

    <div className="card-content">
    {activeTab === 0 ? (
        ("")
    ) : (
        <HeaderHtml headerVal={props} />
    )}
    </div>
    </>
  );
};
export default HeaderComponent;
