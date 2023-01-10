import axios from "axios";

const API_URL = 'https://fakestoreapi.com';

const productsService = {
  getAllProducts: async () => {
    try {
      const res = await axios.get(API_URL + '/products');
      return res.data;
    } catch (error) {
      throw error;
    }
  }
};

export default productsService;