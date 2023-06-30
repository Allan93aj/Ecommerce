import React from 'react'
import { Component } from "react";
import {useEffect} from 'react'
import '../../css/ShelfCards.css'
import Slider from "react-slick";
import {MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md'
import { getItem, setItem } from '../../services/LocalStorage'
import {Link} from 'react-router-dom'
import bannershelf6 from "./../../../public/bannerimgs/bannershelf6.png"




const HomeDesktop = () => {
    const [data, setData] = React.useState<any>([])
    const [cart, setCart] = React.useState<any>(getItem('Carrinho') ||[])

    useEffect(() => {
    const fetchApi = async () => {
        const url = 'https://api.mercadolibre.com/sites/MLB/search?q=smartphones';
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
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        autoplay: false,
        vertical: true
    };

    return (
      <div> 
        <hr className='shelfhr' /> 
              
          <div className='shelfcards shelfcards6'> 
            <div className='shelfCard6-leftside'>
              <div  className='wrapper-shelf6-txt'>
              <h1>No clima da sua viagem para Roma</h1>
              <p>Produtos com sotaque italiano para você ir preparando o coração até o dia do embarque.</p>
              <button>Ver mais dicas</button>
              </div>
              

              <div className='shelf6-btns'>
                <div className='reserve'>
                  <button>Reserve seu hotel</button>
                </div>
                <div className='alugue'>
                  <button>Alugue seu carro</button>
                </div>
              </div>

              <img src={bannershelf6} alt="" />
            </div>

            <div className='shelfCard6-rightsite'>
              <Slider {...settings}>
            {
              data.map((e) => (
                <div key={e.id}>
                   <div className="cardShelf cardShelf6">

              

              <div className="wrapper-cardShelf wrapper-cardShelf6">
                <a href="">
                  
                <div className="allPrices">
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

                  {/* imagem do card */}
                  <div className="cardShelf-imgproduct">
                    <img src={e.thumbnail} alt="" />
                  </div>

                  
                  {/* nome do produto */}
                  <div className="cardShelf-nameproduct">
                    <p>{e.title}</p>
                  </div>

                    {/* tag vazia */}
              

                    {/* preço em milhas */}
                    <div className="milesPrice">
                      <p className="priceValueInMilles">1.000.000 milhas</p>
                      <p className="priceValue">ou R$ {e.price}</p>
                      <p className="earnMiles">Ganhe 1000 milhas</p>
                      <p className="ClubOrDiamant">Clube Smiles ou Diamante</p>
                    </div>

                    {/* preço normal */}
                    <div className="price">
                      <p className="asFrom">A partir de</p>
                      <p className="priceValueInMilles">1.000.000 milhas</p>
                      <p className="priceValue"> ou <span> R$ {e.price}</span></p>
                      <p className="earnMiles">Ganhe 500 milhas</p>
                    </div> 

                  {/* <div className="allPrices">     
                  </div> */}
                 
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
      </div>
    )
}

export default HomeDesktop

