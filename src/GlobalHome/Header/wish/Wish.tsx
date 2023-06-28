import React from 'react'
import { getItem, setItem } from '../../../services/LocalStorage'
import {MdOutlineFavorite, MdOutlineFavoriteBorder } from 'react-icons/md'
import { AiOutlineRight } from 'react-icons/Ai'
import Header from '../Header'
import {Link} from 'react-router-dom'
import '../../../css/Wish.css'
import Nofavoritos from "../../../../public/imgs/Favoritos.png"

const Wish = () => {
    const [data, setData] = React.useState(getItem('Carrinho') || [])


    const removeItem = (obj) => {
        const arrFilter = data.filter((e) => e.id !== obj.id)
        setData(arrFilter)
        setItem('Carrinho', arrFilter)
    }

    if (!data || data.length == 0) {
      return (
        <div>
          <Header />

        <div className="breadcrumbs">
            <div className='wrapper-breadcrumbs'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><AiOutlineRight /></li>
                    <li>Favoritos</li>
                </ul>
            </div>
        </div>

        <div className="pagetxt">   
        <h1>Favoritos</h1>        
            <div className='no-fav'>
              <img src={Nofavoritos} alt="" />
              <h2>Você não possui produtos adicionados em sua lista de Favoritos!</h2>
              <h3>Adicione produtos marcando o ícone <span><MdOutlineFavoriteBorder/></span></h3>
               <Link to="/"><button >Voltar para a Home</button></Link>
            </div>
            
        </div>
        <hr />
        </div>
      )
    }
    
  return (
    <div>
        <Header />

        <div className="breadcrumbs">
            <div className='wrapper-breadcrumbs'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><AiOutlineRight /></li>
                    <li>Favoritos</li>
                </ul>
            </div>
        </div>

        <div className="pagetxt">
            <h1>Favoritos</h1>
            <div className="page-minitxt">
                <p>Veja os produtos adicionados em sua lista, caso 
                    queira remover um produto, desmarque o ícone <span><MdOutlineFavorite className="favorite" /></span></p>
            </div>
        </div>

        <div id='geralCard'>
            {
                data.map((e) => (
                
                    <div key={e.id}>
                      <div className="cardShelf">
                  <div className="wish">
                  <button onClick={() => removeItem(e)}><MdOutlineFavorite className="favorite"/></button>
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
        </div>
    </div>
  )
}

export default Wish