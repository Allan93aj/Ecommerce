import React from 'react'
import '../../css/Header.css'

const MenuLeft = () => {
  return (
    <nav id='menu-left'>
        <ul>
            <li>
                <a href="/voo">Voos</a>
            </li>
            <li className='bus'>
                <a href="/onibus">Ônibus <span>Novo</span></a>
            </li>
            <li>
                <a href="/hoteis">Hotéis</a>
            </li>
            <li>
                <a href="/carros">Carros</a>
            </li>
            <li>
                <a href="/shopping">Shopping</a>
            </li>
            <li>
                <a href="/mais">Mais</a>
            </li>
        </ul>
    </nav>
  )
}

export default MenuLeft