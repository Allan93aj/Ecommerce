import React from 'react'
import { Component } from "react";
import {useEffect} from 'react'
import './css/ShelfCards.css'
import Slider from "react-slick";
import {MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md'
import { getItem, setItem } from './services/LocalStorage'
import {Link} from 'react-router-dom'
import Header from './GlobalHome/Header/Header'
import Banner from './GlobalHome/Banner/Banner'
import ShelfIcons from './GlobalHome/Shelficons/Shelficons'
import ShelfCards from './GlobalHome/ShelfCards/ShelfCards';
import ShelfCards2 from './GlobalHome/ShelfCards/ShelfCards2'
import ShelfCards3 from './GlobalHome/ShelfCards/ShelfCards3'
import ShelfCards4 from './GlobalHome/ShelfCards/ShelfCards4'
import ShelfCards5 from './GlobalHome/ShelfCards/ShelfCards5'
import ShelfCards6 from './GlobalHome/ShelfCards/ShelfCards6'


const HomeDesktop = () => {

    return (
      <div>
          <Header />
          <Banner />
          <ShelfIcons />
          <ShelfCards />
          <ShelfCards2 />
          <ShelfCards3 />
          <ShelfCards4 />
          <ShelfCards5 />
          <ShelfCards6 />
      </div>
    )
}

export default HomeDesktop

