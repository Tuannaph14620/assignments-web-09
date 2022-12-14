import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { Regis } from '../../../features/AuthSlice'
import logo from '../../../asset/img/logo.png'
const SignUp = () => {
    const notify = ()=> toast('Đăng ký thành công!')
    const {register, handleSubmit, formState: {error}} = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSubmit = data =>{
        dispatch(Regis(data))
        notify()
        setTimeout(() => {
            navigate('/signin')
        }, 2000);
    }
  return (
      
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"><ToastContainer/>
  <div className="max-w-md w-full space-y-8">
    <div>
      <img className="mx-auto h-12 w-auto" src={logo} alt="Workflow" />
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Đăng ký</h2>
      <p className="mt-2 text-center text-sm text-gray-600">
        Or
        <a href="#" className="font-medium text-gray-600 hover:text-gray-500"> Tiếp tục xem mặt hàng yêu thích </a>
      </p>
    </div>
    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)} >
      <input type="hidden" name="remember" defaultValue="true" />
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="email-address" className="sr-only">Email address</label>
          <input {...register('email', {required: true
        })} id="email" name="email" type="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
        </div>
        <div>
          <input {...register('phone')} id="phone" name="phone" type="text"  required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Phone" />
        </div>
        <div>
          <input {...register('password', {required: true})} id="password" name="password" type="password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded" />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900"> Remember me </label>
        </div>
        <div className="text-sm">
          <a href="/signin" className="font-medium text-gray-600 hover:text-gray-500"> Tôi đã có tài khoảng! <strong>Đăng nhập</strong> </a>
        </div>
      </div>
      <div>
        <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            {/* Heroicon name: solid/lock-closed */}
            <svg className="h-5 w-5 text-white group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
          </span>
          Đăng ký
        </button>
      </div>
    </form>
  </div>
</div>

  )
}

export default SignUp
