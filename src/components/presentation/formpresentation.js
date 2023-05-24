import React, { useEffect, useCallback, useMemo } from "react";
import Modal from "../presentation/modal/modal";
import "../presentation/presentation.scss";
import FormModal from "./modal/formmodal";


const FormPresentation = () => {
  return (
    <>
    <div className="presentation">
      <div className="header-container">
      <h1>Components  </h1><span> Library</span>
      </div>
      <FormModal />
    </div>
  

  </>
  )
  ;
};
export default FormPresentation;