import axios from 'axios'

const http = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

http.interceptors.request.use((config) => {
    const token = window.localStorage.getItem('TOKEN')
    if (token && config.headers) {
        config.headers.authorization = `Bearer ${token}`;
    }
    return config
}, error => {
    return Promise.reject(error)
})


export default http