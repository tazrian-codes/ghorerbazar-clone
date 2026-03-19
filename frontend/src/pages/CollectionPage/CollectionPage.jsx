import React, { useContext, useRef, useState } from "react";
import "./CollectionPage.css";
import { food_list } from "../../assets/GhorerBazar_assets/assets";
import { NavLink, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import ProductCard from "../../components/ProductCard/ProductCard";
import NavProvider from "../../components/NavContext/NavContext";
import Footer from "../../components/Footer/Footer";
import NavOpts from "../../components/NavOpts/NavOpts";
import StoreContextProvider, { StoreContext } from "../../components/Context/Context";
import CartUI from "../../components/CartUI/CartUI";

const CollectionPage = () => {
  const { category } = useParams();
  const { cartItems, setCartItems, addToCart, removeFromCart, removeAtOnce } = useContext(StoreContext);

  const [sortType, setSortType] = useState("featured");
  const [columns, setColumns] = useState(4);
  const [boxOpen, setBoxOpen] = useState(false);
  const [inStock, setInStock] = useState(false);
  const [outOfStock, setOutOfStock] = useState(false);
  const [price, setPrice] = useState(2565);
  const [collectionOpen, setCollectionOpen] = useState(true);
  const [availabilityOpen, setAvailabilityOpen] = useState(true);
  const [sortOpen, setSortOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);

  const opts = [
    {label:'Featured', value: 'fea'},
    {label:'Best selling', value: 'bs'},
    {label:'Alphabetically, A-Z', value: 'az'},
    {label:'Alphabetically, Z-A', value: 'za'},
    {label:'Price, low to high', value: 'lh'},
    {label:'Price, high to low', value: 'hl'},
    {label:'Date, old to new', value: 'on'},
    {label:'Date, new to old', value: 'no'}
  ]

  const categories = [
    { name: "OFFER ZONE", slug: "offer-zone" },
    { name: "Best Seller", slug: "best-seller" },
    { name: "Oil", slug: "oil" },
    { name: "Ghee (ঘি)", slug: "ghee" },
    { name: "Dates (খেজুর)", slug: "dates" },
    { name: "খেজুর গুড়", slug: "khejur-gur" },
    { name: "Honey", slug: "honey" },
    { name: "Masala", slug: "masala" },
    { name: "Nuts & Seeds", slug: "nuts-seeds" },
    { name: "Tea/Coffee", slug: "tea-coffee" },
    { name: "Honeycomb", slug: "honeycomb" },
    { name: "Organic Zone", slug: "organic-zone" },
    { name: "Pickle", slug: "pickle" }
];

  let selectedCategory = categories.find(cat => cat.slug === category);

  let selectedSort = opts.find(opt => opt.value === sortType);

  let items = [...food_list]
  
  // category filter
  if (selectedCategory) {
    items = items.filter(item => item.category === selectedCategory.name);
  }

  // stock filter
  items = items.filter((item) => item.stock > 0)

  // sort items
  if (sortType === "az") {
    items.sort((a, b) => a.name.localeCompare(b.name));
  }
  if (sortType === "za") {
    items.sort((a, b) => b.name.localeCompare(a.name));
  }
  if (sortType === "lh") {
    items.sort((a, b) => a.price - b.price);
  }
  if (sortType === "hl") {
    items.sort((a, b) => b.price - a.price);
  }

  
  return (
    
    <div className="collection-page">
      <NavProvider>
      <StoreContextProvider>
        <Navbar />
        <NavOpts />
      
      
        <CartUI />
      
      <div onClick={() => setSortOpen(false)} className={`${sortOpen ? 'sort-overlay' : 'hide-sort-overlay'}`}>
              <div onClick={(e) => e.stopPropagation()} className={`${sortOpen ? 'sort-body' : ''}`}>
                <div className="sort-body-top">
                  <span>Sort by</span>
                  <span>X</span>
                </div>
                {sortOpen && (
                  <ul>
                    {opts.map((opt, index) => {
                      return (<li key={index} onClick={() => {setSortType(opt.value); setSortOpen(false)}} className={`${sortType === opt.value ? 'sort-active' : ''}`}>{opt.label}</li>)
                    })}
                  </ul>
                )}
              </div>
            </div>
          <div onClick={() => setFilterOpen(false)} className={`filter-wrapper ${filterOpen ? 'filter-wrapper-show' : 'filter-wrapper-hide'}`}>
            <div onClick={(e) => e.stopPropagation()} className={`filter-grid left-grid ${filterOpen ? 'filter-grid-show' : ''}`}>
            <div className="filter-grid-top">
              <span>Filters</span>
              <span  onClick={() => setFilterOpen(false)}>x</span>
            </div>
            <div
              className="filter-collection-div"
              onClick={() => setCollectionOpen(!collectionOpen)}
            >
              <h5>Collections</h5>
              <img
                className="arrow"
                src={`${collectionOpen ? "/src/assets/GhorerBazar_assets/up-arrow-5-svgrepo-com.png" : "/src/assets/GhorerBazar_assets/down-arrow-5-svgrepo-com.png"}`}
              />
            </div>

            <ul className={`${collectionOpen ? "show-div" : "hide-div"}`}>
              {categories.map((cat, index) => (
                <li key={index} onClick={() => setFilterOpen(false)}>
                  <NavLink to={`/collection/${cat.slug}`}
                  className={({isActive}) => `collection-link ${isActive ? "filter-active" : ""}`}>
                    {cat.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div
              className="filter-availability-div"
              onClick={() => setAvailabilityOpen(!availabilityOpen)}
            >
              <h5>Availability</h5>
              <img
                className="arrow"
                src={`${availabilityOpen ? "/src/assets/GhorerBazar_assets/up-arrow-5-svgrepo-com.png" : "/src/assets/GhorerBazar_assets/down-arrow-5-svgrepo-com.png"}`}
              />
            </div>
            <label className={`${availabilityOpen ? "label-div" : "hide-div"}`}>
              <input
                type="checkbox"
                checked={inStock}
                onChange={() => setInStock(!inStock)}
              />
              In stock
            </label>

            <label className={`${availabilityOpen ? "label-div" : "hide-div"}`}>
              <input
                type="checkbox"
                checked={inStock}
                onChange={() => setOutOfStock(!outOfStock)}
              />
              Out of stock
            </label>

            {/* <h5>Price</h5>
        <input type="range" min='0' max='2565' value={price} onChange={(e) => setPrice(e.target.value)} /> */}
          </div>
           </div>
      <div className="collection-div">
        <div className="heading">{selectedCategory?.name || 'All Products'}</div>
        <div className="lg-screen-layout">
          <div className="left-grid">
            <h3>Filters</h3>
            <div
              className="filter-collection-div"
              onClick={() => setCollectionOpen(!collectionOpen)}
            >
              <h5>Collections</h5>
              <img
                className="arrow"
                src={`${collectionOpen ? "/src/assets/GhorerBazar_assets/up-arrow-5-svgrepo-com.png" : "/src/assets/GhorerBazar_assets/down-arrow-5-svgrepo-com.png"}`}
              />
            </div>

            <ul className={`${collectionOpen ? "show-div" : "hide-div"}`}>
              {categories.map((cat, index) => (
                <li key={index} onClick={() => setFilterOpen(false)}>
                  <NavLink to={`/collection/${cat.slug}`}
                  className={({isActive}) => `collection-link ${isActive ? "filter-active" : ""}`}>
                    {cat.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div
              className="filter-availability-div"
              onClick={() => setAvailabilityOpen(!availabilityOpen)}
            >
              <h5>Availability</h5>
              <img
                className="arrow"
                src={`${availabilityOpen ? "/src/assets/GhorerBazar_assets/up-arrow-5-svgrepo-com.png" : "/src/assets/GhorerBazar_assets/down-arrow-5-svgrepo-com.png"}`}
              />
            </div>
            <label className={`${availabilityOpen ? "label-div" : "hide-div"}`}>
              <input
                type="checkbox"
                checked={inStock}
                onChange={() => setInStock(!inStock)}
              />
              In stock
            </label>

            <label className={`${availabilityOpen ? "label-div" : "hide-div"}`}>
              <input
                type="checkbox"
                checked={inStock}
                onChange={() => setOutOfStock(!outOfStock)}
              />
              Out of stock
            </label>

            {/* <h5>Price</h5>
        <input type="range" min='0' max='2565' value={price} onChange={(e) => setPrice(e.target.value)} /> */}
          </div>
          <div className="right-grid">
            <div className="right-grid-options">
              <div className="right-grid-options-left">
                <div className="featured"
                onClick={() => setBoxOpen(!boxOpen)}>
                  <div>{selectedSort?.label || 'Sort'} <img src={`${boxOpen ? "/src/assets/GhorerBazar_assets/up-arrow-5-svgrepo-com.png" : "/src/assets/GhorerBazar_assets/down-arrow-5-svgrepo-com.png"}`}/></div>
                </div>
                {boxOpen && (
                  <ul>
                    {opts.map((opt, index) => {
                      return (<li key={index} onClick={() => {setSortType(opt.value); setBoxOpen(false)}} className={sortType === opt.value ? 'sort-active' : ''}>{opt.label}</li>)
                    })}
                  </ul>
                )}
              </div>
              <div className="right-grid-options-right">
                <span onClick={() => setColumns(1)} className={`${columns === 1  ? 'col-active' : ''}`}>☰</span>
                <span onClick={() => setColumns(2)} className={`${columns === 2  ? 'col-active' : ''}`}>||</span>
                <span onClick={() => setColumns(3)} className={`${columns === 3  ? 'col-active' : ''}`}>|||</span>
                <span onClick={() => setColumns(4)} className={`${columns === 4  ? 'col-active' : ''}`}>||||</span>
                <span onClick={() => setColumns(5)} className={`${columns === 5  ? 'col-active' : ''}`}>|||||</span>
              </div>
            </div>
            <div className={`item-grid col-${columns}`} style={{gridTemplateColumns: `repeat(${columns},1fr)`}}>
              {items.map((item, index) => {
                return <ProductCard key={item._id} item={item} />
              })}
            </div>
          </div>
        </div>
        
        <div className="sm-screen-layout">
          <div className="sm-screen-layout-top">

            <div className="sm-screen-layout-top-left">
              <div onClick={() => setFilterOpen(true)} className="filter-div">
            <span>Filter</span>
            <img className="arrow" src={`${boxOpen ? "/src/assets/GhorerBazar_assets/up-arrow-5-svgrepo-com.png" : "/src/assets/GhorerBazar_assets/down-arrow-5-svgrepo-com.png"}`} />
          </div>
          <div className="featured-div">
            <div className="right-grid-options-left">
                <div className="featured"
                onClick={() => setSortOpen(!sortOpen)}>
                  <div>{selectedSort?.label || 'Sort'} <img src={`${sortOpen ? "/src/assets/GhorerBazar_assets/up-arrow-5-svgrepo-com.png" : "/src/assets/GhorerBazar_assets/down-arrow-5-svgrepo-com.png"}`}/></div>
                </div>
              </div>
          </div>
            </div>

          <div className="sm-screen-layout-top-right">
              <span className={`${columns === 1  ? 'col-active' : ''}`} onClick={() => setColumns(1)}>☰</span>
                <span className={`${columns === 2  ? 'col-active' : ''}`} onClick={() => setColumns(2)}>||</span>
                <span className={`col-3 ${columns === 3  ? 'col-active' : ''}`} onClick={() => setColumns(3)}>|||</span>
                <span className={`col-4 ${columns === 4  ? 'col-active' : ''}`} onClick={() => setColumns(4)}>||||</span>
          </div>
          </div>
          <div className={`item-grid col-${columns}`} style={{gridTemplateColumns: `repeat(${columns},1fr)`}}>
              {items.map((item, index) => {
                return <ProductCard key={item._id} item={item} />
              })}
            </div>
        </div>
      </div>
      <Footer />
      </StoreContextProvider>
      </NavProvider>
    </div>
  );
};

export default CollectionPage;
