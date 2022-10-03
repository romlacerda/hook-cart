import axios, { AxiosResponse } from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333',
});

interface Product {
  id: string;
}

export function getProducts() { 
  return api.get<Product[]>('/products').then(response => console.log(response))
};