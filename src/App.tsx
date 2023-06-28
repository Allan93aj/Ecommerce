import React from 'react'
import {Switch, Route} from "react-router-dom"
import HomeDesktop from './HomeDesktop'
import Wish from './GlobalHome/Header/wish/Wish'
import Smartphones from './pages/Smartphones'
import Eletrodomesticos from './pages/Eletrodomesticos'
import Eletroportateis from './pages/Eletroportateis'
import Tvevideo from './pages/Tvevideo'
import Informatica from './pages/Informatica'
import Modaeacessorios from './pages/Modaeacessorios'

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={ HomeDesktop } />
      <Route exact path='/wish' component={ Wish } />
      <Route exact path='/smartphones' component={ Smartphones } />
      <Route exact path='/eletrodomesticos' component={ Eletrodomesticos } />
      <Route exact path='/eletroportateis' component={ Eletroportateis } />
      <Route exact path='/tvevideo' component={ Tvevideo } />
      <Route exact path='/informatica' component={ Informatica } />
      <Route exact path='/modaeacessorios' component={ Modaeacessorios } />
    </Switch>
  )
}

export default App