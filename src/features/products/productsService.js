import axios from "axios";

const API_URL = "https://fakestoreapi.com";

const getAllProducts = async () => {
  const res = await axios.get(API_URL + "/products?limit=5");
  return res.data;
};
const productsService = {
  getAllProducts,
};
export default productsService;
