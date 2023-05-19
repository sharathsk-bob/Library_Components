import React from 'react';
import { useLocation } from "react-router-dom";
import { Toast } from '@coreui/coreui';
import { Link } from "react-router-dom";
import useModal from "../../sub-components/use-modal/use-modal";
import EditToaster from './edit-toaster';
import "./toaster.scss";

function Toaster() {
    const location = useLocation();
    const props = location.state.toasterProps;
    const { open: openEditToaster, close: closeEditToaster, ModalWrapper: ModalWrapperEditToaster } = useModal();
    const openToaster=()=>{
        const toastLiveExample = document.getElementById('liveToast');
        const toast = new Toast(toastLiveExample);
        toast.show();
    }
    
    
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
          <div className='toaster-button'>
          <button type="button" class="btn btn-primary" id="liveToastBtn" onClick={openToaster}>{props.buttonText}</button>
          </div>
    

<div class="position-fixed top-0 end-0 p-3" >
  <div id="liveToast" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      {/* <img src="..." class="rounded me-2" alt="..."/> */}
      {props.toasterType=="success"?<i class="fa fa-check fa-lg" aria-hidden="true"></i>:props.toasterType=="warning"?<i class="fa fa-warning fa-lg" aria-hidden="true"></i>:props.toasterType=="info"?<i class="fa fa-info-circle fa-lg" aria-hidden="true"></i>:props.toasterType=="error"?<i class="fa fa-times-circle fa-lg" aria-hidden="true"></i>:("")}
      <strong class="me-auto">{props.title}</strong>
      {/* <small>11 mins ago</small> */}
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
    {props.message}
    </div>
  </div>
</div>
    </>
  )
}

export default Toaster