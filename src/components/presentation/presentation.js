import React from "react";
import Modal from "../presentation/modal/modal";
import "../presentation/presentation.scss";

const Presentation = () => {
  return (
    <>
    <div className="presentation">
      <div className="header-container">
        <h1>Components  </h1><span> Library</span>
      </div>
      <Modal />
    </div>
  </>
  )
  ;
};
export default Presentation;