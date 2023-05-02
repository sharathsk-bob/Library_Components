import React, { useEffect, useCallback, useMemo } from "react";
import Modal from "../presentation/modal/modal";
import "../presentation/presentation.scss";


const Presentation = () => {
  return (
    <>
    <div className="presentation">
      <div className="header-container">
      <h1>Components Library</h1>
      </div>
      <Modal />
    </div>
  

  </>
  )
  ;
};
export default Presentation;