import { addProduct, deleteProduct, fethProducts, updateProduct } from '../actions/Product'
import { Dispatch, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Products = () => {
  const dispatch:Dispatch<any> =useDispatch()
  const {products} =useSelector((state:any)=>state.products)
  useEffect(()=>{
  dispatch(fethProducts())
  },[dispatch])
  return (
    <div>
    <h2>Danh sách sản phẩm</h2>
    {
      products.map((product:any)=>(
        <div key={product.id} className='product'>
         {product.name}
        </div>
      ))
    }
    <div>
    <button onClick={()=>dispatch(addProduct({name:"Product D",price:"300"}))} >Thêm</button>
    <button onClick={()=>dispatch(updateProduct({id:4,name:"Product D update",price:"400"}))} >Sửa</button>
    <button onClick={()=>dispatch(deleteProduct((4)))} >Xóa</button>
    </div>
   </div>   
  )
}

export default Products