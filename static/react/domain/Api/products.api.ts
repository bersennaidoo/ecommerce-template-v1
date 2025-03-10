import api from './api';
import { Product } from '../Models/Product';

const URLS = {
  fetchProductsUrl: 'heroes',
};


export const fetchProducts = () => {
  return api.get<Product[]>(URLS.fetchProductsUrl, {
    baseURL: '/api/',
  });
};

export const fetchProduct = (id: string | undefined) => {
  return api.get<Product>(`/heroes/${id}`, {
    baseURL: '/api/',
  });
};