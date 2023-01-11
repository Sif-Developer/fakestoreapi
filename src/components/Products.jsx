import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/productsSlice";

import Product from "./Product";

const Products = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const { products } = useSelector((state) => state.products);
  return (
    <div>
      <h1>Products</h1>
      {products?.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};
export default Products;
