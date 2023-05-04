import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import EditButtonModal from "./edit-button";
import useModal from "../../sub-components/use-modal/use-modal";
import "../header/header.scss";
import { CustomButton } from "./CustomButton";

const ButtonComponent = ( ) => {
  const location = useLocation();
  const { open: openEditButton, close: closeEditButton, ModalWrapper: ModalWrapperEditButton } = useModal();
  const props = location.state.inputs;

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
                <h1>Button Component</h1>
            </div>
            <div className="header-right">
                <div className="button-section">
                <Link to="/" className="btn btn-primary btn-lg">
                    <button class="buttons">
                        Back
                    </button>
                </Link>
                    <button class="buttons" onClick={openEditButton} >
                        Edit
                    </button>
                </div>
            </div>
        </div>
        <div className= {`header-content ${props?.themeValue == "Dark"?"Dark":props?.themeValue == "cg1"?"cg1":props?.themeValue == "cg2"?"Cg2":props?.themeValue == "Normal"?"Normal":"" }`}>
            <CustomButton{...props}/>
        </div>
    </div>
      
    </>
  );
};
export default ButtonComponent;
