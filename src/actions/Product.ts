
import { instance } from "../axios/config"

export const fethProducts=()=>async(dispatch:any)=>{
  const data=await instance.get(`/products`);
  dispatch({type:'product/getProducts', payload:data})
}
export const addProduct=(product:any)=>async(dispatch:any)=>{
    const data=await instance.post(`/products`,product);
    dispatch({type:'product/addProduct', payload:data})
  }
export const updateProduct=(product:any)=>async(dispatch:any)=>{
    const data=await instance.patch(`/products/${product.id}`,product);
    dispatch({type:'product/updateProduct', payload:data})
  }
export const deleteProduct=(id:any)=>async(dispatch:any)=>{
    await instance.delete(`/products/${id}`);
    dispatch({type:'product/deleteProduct', payload:id})
  }