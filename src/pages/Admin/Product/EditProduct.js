import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { listOneProduct } from '../../../api/product';
import { listCategory } from '../../../features/categorySlice';
import { editProducts} from '../../../features/productSlice';

const EditProduct = () => {
    const [img, setImg] = useState()
    const notify = ()=> toast('Sửa thành công!')
    const {id} = useParams()
    const dispatch = useDispatch()
    const category  = useSelector(data => data.category.value)
    const product = useSelector(data => data.product.value)
    useEffect(() => {
        dispatch(listCategory())
        const getOne = async () =>{
            const {data} = await listOneProduct(id)
            console.log("data",data);
            reset(data)
            setImg(data.img)
        }
        getOne()
    }, []);
    const {register, handleSubmit, formState: {errors}, reset} = useForm()
    
    const onSubmit = data =>{
      const number= Number(data.categoryId)
      dispatch(editProducts({...data,img,categoryId:number}))
        notify()
    }
    const InputImage = async (e)=>{
      const file = e.target.files[0];
            const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dl8w6p4sf/image/upload";

            const formData = new FormData();

            formData.append("file", file);
            formData.append("upload_preset", "jovx8mjh");

            // call api cloudinary

            const response = await axios.post(CLOUDINARY_API, formData, {
                headers: {
                    "Content-Type": "application/form-data",
                },
            });
            setImg(response.data.url)
    }
  return (
    <div className="col-10 grid-margin">
  <div className="card">
    <div className="card-body">
      <h4 className="card-title">Sửa sản phẩm</h4>
      <form onSubmit={handleSubmit(onSubmit)} className="form-sample">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tên sản phẩm</label>
              <div className="col-sm-9">
                <input  type="text" {...register('name', {required: true})} className="form-control" />
                {errors.name && <span>Tên sản phẩm bắt buộc phải nhập</span>}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Giá sản phẩm</label>
              <div className="col-sm-9">
                <input  type="text" {...register('price', {required: true})} className="form-control" />
                {errors.price && <span>Giá sản phẩm bắt buộc phải nhập</span>}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
          <div className="form-group row">
              <label className="col-sm-3 col-form-label">Số lượng</label>
              <div className="col-sm-9">
                <input  type="text" {...register('quantity', {required: true})} className="form-control"  />
                {errors.quantity && <span>Số lượng sản phẩm bắt buộc phải nhập</span>}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Ngày nhập</label>
              <div className="col-sm-9">
                <input type="date" {...register('createdAt')} className="form-control" placeholder="dd/mm/yyyy" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Category</label>
              <div className="col-sm-9">
                <select {...register('categoryId', {required: true})} className="form-control">
                    {category?.map(item => {
                        if (Number(product.categoryId) === Number(item.id) ) {
                            return <option selected value={`${item.id}`}> {item.nameCate}</option>
                        }
                        return <option value={`${Number(item.id) }`}> {item.nameCate}</option>
                    })}
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Ảnh sản phẩm</label>
              <div className="col-sm-9">
                <input onChange={InputImage} type="file" className='form-control'/>
                <img src={`${product.img}`}/>
              </div>
            </div>
          </div>
          <button className='btn btn-primary mb-2 w-44'>Sửa sản phẩm </button>
        </div>
        <ToastContainer/>
      </form>
    </div>
  </div>
</div>

  )
}

export default EditProduct