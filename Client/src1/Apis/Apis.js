import axios from "axios";

export const Dummyjson =  axios.create({
    baseURL : "https://dummyjson.com/products"
});

export const server = axios.create({
    // baseURL : "http://localhost:4000/api"  
      baseURL : "http://192.168.0.100:4000/api"  
})

