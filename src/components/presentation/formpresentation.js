import React from "react";
import {  Link } from "react-router-dom";
import "../presentation/presentation.scss";
import FormModal from "./modal/formmodal";
import "../presentation/presentation.scss";

const FormPresentation = () => {
  return (
    <>
    <div className="presentation">
      <div className="header-container">
        <div className="component-header">
          <div className="d-flex align-items-center header-left">
            <h1>Form Inputs </h1><span> Library</span> 
          </div>
        </div>
        <div className="d-flex align-items-center header-right"> 
          <div className="back-form">
          <Link to="/" className="link-button">
              Back
          </Link>
          </div>
        </div>
      </div>
      <FormModal />
    </div>
  </>
  );
};
export default FormPresentation;