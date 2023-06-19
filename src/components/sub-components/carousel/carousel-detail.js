import React from "react";
import closeIcon from "../../asset/images/cross-white.png";
import FocusTrap from "focus-trap-react";

const CarouselDetail = (props)=>{

    const{close} = props;
 
    return (
        <FocusTrap
			focusTrapOptions={{
				onDeactivate: close
			}}
		>
      <div className="modal_wapper">
        <div className="modal-content detail-container">
            <div className="detail-header">
            <p>Carousel</p>
                <button className="close-button" aria-label="close carousel details modal" onClick={close}>
                    <img src={closeIcon}></img>
                </button>
            </div>
    
        <div className="modal-container details-section">
            {/* <h1>
            Details for the Carousel section are below:
            </h1> */}
            <p>Please do follow the given instruction while creating the Carousel component.</p>
            <div className="detail-content">
                <ul>
                    <li>User can select the number of cards displayed in carousel, limiting upto 5.</li>
                    <li>User can make a choice if they want to include image in carousel.</li>
                    <li>User can select the width of the carousel in the screen.</li>
                    <li>User can select the theme of the carousel from the dropdown.</li>
                </ul>
            </div>
        </div>
        </div>
      </div>
      </FocusTrap>
    ); 
};
export default CarouselDetail;