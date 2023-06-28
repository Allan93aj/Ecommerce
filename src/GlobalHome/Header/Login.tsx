import React from 'react'
import '../../css/Header.css'
import Profile from "./../../../public/imgs/Profile.png"

const Login = () => {
  return (
    <button>
        <img src={Profile} alt="" />
        Entrar
    </button>
  )
}

export default Login