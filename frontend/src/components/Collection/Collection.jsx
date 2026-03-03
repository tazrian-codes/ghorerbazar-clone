import React from 'react'
import './Collection.css'
import { collection_list } from "../../assets/GhorerBazar_assets/assets";

const Collection = () => {
  return (
    <div className='collection-display'>
      <h2>COLLECTION</h2>
      <div className="collection-display-items">
        {collection_list.map((item, index) => {
          return (
            <div key={item.id} className='display-item'>
              <img src={item.image} />
              <p>{item.name}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Collection