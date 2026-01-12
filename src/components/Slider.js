import React from 'react'
import { Link } from 'react-router-dom'

const Slider = () => {
  return (


    <div id="slider" className="carousel slide slider">
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner" role="listbox">

        <div className="carousel-item active">
          <div className="">
            <div className="carousel-caption d-none d-md-block text-left container">
              <div className="caption-text float-left col-md-4">
                <h1 className="font-weight-bold">iMac Pro 2.</h1>
                <p className="font-weight-normal pb-4">Mobile ready, outstanding performance<br /> with gorgeous display</p>
                <p><Link className="btn btn-md btn-outline-primary font-weight-bold px-5 py-2" role="button" to="/products/tablets">Buy now &ensp; <i className="la la-arrow-right"></i></Link></p>
              </div>
              <img src="img/ipad.png" className="float-right col-md-8" />
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="second-slide bg-light" alt="Second slide" />
          <div className="">
            <div className="carousel-caption d-none d-md-block container">
              <h1>Another example headline.</h1>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <p><a className="btn btn-lg btn-primary" href="/" role="button">Learn more</a></p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="third-slide bg-light" alt="Third slide" />
          <div className="">
            <div className="carousel-caption d-none d-md-block text-right container">
              <h1>One more for good measure.</h1>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <p><a className="btn btn-lg btn-primary" href="/" role="button">Browse gallery</a></p>
            </div>
          </div>
        </div>

      </div>
      <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>


  )
}

export default Slider
