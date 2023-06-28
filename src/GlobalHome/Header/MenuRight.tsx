import React from 'react'
import '../../css/Header.css'
import Login from './Login'

const MenuRight = () => {
  return (
    <nav id='menu-right'>
      <ul>
        <li>
            <a href="/cartao-de-credito-gol-smiles">Cartão de Crédito GOL Smiles</a>
        </li>
        <li>
            <a href="/clube-smiles">Clube Smiles</a>
        </li>
          
      </ul>
      <Login />
    </nav>
  )
}

export default MenuRight