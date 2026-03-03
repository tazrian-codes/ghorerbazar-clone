import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import DisplayProduct from '../../components/DisplayProduct/DisplayProduct'
import Collection from '../../components/Collection/Collection'
import Footer from '../../components/Footer/Footer'
import MobileNavBottom from '../../components/MobileNavBottom/MobileNavBottom'

const Home = () => {
  return (
    <div>
      <Header />
      <DisplayProduct />
      <Collection />
      <MobileNavBottom />
      <Footer />
    </div>
  )
}

export default Home