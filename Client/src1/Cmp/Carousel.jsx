import React, { useState } from 'react';
import one from "../assests/1.jpg";
import two from "../assests/2.jpg";
import banner from "../assests/banner.jpg";

const Carousel = () => {

  const [ isLoaded , setIsloaded ] = useState(false);

  const handleLoad = () => {
    console.log("loaded");
    setIsloaded(true)
  }
  
  return (
    <div
  id="carouselExampleIndicators"
  className="carousel slide"
  data-ride="carousel"
>
  <ol className="carousel-indicators">
    <li
      data-target="#carouselExampleIndicators"
      data-slide-to={0}
      className="active"
    />
    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={ banner } className="d-block w-100" onLoad={handleLoad} alt="..." />
      { !isLoaded && <center className="mt-3" >
            <br />
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <br /> <span>image is Loading...</span>
        </center> }
    </div>
    <div className="carousel-item">
      <img src={ banner } className="d-block w-100 h-50" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={ banner } className="d-block w-100 h-50" alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-target="#carouselExampleIndicators"
    data-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-target="#carouselExampleIndicators"
    data-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </button>
</div>

  )
}

export default Carousel;