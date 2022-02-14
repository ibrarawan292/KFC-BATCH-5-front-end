

import React from 'react'
import Slider1 from '../assets/slider-1.jpg'
import Slider2 from '../assets/slider-2.png'
import Slider3 from '../assets/slider-3.jpg'

const Slider = () => {
  return (
    <div className='slider-Box'>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Slider1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Slider2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Slider3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Slider
