import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import DisplayProduct from '../../components/DisplayProduct/DisplayProduct'
import Collection from '../../components/Collection/Collection'
import Footer from '../../components/Footer/Footer'
import MobileNavBottom from '../../components/MobileNavBottom/MobileNavBottom'
import MsgBtn from '../../components/MsgBtn/MsgBtn'
import Navbar from '../../components/Navbar/Navbar'

const Home = () => {
  return (
    <div className='home-page'>
      <Navbar />
      <MobileNavBottom />
      <Header />
      <DisplayProduct />
      <Collection />
      <Footer />
      <MsgBtn />
    </div>
  )
}

export default Home