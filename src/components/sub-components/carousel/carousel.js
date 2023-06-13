import React from 'react';
import "./carousel.scss";
import { Link } from "react-router-dom";
import CarouselMain from './carousel-main';
function CarouselComponent() {
  return (
    <>
    <div className="component-toaster">
    <div className="toaster-left">
      <h1>Carousel</h1>
      <span> Component</span>
    </div>
    <div className="toaster-right">
      <div className="button-section">
        {/* <div  className="buttons"> */}
        <Link
          to="/"
          aria-label="back to various component homepage"
          // state={headerData}
          className="link-button"
        >
          Back
        </Link>
        {/* </div> */}

        {/* <button className="backToHome" onClick={()=>{history("/")}}>Back</button> */}
        <button class="buttons" aria-label="Edit values for Tab or Panel Component" >
          Edit
        </button>
      </div>
    </div>
  </div>
   <CarouselMain/>
</>
  )
}

export default CarouselComponent;