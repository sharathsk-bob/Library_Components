import React,{useState} from 'react';
import "./carousel.scss";
import { Link } from "react-router-dom";
import CarouselMain from './carousel-main';
import useModal from '../use-modal/use-modal';
import { useLocation } from 'react-router-dom';
import EditCarouselForm from './edit-carousel';
function CarouselComponent() {
  const {
    open: openEditCarousel,
    close: closeEditCarousel,
    ModalWrapper: ModalWrapperEditCarousel,
  } = useModal();
  const location = useLocation();
  const props = location.state?.carouselProps;
  const [activeTab, setActiveTab] = useState(1);
  return (
    <>
    <ModalWrapperEditCarousel>
      <EditCarouselForm close={closeEditCarousel} data={props}/>
    </ModalWrapperEditCarousel>
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
        <button class="buttons" aria-label="Edit values for Tab or Panel Component" onClick={openEditCarousel}>
          Edit
        </button>
      </div>
    </div>
  </div>
   <CarouselMain data={props}/>
</>
  )
}

export default CarouselComponent;