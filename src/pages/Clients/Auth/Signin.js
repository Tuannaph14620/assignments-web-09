import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch,  } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Login } from '../../../features/AuthSlice'
import logo from '../../../asset/img/logo.png'
const SignIn = () => {
    const {register, handleSubmit} = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onSubmit = data=>{
      dispatch(Login(data))
      navigate('/admin')

    }
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"> <ToastContainer/>
  <div className="max-w-md w-full space-y-8">
    <div>
      <img className="mx-auto h-12 w-auto" src={logo} alt="Workflow" />
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Đăng nhập</h2>
      <p className="mt-2 text-center text-sm text-gray-600">
        Hoặc
        <a href="/product" className="font-medium text-gray-500 hover:text-gray-500"> Tiếp tục xem mặt hàng yêu thích </a>
      </p>
    </div>
    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)} >
      <input type="hidden" name="remember" defaultValue="true" />
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="email-address" className="sr-only">Email address</label>
          <input {...register('email', {required: true})} id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm" placeholder="Email address" />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">Password</label>
          <input {...register('password', {required: true})} id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm" placeholder="Password" />
        </div>
      </div>
      <div className='text-left'><a href="/signup" className="text-sm text-gray-500 hover:text-gray-500"> Tôi chưa có tài khoảng! <strong>Đăng ký</strong> </a></div>
      <div>
        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            {/* Heroicon name: solid/lock-closed */}
            <svg className="h-5 w-5 text-red-500 group-hover:text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
          </span>
          Đăng nhập
        </button>
      </div>
    </form>
  </div>
</div>

  )
}

export default SignIn