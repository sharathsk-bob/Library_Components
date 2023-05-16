import React from "react";
import "./modal.scss";
import useModal from "../../sub-components/use-modal/use-modal";
import HeaderModal from "../../sub-components/header/components/header-modal/header-modal";
// import HeaderComponent from "../../sub-components/header/header";
import HeaderDetail from "../../sub-components/header/components/header-detail/header-detail";
import Form from "../../sub-components/cards/form";
import CardDetail from "../../sub-components/cards/card-detail";
import "../../sub-components/use-modal/use-modal.scss"
import ButtonDetail from "../../sub-components/button/button-detail";
import ButtonForm from "../../sub-components/button/button-form";
import cgLogo from "../../asset/images/cg_logo.svg";
import NavbarForm from "../../sub-components/navbar/navbar-form";
import NavbarDetail from "../../sub-components/navbar/navbar-detail";
const Modal =()=>{
    const { open: openHeader, close: closeHeader, ModalWrapper: ModalWrapperHeader } = useModal();
    const { open: openHeaderDetail, close: closeHeaderDetail, ModalWrapper: ModalWrapperHeaderDetail } = useModal();
    const { open: openForm, close: closeForm, ModalWrapper: ModalForm } = useModal();
    const { open: openFormDetail, close: closeFormDetail, ModalWrapper: ModalFormDetail } = useModal();
    const { open: openButtonDetail, close: closeButtonDetail, ModalWrapper: ModalWrapperButtonDetail } = useModal();
    const { open: openButtonForm, close: closeButtonForm, ModalWrapper: ModalWrapperButton } = useModal();
    const { open: openNavbarDetail, close: closeNavbarDetail, ModalWrapper: ModalWrapperNavbarDetail } = useModal();
    const { open: openNavbarForm, close: closeNavbarForm, ModalWrapper: ModalWrapperNavbar } = useModal();
    
    const componentList =[
        "Header",
        "Cards",
        "Button",
        "Navbar",
        "ToolBar",    
        "Text",
        "Dropdown",
        "Footer",
        "Alert"
    ];
return(
    <>
    <div className="modal-components">
    <ModalWrapperHeaderDetail>
    <HeaderDetail close={closeHeaderDetail} />
			</ModalWrapperHeaderDetail>
              <ModalWrapperHeader>
				
                <HeaderModal close={closeHeader} />
			</ModalWrapperHeader>
            <ModalForm>
				
                <Form close={closeForm} />
			</ModalForm>
      <ModalFormDetail>
				
                <CardDetail close={closeFormDetail} />
			</ModalFormDetail>

      <ModalWrapperButtonDetail>
        <ButtonDetail close={closeButtonDetail} />
      </ModalWrapperButtonDetail>

      <ModalWrapperButton>
        <ButtonForm close={closeButtonForm} />
      </ModalWrapperButton>
      <ModalWrapperNavbar>
        <NavbarForm close={closeNavbarForm} />
      </ModalWrapperNavbar>
      <ModalWrapperNavbarDetail>
        <NavbarDetail close={closeNavbarDetail} />
      </ModalWrapperNavbarDetail>
    {componentList.map((data, index) => {
       
           
        return (
          <div key={index} class="modal_section">
           <div className="modal-header">
            <h1>{data}</h1>
            </div>
            <div className="modal-content">
            
            <p>This components help to create and customised the {data}.</p>
            {data === "Header" ? (
              <div className="modal-button_section">
                <button title="Details button for header" type="button" class="buttons" onClick={openHeaderDetail}>
                  Details
                </button>
                <button title="Create button for header" type="button" class="buttons" onClick={openHeader}>
                  Create
                </button>
              </div>
            ) : data === "Cards" ? (
              <div className="modal-button_section">
                <button  type="button" aria-label="Details button for card component" class="buttons" onClick={openFormDetail}>
                  Details
                </button>
                <button type="button" aria-label="Create button for card component" class="buttons" onClick={openForm}>
                  Create
                </button>
              </div>
            ) : data === "Button"? (
              <div className="modal-button_section">
              <button  type="button" aria-label="Details button for button component" class="buttons" onClick={openButtonDetail}>
                Details
              </button>
              <button  type="button" aria-label="Create button for button component" class="buttons" onClick={openButtonForm}>
                Create
              </button>
            </div>
            ):data === "Navbar" ? (
              <div className="modal-button_section">
                <button  type="button" aria-label="Details button for navbar component" class="buttons" onClick={openNavbarDetail}>
                  Details
                </button>
                <button type="button" aria-label="Create button for navbar component" class="buttons" onClick={openNavbarForm}>
                  Create
                </button>
              </div>
            ):(
              <div className="modal-button_section">
                <button  type="button" aria-label="Details button for navbar component" class="buttons" onClick={openFormDetail}>
                  Details
                </button>
                <button type="button" aria-label="Create button for navbar component" class="buttons" onClick={openForm}>
                  Create
                </button>
              </div>
            )}
            </div>
            
          </div>
        );
    })
    }
    </div>
     
    </>
   
)
  
};
export default Modal;