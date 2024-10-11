import http from '../axios/axios';

export const getAllImages = () => http.get('products')
export const getOne = (id) => http.get(`products/${id}`)
