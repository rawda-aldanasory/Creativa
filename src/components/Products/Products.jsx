import React from 'react';
import './Products.css'
import Selector from '../TwoButtons/TwoButtons';

export const Product = ({ product }) => {
    const { id, img, name, description, price } = product; 

    return (
        <div>
            <div className="card-container">
              <div className="card">
                <img src={img} className="card-img-top" alt={name} />
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">{description}</p>
                  <p className="card-text">${price}</p>
                  <Selector />
                  <a href="#" className="btn">Add to cart</a>
                </div>
              </div>
            </div>            
        </div>
    );
}