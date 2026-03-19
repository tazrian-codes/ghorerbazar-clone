import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import DisplayProduct from "../../components/DisplayProduct/DisplayProduct";
import Collection from "../../components/Collection/Collection";
import Footer from "../../components/Footer/Footer";
import MobileNavBottom from "../../components/MobileNavBottom/MobileNavBottom";
import MsgBtn from "../../components/MsgBtn/MsgBtn";
import Navbar from "../../components/Navbar/Navbar";
import NavOpts from "../../components/NavOpts/NavOpts";
import NavProvider from "../../components/NavContext/NavContext";
import StoreContextProvider from "../../components/Context/Context";
import CartUI from "../../components/CartUI/CartUI";

const Home = () => {
  return (
    <div className="home-page">
      <StoreContextProvider>
        <NavProvider>
          <Navbar />
          <NavOpts />
          <MobileNavBottom />
          <Header />
          <DisplayProduct />
          <CartUI />
          <Collection />
          <Footer />
          <MsgBtn />
        </NavProvider>
      </StoreContextProvider>
    </div>
  );
};

export default Home;
