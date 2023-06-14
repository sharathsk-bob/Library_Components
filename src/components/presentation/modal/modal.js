import React from "react";
import { useNavigate } from "react-router-dom";
import useModal from "../../sub-components/use-modal/use-modal";
import HeaderModal from "../../sub-components/header/header-modal";
import HeaderDetail from "../../sub-components/header/header-detail";
import Form from "../../sub-components/cards/form";
import CardDetail from "../../sub-components/cards/card-detail";
import ButtonDetail from "../../sub-components/button/button-detail";
import ButtonForm from "../../sub-components/button/button-form";
import NavbarForm from "../../sub-components/navbar/navbar-form";
import NavbarDetail from "../../sub-components/navbar/navbar-detail";
import TooltipDetail from "../../sub-components/tooltip/tooltip-detail";
import TooltipForm from "../../sub-components/tooltip/tooltip-form";
import AlertDetail from "../../sub-components/alert/alert-detail";
import AlertForm from "../../sub-components/alert/alert-form";
import FooterModal from "../../sub-components/footer/footer-modal";
import FooterDetail from "../../sub-components/footer/footer-details";
import ToasterForm from "../../sub-components/toaster/toaster-form";
import ToasterDetail from "../../sub-components/toaster/toaster-detail";
import FormComponentDetail from "../../sub-components/forms/formcomponent-detail";
import TableDetail from "../../sub-components/table/table-detail";
import TableForm from "../../sub-components/table/table-form";
import DynamicTabsForm from "../../sub-components/dynamic tabs/dynamic-form";
import DynamicDetail from "../../sub-components/dynamic tabs/dynamic-details";
import LoaderModal from "../../sub-components/loader/loader-modal";
import LoaderDetail from "../../sub-components/loader/loader-detail";
import BreakpointLayoutDetail from "../../sub-components/breakpoint-layout/breakpointLayout-detail";
import BreakpointLayoutForm from "../../sub-components/breakpoint-layout/breakpointLayout-form";
import LoginSignDetail from "../../sub-components/login-signup/loginsign-detail";
import "../../sub-components/use-modal/use-modal.scss";
 import LogInModal from "../../sub-components/login-signup/login-modal";
import "./modal.scss";
import CarouselForm from "../../sub-components/carousel/carousel-form";
import CarouselDetail from "../../sub-components/carousel/carousel-detail";

const Modal =()=>{
    const { open: openHeader, close: closeHeader, ModalWrapper: ModalWrapperHeader } = useModal();
    const { open: openHeaderDetail, close: closeHeaderDetail, ModalWrapper: ModalWrapperHeaderDetail } = useModal();
    const { open: openFooterDetail, close: closefooterDetail, ModalWrapper: ModalWrapperFooterDetail } = useModal();
    const { open: openFooter, close: closeFooter, ModalWrapper: ModalWrapperFooter } = useModal();
    const { open: openForm, close: closeForm, ModalWrapper: ModalForm } = useModal();
    const { open: openFormDetail, close: closeFormDetail, ModalWrapper: ModalFormDetail } = useModal();
    const { open: openButtonDetail, close: closeButtonDetail, ModalWrapper: ModalWrapperButtonDetail } = useModal();
    const { open: openButtonForm, close: closeButtonForm, ModalWrapper: ModalWrapperButton } = useModal();
    const { open: openNavbarDetail, close: closeNavbarDetail, ModalWrapper: ModalWrapperNavbarDetail } = useModal();
    const { open: openNavbarForm, close: closeNavbarForm, ModalWrapper: ModalWrapperNavbar } = useModal();
    const { open: openTooltipDetail, close: closeTooltipDetail, ModalWrapper: ModalWrapperTooltipDetail } = useModal();
    const { open: openTooltipForm, close: closeTooltipForm, ModalWrapper: ModalWrapperTooltip } = useModal();
    const { open: openToasterDetail, close: closeToasterDetail, ModalWrapper: ModalWrapperToasterDetail } = useModal();
    const { open: openToasterForm, close: closeToasterForm, ModalWrapper: ModalWrapperToaster } = useModal();
    const { open: openAlertDetail, close: closeAlertDetail, ModalWrapper: ModalWrapperAlertDetail } = useModal();
    const { open: openAlertForm, close: closeAlertForm, ModalWrapper: ModalWrapperAlert } = useModal();
    const { open: openFormComponentDetail, close: closeFormComponentDetail, ModalWrapper: ModalWrapperFormComponentDetail } = useModal();
    const { open: openFormComp, close: closeFormComp, ModalWrapper: ModalWrapperForm } = useModal();
    const { open: openTableDetail, close: closeTableDetail, ModalWrapper: ModalWrapperTableDetail } = useModal();
    const { open: openTableForm, close: closeTableForm, ModalWrapper: ModalWrapperTable } = useModal();
    const { open: openLoaderDetail, close: closeLoaderDetail, ModalWrapper: ModalWrapperLoaderDetail } = useModal();
    const { open: openLoaderForm, close: closeLoaderForm, ModalWrapper: ModalWrapperLoader } = useModal();
    const { open: openDynamicTabsDetail, close: closeDynamicTabsDetail, ModalWrapper: ModalWrapperDynamicTabsDetail } = useModal();
    const { open: openDynamicTabsForm, close: closeDynamicTabsForm, ModalWrapper: ModalWrapperDynamicTabs } = useModal();
    const { open: openBreakpointLayoutDetail, close: closeBreakpointLayoutDetail, ModalWrapper: ModalWrapperBreakpointLayoutDetail } = useModal();
    const { open: openBreakpointLayoutForm, close: closeBreakpointLayoutForm, ModalWrapper: ModalWrapperBreakpointLayout } = useModal();
    const { open: openLoginSignDetail, close: closeLoginSignDetail, ModalWrapper: ModalWrapperLoginSignDetail } = useModal();
    const { open: openLoginSignForm, close: closeLoginSignForm, ModalWrapper: ModalWrapperLoginSign } = useModal();
    const { open: openCarouselDetail, close: closeCarouselDetail, ModalWrapper: ModalWrapperCarouselDetail } = useModal();
    const { open: openCarouselForm, close: closeCarouselForm, ModalWrapper: ModalWrapperCarousel } = useModal();
    const history=useNavigate();

    const componentList =[
      "Header",
      "Cards",
      "Button",
      "Navbar",
      "ToolTip",    
      "Footer",
      "Alert",
      "Toaster",
      "Form Components",
      "Table",
      "Loader",
      "Tab / Panel",
      "Carousel",
      "Breakpoint Layout",
      "Login / Signup"
    ];
  return(
    <>
      <div className="modal-components">
        <ModalWrapperHeaderDetail>
          <HeaderDetail close={closeHeaderDetail} />
        </ModalWrapperHeaderDetail>
        <ModalWrapperFooterDetail>
          <FooterDetail close={closefooterDetail} />
        </ModalWrapperFooterDetail>
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
        <ModalWrapperTooltipDetail>
          <TooltipDetail close={closeTooltipDetail} />
        </ModalWrapperTooltipDetail>
        <ModalWrapperTooltip>
          <TooltipForm close={closeTooltipForm} />
        </ModalWrapperTooltip>
        <ModalWrapperAlertDetail>
          <AlertDetail close={closeAlertDetail} />
        </ModalWrapperAlertDetail>
        <ModalWrapperAlert>
          <AlertForm close={closeAlertForm} />
        </ModalWrapperAlert>
        <ModalWrapperNavbar>
          <NavbarForm close={closeNavbarForm} />
        </ModalWrapperNavbar>
        <ModalWrapperNavbarDetail>
          <NavbarDetail close={closeNavbarDetail} />
        </ModalWrapperNavbarDetail>
        <ModalWrapperFooter>
          <FooterModal close={closeFooter} />
        </ModalWrapperFooter>
        <ModalWrapperToasterDetail>
        <ToasterDetail close={closeToasterDetail}/>
        </ModalWrapperToasterDetail>
        <ModalWrapperToaster>
          <ToasterForm close={closeToasterForm}/>
        </ModalWrapperToaster>

        <ModalWrapperFormComponentDetail>
          <FormComponentDetail close={closeFormComponentDetail} />
        </ModalWrapperFormComponentDetail>

        <ModalWrapperTableDetail>
          <TableDetail close={closeTableDetail} />
        </ModalWrapperTableDetail>
        <ModalWrapperTable>
          <TableForm close={closeTableForm} />
        </ModalWrapperTable>
        <ModalWrapperLoaderDetail>
          <LoaderDetail close={closeLoaderDetail} />
        </ModalWrapperLoaderDetail>
        <ModalWrapperLoader>
          <LoaderModal close={closeLoaderForm} />
        </ModalWrapperLoader>
        <ModalWrapperDynamicTabs>
          <DynamicTabsForm close={closeDynamicTabsForm} />
        </ModalWrapperDynamicTabs>
        <ModalWrapperDynamicTabsDetail>
          <DynamicDetail close={closeDynamicTabsDetail} />
        </ModalWrapperDynamicTabsDetail>
        <ModalWrapperBreakpointLayout>
          <BreakpointLayoutForm close={closeBreakpointLayoutForm} />
        </ModalWrapperBreakpointLayout>
        <ModalWrapperBreakpointLayoutDetail>
          <BreakpointLayoutDetail close={closeBreakpointLayoutDetail} />
        </ModalWrapperBreakpointLayoutDetail>
        <ModalWrapperLoginSign>
          <LogInModal close={closeLoginSignForm} />
        </ModalWrapperLoginSign>
        <ModalWrapperLoginSignDetail>
          <LoginSignDetail close={closeLoginSignDetail} />
        </ModalWrapperLoginSignDetail>
        <ModalWrapperCarousel>
          <CarouselForm close={closeCarouselForm}/>
        </ModalWrapperCarousel>
        <ModalWrapperCarouselDetail>
          <CarouselDetail close={closeCarouselDetail}/>
        </ModalWrapperCarouselDetail>


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
                <button title="Details button for header component" type="button" class="buttons" onClick={openHeaderDetail}>
                  Details
                </button>
                <button title="Create button for header component" type="button" class="buttons" onClick={openHeader}>
                  Create
                </button>
              </div>
            ) : data === "Cards" ? (
              <div className="modal-button_section">
                <button type="button" aria-label="Details button for card component" class="buttons" onClick={openFormDetail}>
                  Details
                </button>
                <button type="button" aria-label="Create button for card component" class="buttons" onClick={openForm}>
                  Create
                </button>
              </div>
            ) :  
            data === "Footer" ? (
              <div className="modal-button_section">
                <button type="button" aria-label="Details button for footer component" class="buttons" onClick={openFooterDetail}>
                  Details
                </button>
                <button type="button" aria-label="Create button for footer component" class="buttons" onClick={openFooter}>
                  Create
                </button>
              </div>
            ) : data === "Button"? (
              <div className="modal-button_section">
                <button type="button" aria-label="Details button for button component" class="buttons" onClick={openButtonDetail}>
                  Details
                </button>
                <button type="button" aria-label="Create button for button component" class="buttons" onClick={openButtonForm}>
                  Create
                </button>
              </div>
            ) : data === "ToolTip"? (
              <div className="modal-button_section">
                <button type="button" aria-label="Details button for tooltip component" class="buttons" onClick={openTooltipDetail}>
                  Details
                </button>
                <button type="button" aria-label="Create button for tooltip component" class="buttons" onClick={openTooltipForm}>
                  Create
                </button>
              </div>
            ) : data === "Navbar" ? (
              <div className="modal-button_section">
                <button type="button" aria-label="Details button for navbar component" class="buttons" onClick={openNavbarDetail}>
                  Details
                </button>
                <button type="button" aria-label="Create button for navbar component" class="buttons" onClick={openNavbarForm}>
                  Create
                </button>
              </div>
            ): data === "Toaster" ? (
              <div className="modal-button_section">
                <button  type="button" aria-label="Details button for toaster component" class="buttons" onClick={openToasterDetail}>
                  Details
                </button>
                <button type="button" aria-label="Create button for toaster component" class="buttons" onClick={openToasterForm}>
                  Create
                </button>
              </div>
            ): data === "Alert"? (
              <div className="modal-button_section">
                <button type="button" aria-label="Details button for alert component" class="buttons" onClick={openAlertDetail}>
                  Details
                </button>
                <button type="button" aria-label="Create button for alert component" class="buttons" onClick={openAlertForm}>
                  Create
                </button>
              </div>
            ) : data === "Form Components"? (
              <div className="modal-button_section">
                <button type="button" aria-label="Details button for form components" class="buttons" onClick={openFormComponentDetail}>
                  Details
                </button>
                <button type="button" aria-label="View components button for form components" class="buttons" onClick={()=>{history("/formcomponents")}}>
                  View
                </button>
              </div>
            ) : data === "Table"? (
              <div className="modal-button_section">
                <button type="button" aria-label="Details button for table component" class="buttons" onClick={openTableDetail}>
                  Details
                </button>
                <button type="button" aria-label="Create button for table component" class="buttons" onClick={openTableForm}>
                  Create
                </button>
              </div>
            ) : data === "Loader"? (
              <div className="modal-button_section">
                <button type="button" aria-label="Details button for loader component" class="buttons" onClick={openLoaderDetail}>
                  Details
                </button>
                <button type="button" aria-label="Create button for loader component" class="buttons" onClick={openLoaderForm}>
                  Create
                </button>
              </div>
            ) : data === "Tab / Panel"? (
              <div className="modal-button_section">
                <button type="button" aria-label="Details button for tabs and panels component" class="buttons" onClick={openDynamicTabsDetail}>
                  Details
                </button>
                <button type="button" aria-label="Create button for tabs and panels component" class="buttons" onClick={openDynamicTabsForm}>
                  Create
                </button>
              </div>
            ) : data === "Carousel"? (
              <div className="modal-button_section">
                <button type="button" aria-label="Details button for Carousel component" class="buttons" onClick={openCarouselDetail}>
                  Details
                </button>
                <button type="button" aria-label="Create button for Carousel component" class="buttons" onClick={openCarouselForm}>
                  Create
                </button>
              </div>
            ) : data === "Breakpoint Layout"? (
              <div className="modal-button_section">
                <button type="button" aria-label="Details button for Breakpoint Layout component" class="buttons" onClick={openBreakpointLayoutDetail}>
                  Details
                </button>
                <button type="button" aria-label="Create button for Breakpoint Layout component" class="buttons" onClick={openBreakpointLayoutForm}>
                  Create
                </button>
              </div>
            ) : data === "Login / Signup"? (
              <div className="modal-button_section">
                <button type="button" aria-label="Details button for login and signup component" class="buttons" onClick={openLoginSignDetail}>
                  Details
                </button>
                <button type="button" aria-label="Create button for login and signup component" class="buttons"  onClick={openLoginSignForm}>
                  Create
                </button>
              </div>
            ): (
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