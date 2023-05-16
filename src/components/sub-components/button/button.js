import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import EditButtonModal from "./edit-button";
import useModal from "../../sub-components/use-modal/use-modal";
import "../header/header.scss";
import { CustomButton } from "./CustomButton";
import ButtonHtml from "./button-html";

const ButtonComponent = ( ) => {
  const location = useLocation();
  const { open: openEditButton, close: closeEditButton, ModalWrapper: ModalWrapperEditButton } = useModal();
  const props = location.state.inputs;

  const [activeTab, setActiveTab] = useState(0);
  console.log(props, "props in button");
  // const themeClass = {props.themeValue?}
  return (
    <>
    <ModalWrapperEditButton >
        <EditButtonModal close={closeEditButton} data={props} />
	</ModalWrapperEditButton >
    <div className="header-output">
        <div className="component-header">
            <div className="header-left">
                <h1>Button </h1> <span> Component</span> 
            </div>
            <div className="header-right">
                <div className="button-section">
                    <Link to="/" className="link-button" aria-label="back to various component homepage">
                        Back
                    </Link>
                    <button class="buttons" aria-label="Edit values for Button Component" onClick={openEditButton} >
                        Edit
                    </button>
                </div>
            </div>
        </div>
        <div className= {`button-content ${props?.themeValue == "Dark"?"Dark":props?.themeValue == "cg1"?"cg1":props?.themeValue == "cg2"?"Cg2":props?.themeValue == "Normal"?"Normal":"" }`}>
            <CustomButton{...props}/>
        </div>
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
        <ButtonHtml data={props} />
    )}
    </div>
      
    </>
  );
};
export default ButtonComponent;
