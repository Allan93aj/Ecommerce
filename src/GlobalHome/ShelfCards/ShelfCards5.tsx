import React from 'react'
import { Component } from "react";
import {useEffect} from 'react'
import '../../css/ShelfCards.css'
import Slider from "react-slick";
import {MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md'
import { getItem, setItem } from '../../services/LocalStorage'
import {Link} from 'react-router-dom'




const HomeDesktop = () => {
    const [data, setData] = React.useState<any>([])
    const [cart, setCart] = React.useState<any>(getItem('Carrinho') ||[])

    useEffect(() => {
    const fetchApi = async () => {
        const url = 'https://api.mercadolibre.com/sites/MLB/search?q=games';
        const response = await fetch(url)
        const objJson = await response.json()
        setData(objJson.results)
    }
    fetchApi()
    },[])

    const handleClick = (obj) => {
    const element = cart.find((e) => e.id === obj.id)
    if(element){
        const arrFilter = cart.filter((e) => e.id !== obj.id)
        setCart(arrFilter)
        setItem('Carrinho', arrFilter)
    } else{
        setCart([...cart, obj])
        setItem('Carrinho', [...cart, obj])
    }

    
    }

    const settings = {
      dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        autoplay: false,
    };

    return (
      <div>          
          <div className='shelfcards'> 
          <div>
            <h2>Games </h2>
          </div>
          <Slider {...settings}>
            {
              data.map((e) => (
                <div key={e.id}>
                   <div className="cardShelf">
              <div className="wish">
              <button onClick={() => handleClick(e)}>
                    {
                      cart.some((itemCart: { id: any }) => itemCart.id === e.id) ? (
                        <MdOutlineFavorite className="favorite"/>
                      ) : (
                        <MdOutlineFavoriteBorder className="nofavorite" />
                      )
                    }
                  </button>
              </div>

              <div className="wrapper-cardShelf">
                <a href="">
                  <div className="cardShelf-imgproduct">
                    <img src={e.thumbnail} alt="" />
                  </div>
                  <div className="cardShelf-nameproduct">
                    <p>{e.title}</p>
                  </div>

                  <div className="emptyTag"></div>

                  <div className="allPrices">
                    <div className="milesPrice">
                      <p className="priceValueInMilles">1.000.000 milhas</p>
                      <p className="priceValue">ou R$ {e.price}</p>
                      <p className="earnMiles">Ganhe 1000 milhas</p>
                      <p className="ClubOrDiamant">Clube Smiles ou Diamante</p>
                    </div>
                    
                    <div className="price">
                      <p className="asFrom">A partir de</p>
                      <p className="priceValueInMilles">1.000.000 milhas</p>
                      <p className="priceValue"> ou <span> R$ {e.price}</span></p>
                      <p className="earnMiles">Ganhe 500 milhas</p>
                    </div>    
                  </div>
                 
                    
                </a>
              </div>
            </div>
                </div>
              ))
            }
          </Slider>
          </div>
      </div>
    )
}

export default HomeDesktop

