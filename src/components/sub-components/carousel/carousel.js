import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useModal from "../../sub-components/use-modal/use-modal";
import styled from "styled-components";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CarouselMain from './carousel-main';
import CarouselHtml from "./carousel-html";
import "./carousel.scss";

export const CustomStyleCarousel = styled.div`
.carousel{
  max-width: 1500px;
  width: 100%;
  margin: 40px auto;
}
.carousel-item img{
  width: 100%;
  height: 500px;
}
.carousel-control-next, .carousel-control-prev {
  width: 5% !important;
  box-shadow: 0 25px 100px 0 rgba(0,0,0,.15), 0 2px 4px 0 rgba(0,0,0,.5);
  background-image: linear-gradient(244deg,rgba(0,123,189,.9),rgba(0,63,97,.9));
  top:200px !important;
  bottom: 200px !important;
}
.carousel-caption {
  font-size: 1.5rem !important;
  box-shadow: 0 25px 100px 0 rgba(0,0,0,.15), 0 2px 4px 0 rgba(0,0,0,.5);
  background-image: linear-gradient(244deg,rgba(37, 36, 36, 0.9),rgba(0,63,97,.9));
}
.carousel-indicators {
  margin-bottom: 0rem !important;
}
.carousel-caption p:hover{
  background-size: 100% 90%;
}
.carousel-caption h5:hover{
  background-size: 25% 100%;
}
.carousel-caption p{
  background: linear-gradient(to right,#00e6e3 0%,#00e6e3 100%) no-repeat 0px 100%/0px 100%;
  transition: all .2s ease-in-out;
}
.carousel-caption h5{
  color: #fff !important;
  background: linear-gradient(to right,#00e6e3 0%,#00e6e3 100%) no-repeat 0px 100%/0px 100%;
  transition: all .2s ease-in-out;
}
.carousel-caption {
  position: absolute;
  right: 45%;
  bottom: 1.5em;
  left: 1%;
  color: #fff;
  text-align:start;
  padding: 1.25rem 1.25rem;
}
.carousel-image-none .carousel-item img{
  display: none !important;
  .carousel-caption{
      position: initial !important;
  }
}
.carousel{
.carousel-image-none{
  background-color: white;
  box-shadow: 0 25px 100px 0 rgba(0,0,0,.15), 0 2px 4px 0 rgba(0,0,0,.5);
  .carousel-item{
      .carousel-caption{
          position:static !important;
          color: black;
          padding: 1.25em 6.25em;
      }
  }
  .carousel-control-next, .carousel-control-prev {
      top:0px !important;
      bottom: 0px !important;
  }
}

}

.carouselw-25 {
  width: 25%;
  margin: 0 auto;
}

.carouselw-50 {
  width: 50%;
  margin: 0 auto;
}

.carouselw-75 {
  width: 75%;
  margin: 0 auto;
}

.carouselw-100 {
  width: 98%;
  margin: 0 auto;
}

.carousel-dark {
  background-image: linear-gradient(244deg,black,white);
}

.carousel-light {
  background-image: linear-gradient(244deg,#ccc,white);
}

.carousel-blue {
  background-image: linear-gradient(244deg,#0070AD,white);
}

.carousel-purple {
  background-image: linear-gradient(244deg,#2b0a3d,white);
}
`;

function CarouselComponent() {
  const location = useLocation();
  const props = location.state.carouselProps;

  const [activeTab, setActiveTab] = useState(0);

  const formattedCSS = CustomStyleCarousel.componentStyle.rules[0];

  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(formattedCSS)
    .then(() => {
        setCopied(true);
        setTimeout(() => {
        setCopied(false);
        }, 2000);
    })
    .catch((error) => {
        console.error('Failed to copy to clipboard:', error);
    });
  };

  return (
    <>
      <div className="component-toaster">
      <div className="toaster-left">
        <h1>Carousel</h1>
        <span> Component</span>
      </div>
      <div className="toaster-right">
        <div className="button-section">
          <Link
            to="/"
            aria-label="back to various component homepage"
            // state={headerData}
            className="link-button"
          >
            Back
          </Link>

          <button class="buttons" aria-label="Edit values for Carousel Component" >
            Edit
          </button>
        </div>
      </div>
      </div>
      <CarouselMain CarouselProps={props}/>

      <div className="card-tabs">
        <button className={activeTab === 1 ? "active" : ""} aria-label="HTML Page of Carousel Component" onClick={() => setActiveTab(1)}>
          HTML
        </button>
        <button className={activeTab === 0 ? "active" : ""} aria-label="CSS Page of Carousel Component" onClick={() => setActiveTab(0)}>
          CSS
        </button>
      </div>

      <div className="card-content">
      {activeTab === 0 ? (
          <>
            <div className='clipboard-div'>
              <button className='clipboard-btn' aria-label="copy to clipboard button" onClick={copyToClipboard}>
                <i className={`fa ${copied ? 'fa-check' : 'fa-copy'}`} >
                  {copied ? ' Copied!' : ' Copy Code'}
                </i>
              </button>
            </div>
            <SyntaxHighlighter language="css" style={coy}>
              {formattedCSS}
            </SyntaxHighlighter>  
          </>
      ) : (
        <CarouselHtml CarouselProps ={props} />
      )}
      </div>
    </>
  )
}
export default CarouselComponent;