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





const HomeDesktop = () => {

    return (
      <div>
          <Header />
          <Banner />
          <ShelfIcons />
          <ShelfCards />
          <ShelfCards2 />
          <ShelfCards3 />
      </div>
    )
}

export default HomeDesktop

