import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { listProducts, removeProducts } from '../../../features/productSlice'
const ProductList = () => {
    const notify = ()=> toast('Xóa thành công!')
    const product = useSelector(data => data.product.value)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(listProducts())
    }, [])

  return (
    <div className="col-lg-10 grid-margin stretch-card"> <ToastContainer/>
  <div className="card">
    <div className="card-body">
      <h4 className="card-title">Danh sách sản phẩm</h4>
      <div className="table-responsive">
        <table className="table table-striped text-left">
          <thead>
            <tr>
              <th>
                STT
              </th>
              <th>
                Tên danh mục
              </th>
              <th>
                Tên sản phẩm
              </th>
              <th>
                Giá sản phẩm
              </th>
              <th>
                Ảnh sản phẩm
              </th>
              <th>
                Ngày nhập hàng
              </th>
              <th className='text-center'>Hành động</th>
            </tr>
          </thead>
          <tbody>
              {product?.map((item, index)=> {
                  return <tr key={index}>
                  <td >
                    {index +1}
                  </td>
                  <td>
                      {item.categoryId === 1 ? "Trang phục sân nhà" : item.categoryId === 2 ? "Trang phục sân khách" :item.categoryId === 3 ? "Trang phục sân tập" : "Iconic MCS" }
                  </td>
                  <td>
                    {item.name}
                  </td>
                  <td>
                    {Number(item.price).toLocaleString('it-IT', { style: 'currency', currency: 'VND' }) }
                  </td>
                  <td>
                    <img style={{borderRadius: 0, width: '100px', height: '110px' }}  src={`${item.img}`}/>
                  </td>
                  <td>
                    {item.createdAt}
                  </td>
                  <td>
                      <NavLink className='btn btn-primary mr-2' to={`/admin/product/${item.id}/edit`}>Update</NavLink>
                      <button onClick={()=>{dispatch(removeProducts(item.id),notify())}} className='btn btn-danger'>Remove</button>
                  </td>
                </tr>
              })}
            
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

  )
}

export default ProductList