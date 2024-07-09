import React from 'react'
import NavBar from '../components/NavBar'
import ShopCard from '../components/ShopCard'
import { Popular, Both } from '../Data'

const Shop = () => {
  return (
    <div>
      <NavBar />
      <ShopCard Popular={Popular} />
      <ShopCard Both={Both} />
    </div>
  )
}

export default Shop
