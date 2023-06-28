import React from 'react'
import { getItem, setItem } from '../../../services/LocalStorage'
import {MdOutlineFavorite } from 'react-icons/md'
import Header from '../Header'

const Wish = () => {
    const [data, setData] = React.useState(getItem('Carrinho') || [])

    const removeItem = (obj) => {
        const arrFilter = data.filter((e) => e.id !== obj.id)
        setData(arrFilter)
        setItem('Carrinho', arrFilter)
    }

  return (
    <div>
        <Header />
        <div>
            {
                data.map((e) => (
                    <div key={e.id}>
                        <img src={e.thumbnail} alt="" />
                        <h4>{e.title}</h4>
                        <h4>{e.price}</h4>
                        <button onClick={() => removeItem(e)}><MdOutlineFavorite/></button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Wish