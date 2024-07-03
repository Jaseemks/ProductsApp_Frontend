import axios from "axios";

const BASE_URL = 'http://localhost:4528'
const token = `Bear ${localStorage.getItem('product token')};`

export const login = async (data)=>{
    try {
       const response = await axios.post(`${BASE_URL}/users/login`,data);
       return response.data
    } catch (error) {
        throw error
    }
}

export const addProduct = async (data)=>{
    try {
    //    const response = await axios.post(`${BASE_URL}/product`,{"Content-Type":"multipart/form-data"},data);
            const response = await axios.post(`${BASE_URL}/product`,data,{
                headers: {Authorization:token}
            });
       return response.data
    } catch (error) {
        throw error
    }
}


export const getProducts = async ()=>{
    try {

            const response = await axios.get(`${BASE_URL}/product`);
       return response.data
    } catch (error) {
        throw error
    }
}

export const deleteProduct = async (id)=>{
    try {
         console.log(id);
            const response = await axios.delete(`${BASE_URL}/product/${id}`);
       return response.data;
    } catch (error) {
        throw error;
    }
}


export const updateProduct = async (id,data)=>{
    try {
    //    const response = await axios.post(`${BASE_URL}/product`,{"Content-Type":"multipart/form-data"},data);
            const response = await axios.put(`${BASE_URL}/product/${id}`,data);
       return response.data
    } catch (error) {
        throw error
    }
}


export const getProductsById = async (id,data)=>{
    try {

            const response = await axios.get(`${BASE_URL}/product/${id}`,data);
            // let res = await axios.get(/api/products/${id});
       return response.data;
    } catch (error) {
        throw error
    }
}