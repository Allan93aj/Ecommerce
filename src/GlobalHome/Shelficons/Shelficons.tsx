import React from "react";
import { Component } from "react";
import Slider from "react-slick";
import '../../css/Shelficons.css'
import Smartphones from "./../../../public/shelfsimgs/Smartphones.png"
import Eletrodomesticos from "./../../../public/shelfsimgs/Eletrodomesticos.png"
import Eletroportateis from "./../../../public/shelfsimgs/Eletroportateis.png"
import Tvevideo from "./../../../public/shelfsimgs/Tvevideo.png"
import Informatica from "./../../../public/shelfsimgs/Informatica.png"
import Modaeacessorios from "./../../../public/shelfsimgs/Modaeacessorios.png"
import {Link} from 'react-router-dom'


export default class SimpleSlider extends Component {

    render() {
        const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 6,
          slidesToScroll: 1,
          arrows: true,
          autoplay: false,
          
        };

  return (
    <div className="shelficons">
        <div>
            <h2>Encontre os melhores produtos!</h2>
          </div>
        <Slider {...settings}>
          <div>
          <Link to='/smartphones'>
            <a href="">
                <img src={Smartphones} alt="Smartphones" />
                <span>Smartphones</span>
            </a>
           </Link> 
          </div>

          <div>
          <Link to='/eletrodomesticos'>
            <a href="">
                <img src={Eletrodomesticos} alt="Eletrodomésticos" />
                <span>Eletrodomésticos</span>
            </a>
            </Link>
          </div>

          <div>
            <Link to='/eletroportateis'>
            <a href="">
                <img src={Eletroportateis} alt="Eletroportáteis" />
                <span>Eletroportáteis</span>
            </a>
            </Link>
          </div>

          <div>
            <Link to='/tvevideo'>
            <a href="">
                <img src={Tvevideo} alt="Tv e Vídeo" />
                <span>Tv e Vídeo</span>
            </a>
            </Link>
          </div>

          <div>
          <Link to='/informatica'>
            <a href="">
                <img src={Informatica} alt="Informática" />
                <span>Informática</span>
            </a>
            </Link>
          </div>

          <div>
          <Link to='/modaeacessorios'>
            <a href="">
                <img src={Modaeacessorios} alt="Moda e Acessórios" />
                <span>Moda e Acessórios</span>
            </a>
            </Link>
          </div>

          <div>
            <a href="">
                <img src={Smartphones} alt="Smartphones" />
                <span>Smartphones</span>
            </a>
          </div>

        </Slider>
      </div>
  )
}

}