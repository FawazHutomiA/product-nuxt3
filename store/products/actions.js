import { useProductsStore } from './index';
import axios from "axios";

export const actions = {
  async fetchProducts() {
    const store = useProductsStore();
    try {
      const { data } = await axios.get('https://my-json-server.typicode.com/FawazHutomiA/api/products');
      store.products = data;
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  },
  async fetchProductById(id) {
    const store = useProductsStore();
    try {
      const { data } = await axios.get(`https://my-json-server.typicode.com/FawazHutomiA/api/products/${id}`);
      store.selectedProduct = data;
    } catch (error) {
      console.error(`Error fetching product with ID ${id}:`, error);
    }
  },
};
