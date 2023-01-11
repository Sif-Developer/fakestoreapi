import React from "react";

const Product = ({ product }) => {
  return (
    <div>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
    </div>
  );
};

export default Product;
