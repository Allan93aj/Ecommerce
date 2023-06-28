import React from 'react'
import Header from '../GlobalHome/Header/Header'
import {useEffect} from 'react'
import {MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md'
import { getItem, setItem } from '../services/LocalStorage'
import Slider from "react-slick";


export default function SimpleSlider() {

  const [data, setData] = React.useState<any>([])
    const [cart, setCart] = React.useState<any>(getItem('Carrinho') ||[])

    useEffect(() => {
      const fetchApi = async () => {
          const url = 'https://api.mercadolibre.com/sites/MLB/search?q=eletroportateis';
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
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      arrows: true,
      autoplay: false,
  };
  return (
    <div>
       <Header/>
       <div>

       <div className='shelf-slick'> 
       <Slider {...settings}>
      
            {
             
              data.map((e) => (
                <div key={e.id}>
                  <img src={e.thumbnail} alt="" />
                  <h4>{e.title}</h4>
                  <h4>{e.price}</h4>
                  <button onClick={() => handleClick(e)}>
                    {
                      cart.some((itemCart: { id: any }) => itemCart.id === e.id) ? (
                        <MdOutlineFavorite className="favorite"/>
                      ) : (
                        <MdOutlineFavoriteBorder className="nofavorite"/>
                      )
                    }
                  </button>
                </div>
              ))
             
            }
           
      </Slider>
    </div>
       </div>
      
    </div>
   

   
  );
}