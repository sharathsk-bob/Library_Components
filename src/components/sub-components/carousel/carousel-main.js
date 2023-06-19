import React from 'react'
import "./carousel.scss";
import Carousel1 from "../../asset/images/carousel-img1.jpg";
import Carousel2 from "../../asset/images/carousel-img2.jpg";
import Carousel3 from "../../asset/images/carousel-img3.jpg";
import Carousel4 from "../../asset/images/carousel-img4.JPG";
import Carousel5 from "../../asset/images/carousel-img5.jpg";
import Carousel6 from "../../asset/images/carousel-img6.jpg";
function CarouselMain(props) {

  const{ CarouselProps } = props;
  console.log(CarouselProps, "props in Carousel-main.js");
  return (
    <>
      <div className={`carouselw-${CarouselProps.width}`}>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
        <div class="carousel-indicators">
          { CarouselProps.cardCount == 1 ? (
            <button tabIndex={2} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class={`btn-carousel-${CarouselProps.theme} active`} aria-current="true" aria-label="Slide 1"></button>
          ) : CarouselProps.cardCount == 2 ? (
            <>
              <button tabIndex={2} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class={`btn-carousel-${CarouselProps.theme} active`} aria-current="true" aria-label="Slide 1"></button>
              <button tabIndex={2} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" class={`btn-carousel-${CarouselProps.theme}`} aria-label="Slide 2"></button>
            </>
          ) : CarouselProps.cardCount == 3 ? (
            <>
              <button tabIndex={2} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class={`btn-carousel-${CarouselProps.theme} active`} aria-current="true" aria-label="Slide 1"></button>
              <button tabIndex={2} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" class={`btn-carousel-${CarouselProps.theme}`} aria-label="Slide 2"></button>
              <button tabIndex={2} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" class={`btn-carousel-${CarouselProps.theme}`} aria-label="Slide 3"></button>
            </>
          ) : CarouselProps.cardCount == 4 ? (
            <>
              <button tabIndex={2} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class={`btn-carousel-${CarouselProps.theme} active`} aria-current="true" aria-label="Slide 1"></button>
              <button tabIndex={2} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" class={`btn-carousel-${CarouselProps.theme}`} aria-label="Slide 2"></button>
              <button tabIndex={2} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" class={`btn-carousel-${CarouselProps.theme}`} aria-label="Slide 3"></button>
              <button tabIndex={2} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" class={`btn-carousel-${CarouselProps.theme}`} aria-label="Slide 4"></button>
            </>
          ) : CarouselProps.cardCount == 5 ? (
            <>
              <button tabIndex={2} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class={`btn-carousel-${CarouselProps.theme} active`} aria-current="true" aria-label="Slide 1"></button>
              <button tabIndex={2} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" class={`btn-carousel-${CarouselProps.theme}`} aria-label="Slide 2"></button>
              <button tabIndex={2} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" class={`btn-carousel-${CarouselProps.theme}`} aria-label="Slide 3"></button>
              <button tabIndex={2} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" class={`btn-carousel-${CarouselProps.theme}`} aria-label="Slide 4"></button>
              <button tabIndex={2} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" class={`btn-carousel-${CarouselProps.theme}`} aria-label="Slide 5"></button>
            </>
          )
          :("")}  
        </div>
        <div class={`carousel-inner ${CarouselProps.wantImage=='No'?"carousel-image-none":"" }`}>
          { CarouselProps.cardCount == 1 ? (
            <div class="carousel-item active">
              <img src={Carousel1} class="d-block w-100" alt="..."/>       
            <div class={`carousel-caption carousel-${CarouselProps.theme}`}>
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
            </div>
          ) : CarouselProps.cardCount == 2 ? (
            <>
              <div class="carousel-item active">
                <img src={Carousel1} class="d-block w-100" alt="..."/>       
              <div class={`carousel-caption carousel-${CarouselProps.theme}`}>
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
              </div>
              <div class="carousel-item">
                  <img src={Carousel2} class="d-block w-100" alt="..."/>
                <div class={`carousel-caption carousel-${CarouselProps.theme}`}>
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
            </> 
          ) : CarouselProps.cardCount == 3 ?  (
            <>
              <div class="carousel-item active">
                <img src={Carousel1} class="d-block w-100" alt="..."/>       
              <div class={`carousel-caption carousel-${CarouselProps.theme}`}>
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
              </div>
              <div class="carousel-item">
                  <img src={Carousel2} class="d-block w-100" alt="..."/>  
                <div class={`carousel-caption carousel-${CarouselProps.theme}`}>
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div class="carousel-item">
                  <img src={Carousel6} class="d-block w-100" alt="..."/>
                <div class={`carousel-caption carousel-${CarouselProps.theme}`}>
                  <h5>Third slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div> 
            </>      
          ) : CarouselProps.cardCount == 4 ? (
            <>
              <div class="carousel-item active">
              { CarouselProps.wantImage == 'Yes' ? (
                <img src={Carousel1} class="d-block w-100" alt="..."/>
              ) 
              : ("")}        
              <div class={`carousel-caption carousel-${CarouselProps.theme}`}>
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
              </div>
              <div class="carousel-item">
                  <img src={Carousel2} class="d-block w-100" alt="..."/> 
                <div class={`carousel-caption carousel-${CarouselProps.theme}`}>
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div class="carousel-item">
                  <img src={Carousel6} class="d-block w-100" alt="..."/>
                <div class={`carousel-caption carousel-${CarouselProps.theme}`}>
                  <h5>Third slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div> 
              <div class="carousel-item">
                <img src={Carousel5} class="d-block w-100" alt="..."/>

              <div class={`carousel-caption carousel-${CarouselProps.theme}`}>
                <h5>Fourth slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
            </>       
          ) : CarouselProps.cardCount == 5 ? (
            <>
              <div class="carousel-item active">
                <img src={Carousel1} class="d-block w-100" alt="..."/>    
              <div class={`carousel-caption carousel-${CarouselProps.theme}`}>
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
              </div>
              <div class="carousel-item">
                  <img src={Carousel2} class="d-block w-100" alt="..."/> 
                <div class={`carousel-caption carousel-${CarouselProps.theme}`}>
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div class="carousel-item">
                  <img src={Carousel6} class="d-block w-100" alt="..."/>
                <div class={`carousel-caption carousel-${CarouselProps.theme}`}>
                  <h5>Third slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div> 
              <div class="carousel-item">
                <img src={Carousel5} class="d-block w-100" alt="..."/>
              <div class={`carousel-caption carousel-${CarouselProps.theme}`}>
                <h5>Fourth slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
            <div class="carousel-item">
                <img src={Carousel6} class="d-block w-100" alt="..."/>
              <div class={`carousel-caption carousel-${CarouselProps.theme}`}>
                <h5>Fifth slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
            </>  
          ) : 
          (
            <div class="carousel-item active">
              <img src={Carousel1} class="d-block w-100" alt="..." />
              <div class={`carousel-caption carousel-${CarouselProps.theme}`}>
                <h5>Default slide label</h5>
                <p>Some default placeholder content.</p>
              </div>
            </div>
          )}
          <button tabIndex={1} class={`carousel-control-prev carousel-prev-${CarouselProps.theme}`} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button tabIndex={1} class={`carousel-control-next carousel-next-${CarouselProps.theme}`} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      </div>
    </> 
  );
}

export default CarouselMain;