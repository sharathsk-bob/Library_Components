import React from 'react'

function CarouselMain(props) {
  const { data }=props;
  return (
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
    </div>
    <div class="carousel-inner ">
      <div class="carousel-item active">
        <img src="https://prod.ucwe.capgemini.com/wp-content/uploads/2023/05/DotCom_Banner_2880X1800.jpg" class="d-block w-100" alt="..."/>
        <div class="carousel-caption">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://prod.ucwe.capgemini.com/wp-content/uploads/2021/07/Capgemini_people_diversity_inclusion-1-e1632829912313.jpg" class="d-block w-100" alt="..."/>
        <div class="carousel-caption">
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://prod.ucwe.capgemini.com/wp-content/uploads/2023/05/world-wealth-report-2023.jpg" class="d-block w-100" alt="..."/>
        <div class="carousel-caption ">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://prod.ucwe.capgemini.com/wp-content/uploads/2022/11/Capgemin_Inside-Stories_Women-in-rugby_Hero.jpg" class="d-block w-100" alt="..."/>
        <div class="carousel-caption">
          <h5>Fourth slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://www.capgemini.com/wp-content/uploads/2021/09/Capgemini_Industries_Hospitality-Travel.jpg?w=1000&quality=90" class="d-block w-100" alt="..."/>
        <div class="carousel-caption">
          <h5>Fifth slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
    </div>
   
  </div>
  )
}

export default CarouselMain