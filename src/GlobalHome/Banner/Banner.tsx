import React, { Component } from "react";
import Slider from "react-slick";
import '../../css/Banner.css'
import Banner1 from "./../../../public/bannerimgs/banner1.png"
import Banner2 from "./../../../public/bannerimgs/banner2.png"
import Banner3 from "./../../../public/bannerimgs/banner3.png"


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000
      
    };
    return (
      <div className="banner">
        <Slider {...settings}>
          <div>
            <a href="">
                <img src={Banner1} alt="banner1" />
            </a>
          </div>
          <div>
            <a href="">
                <img src={Banner2} alt="banner1" />
            </a>
          </div>
          <div>
            <a href="">
                <img src={Banner3} alt="banner1" />
            </a>
          </div>
        </Slider>
      </div>
    );
  }
}
