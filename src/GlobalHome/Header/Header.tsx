import React from 'react'
import '../../css/Header.css'
import Logo from "./../../../public/imgs/Logo.png"
import Home from "./../../../public/imgs/Home.png"
import Apps from "./../../../public/imgs/Apps.png"
import Search from "./../../../public/imgs/Search.png"
import Wish from "./../../../public/imgs/Wish.png"
import Basket from "./../../../public/imgs/Basket.png"
import Order from "./../../../public/imgs/Order.png"
import MenuRight from './MenuRight'
import MenuLeft from './MenuLeft'
import {Link} from 'react-router-dom'


const Header = () => {
  return (
    <header>
        <div className='headerUp'>
            <div className='container-fluid'>
                <div className='left-side'>
                    <div className='wrapper-left-side'>
                        <div className='logo'>
                            <a href="/"><img src={Logo} alt="" /></a>
                        </div>
                        <MenuLeft />
                    </div>
                </div>
                <div className='right-side'>
                    <div className='wrapper-right-side'>
                        <MenuRight />
                    </div>
                </div>
            </div>
        </div>

        <div className="headerDown">
            <div className="container-fluid">
                <div className='dropMenu'>
                    <Link to='/'><img src={Home} alt="" /></Link>
                        <p>Todos os produtos</p>
                    <img className='btn-drop-rotate'  src={Apps} alt="" />
                </div>
                <div className='search'>
                    <input type="search" placeholder='Encontre aqui as melhores ofertas'/>
                    <button className='btn-search'>
                        <img src={Search} alt="" />
                    </button>
                </div>
                <div className='itens'>
                    <div className='wish'>
                    <Link to='/wish'>
                        <img src={Wish} alt=""  />
                    </Link>
                        
                    </div>
                    <div className='basket'>
                        <img src={Basket} alt="" />
                    </div>
                    <div className='order'>
                        <img src={Order} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header