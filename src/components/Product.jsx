import React from "react";
import './Product/Product.css'

const Product = ({ product }) => {
  return (
    <div className="product-container">
      <span className="product-box">
        <img src={product.image} alt={product.title} />
        <h3>Title: {product.title}</h3>
        <p>Description: {product.description}</p>
        <p className="product-price">Price: {product.price}</p>
      </span>
    </div>
  );
};

export default Product;

