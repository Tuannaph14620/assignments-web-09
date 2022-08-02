
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { listCategory, removeCategory } from '../../../features/categorySlice'
const ListCategory = () => {
  
  const category = useSelector(data => data.category.value)
  const dispatch = useDispatch()
  const notify = ()=> toast("Xóa thành công!")
  useEffect(() => {
  dispatch(listCategory())
  }, []);


  return (
    <div className="col-lg-10 grid-margin stretch-card">
  <div className="card">
    <div className="card-body">
      <h4 className="card-title">Danh sách danh mục sản phẩm</h4>
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên danh mục</th>
              <th>Hành động</th>
              
            </tr>
          </thead>
          <tbody>
            {    category?.map((item, index)=>{
              return <tr key={index} >
              <td> {index +1}</td>
              <td>{item.nameCate}</td>
              <td>
              <ToastContainer/>
                <button className='btn btn-danger' onClick={()=>dispatch(removeCategory(item.id), notify())}>Remove</button>
                
                <NavLink className='btn btn-primary mr-2' to={`/admin/category/${item.id}/edit`}>Update</NavLink>
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

export default ListCategory