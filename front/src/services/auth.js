import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL + 'auth/';

export const login = (email, password) => axios.post(baseUrl + 'login', { email, password });
export const signup = (email, name, password) => axios.post(baseUrl + 'signup', { email, name, password });
export const loginAdmin = (email, password) => axios.post(baseUrl + process.env.REACT_APP_LOG_ADM, { email, password });
export const signupAdmin = (email, name, password) => axios.post(baseUrl + process.env.REACT_APP_SIGN_ADM, { email, name, password });

