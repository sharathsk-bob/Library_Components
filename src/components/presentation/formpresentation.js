import React, { useEffect, useCallback, useMemo } from "react";
import Modal from "../presentation/modal/modal";
import "../presentation/presentation.scss";
import FormModal from "./modal/formmodal";
import { useLocation, Link } from "react-router-dom";

const FormPresentation = () => {
  return (
    <>
    <div className="presentation">
      <div className="header-container">
      <h1>Form Inputs  </h1><span> Library</span>
      {/* <div className="button-section">
                    <Link to="/" className="link-button" aria-label="back to various component homepage">
                        Back
                    </Link>
                    
                </div> */}
      </div>
      <FormModal />
    </div>
  

  </>
  )
  ;
};
export default FormPresentation;