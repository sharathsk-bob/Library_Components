import "../footer/footer.scss";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import useModal from "../../sub-components/use-modal/use-modal";
import EditFooterModal from "./edit-footer";
import FooterHtml from "./footer-html";
import Footer from "./footer-main";

const FooterComponent =()=>{

    const location = useLocation();
    const { open: openEditFooter, close: closeEditFooter, ModalWrapper: ModalWrapperEditFooter } = useModal();
    const [activeTab, setActiveTab] = useState(0);
    const props = location.state.footerProps;
   console.log(props, "value");

  
    return (
      <>
       <ModalWrapperEditFooter>
    <EditFooterModal close={closeEditFooter} data={props} />
			</ModalWrapperEditFooter>
      <div className="footer-output">
        <div className="footer-section">
          <div className="component-header">
            <div className="header-left">
              <h1>Footer</h1>
              <span> Component</span>
            </div>
            <div className="header-right">
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
                <button class="buttons" onClick={openEditFooter}>Edit</button>
              </div>
            </div>
          </div>
         <Footer footerProps={props}/>
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
        <FooterHtml footerProps={props} />
    )}
    </div>
    </div>
      </>
    );  
};
export default FooterComponent;