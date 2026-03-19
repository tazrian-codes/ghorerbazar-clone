import React from 'react'
import './Collection.css'
import { collection_list } from "../../assets/GhorerBazar_assets/assets";
import { Link } from 'react-router-dom';

const Collection = () => {
  return (
    <div className='collection-display'>
      <h2>COLLECTION</h2>
      <div className="collection-display-items">
        {collection_list.map((item, index) => {
          return (
            <Link to={`/collection/${item.name.split(' ').join('-').toLowerCase()}`} key={item.id} className='display-item'>
              <img src={item.image} />
              <p>{item.name}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Collection