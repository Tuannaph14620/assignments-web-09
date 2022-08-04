import { data } from 'autoprefixer'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { decreaseQty, increaseQty, removeItemInCart } from '../../../features/CartSlice'

const CartPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const notify = ()=> toast('Bạn đã đặt hàng thành công! Chúng tôi sẽ liên hệ lại sớm nhất với bạn để xác nhận đơn hàng!')
    const cart = useSelector(data => data.cart.value)
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])
    let totalProducts = 0
    cart?.forEach(item => {
        totalProducts += Number(item.price) * Number(item.quantity)
    })
    const createdAt = new Date()
console.log(cart);
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = data => {
        
        // dispatch(AddOrders({...data, cart, createdAt: createdAt}))
        notify()
        setTimeout(() => {
            navigate('/product')
        }, 4000);
    }
    return (
        <div>
            <main className="ml"> <ToastContainer />
                <div className="flex justify-between px-14">
                    <div className="boxleft1">
                        <div className="max-w-full flex">
                            <div className="w-screen max-w-md">
                                <div className="h-full flex flex-col bg-white">
                                    <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                                        <div className="flex items-start justify-between">
                                            <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Giỏ hàng của bạn</h2>
                                        </div>
                                        <div className="mt-8">
                                            <div className="flow-root">
                                                <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                    {cart?.map((item, index) => {
                                                        return <li key={index} className="py-6 flex">
                                                            <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                                                <img src={`${item.img}`} alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="w-full h-full object-center object-cover" />
                                                            </div>
                                                            <div className="ml-4 flex-1 flex flex-col">
                                                                <div>
                                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                                        <h3>
                                                                            <a href="#"> {item.name} </a>
                                                                        </h3>
                                                                        <p className="ml-4">{(Number(item.price) * Number(item.quantity)).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="flex-1 flex items-end justify-between text-sm">
                                                                    <p className="text-gray-500">Quantity: {item.quantity}</p>
                                                                    <button onClick={() => dispatch(increaseQty(item.productId))} className="btn btn-increase border-2 p-1  text-black">+</button>
                                                                    <button onClick={() => dispatch(decreaseQty(item.productId))} className="btn btn-decrease border-2 p-1  text-black">-</button>
                                                                    <div className="flex">
                                                                        <button onClick={() => dispatch(removeItemInCart(item.productId))} type="button" className="btn font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                                                    </div>
                                                                </div>
                                                                <div className='flex items-end justify-between text-sm' >
                                                                    <p>Size: {item.size}</p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    })}


                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                            <p>Thanh toán</p>
                                            <p>{totalProducts.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</p>
                                        </div>
                                        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                        <div className="mt-6 flex justify-center text-sm text-center text-gray-500">\
                                            <a href="/product">
                                                <p>
                                                    or <button type="button" className="text-indigo-600 font-medium hover:text-indigo-500">Continue Shopping<span aria-hidden="true"> →</span></button>
                                                </p>
                                            </a><a>
                                            </a></div><a>
                                        </a></div><a>
                                    </a></div><a>
                                </a></div><a>
                            </a></div><a>
                        </a></div><a>
                        <div className="mt-6">
                            <div className="mt-10 sm:mt-0">
                                <div className="md:grid md:grid-cols-3 md:gap-6">
                                    <div className="md:mt-0 md:col-span-3">
                                        <div className="md:col-span-1">
                                            <div className="px-4 sm:px-0">
                                                <h3 className="text-lg font-medium leading-6 text-gray-900">Thông tin cá nhận</h3>
                                                <p className="mt-1 text-sm text-gray-600">Điền thông tin cá nhân để nhận hàng</p>
                                            </div>
                                        </div>
                                        <form onSubmit={handleSubmit(onSubmit)} >
                                            <div className="shadow overflow-hidden sm:rounded-md mt-2">
                                                <div className="px-4 py-5 bg-white sm:p-6">
                                                    <div className="grid grid-cols-6 gap-6">
                                                        <div className="col-span-6 sm:col-span-3">
                                                            <label htmlFor="first-name" className="block text-left text-sm font-medium text-gray-700">Tên</label>
                                                            <input type="text" {...register('firstName', { required: true })} name="firstName" id="firstName" autoComplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-1 py-1 border-gray-300 rounded-md" />
                                                            {errors.firstName && <span className='text-red-500 text-left text-sm'>*Tên bắt buộc phải nhập</span>}
                                                        </div>
                                                        <div className="col-span-6 sm:col-span-3">
                                                            <label htmlFor="last-name" className="block text-left text-sm font-medium text-gray-700">Họ đệm</label>
                                                            <input type="text" {...register('lastName', { required: true })} name="lastName" id="lastName" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-1 py-1 border-gray-300 rounded-md" />
                                                            {errors.lastName && <span className='text-red-500 text-left text-sm'>*Họ đệm bắt buộc phải nhập</span>}
                                                        </div>
                                                        <div className="col-span-6 sm:col-span-3">
                                                            <label htmlFor="email-address" className="block text-left text-sm font-medium text-gray-700">Email </label>
                                                            <input type="text" {...register('email')} name="email" id="email" autoComplete="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-1 py-1 border-gray-300 rounded-md" />
                                                            
                                                        </div>
                                                        <div className="col-span-6 sm:col-span-3">
                                                            <label htmlFor="email-address" className="block text-left text-sm font-medium text-gray-700">Số điện thoại</label>
                                                            <input type="text" {...register('phone', { required: true })} name="phone" id="phone" autoComplete="phone" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-1 py-1 border-gray-300 rounded-md" />
                                                            {errors.phone && <span className='text-red-500 text-left text-sm'>*Số điện thoại bắt buộc phải nhập</span>}
                                                        </div>
                                                        <div className="col-span-6">
                                                            <label htmlFor="street-address" className="block text-left text-sm font-medium text-gray-700">Địa chỉ cụ thể</label>
                                                            <input type="text" {...register('address', { required: true })} name="address" id="address" autoComplete="street-address" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-1 py-1 border-gray-300 rounded-md" />
                                                            {errors.address && <span className='text-red-500 text-left text-sm'>*Địa chỉ bắt buộc phải nhập</span>}
                                                        </div>
                                                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                            <label htmlFor="city" className="block text-left text-sm font-medium text-gray-700">Thành phố, tỉnh</label>
                                                            <input type="text" {...register('city', { required: true })} name="city" id="city" autoComplete="address-level2" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-1 py-1 border-gray-300 rounded-md" />
                                                            {errors.city && <span className='text-red-500 text-left text-sm'>*Thành phố bắt buộc phải nhập</span>}
                                                        </div>
                                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                            <label htmlFor="region" className="block text-left text-sm font-medium text-gray-700">Quận, huyện</label>
                                                            <input type="text" {...register('district', { required: true })} name="district" id="district" autoComplete="address-level1" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-1 py-1 border-gray-300 rounded-md" />
                                                            {errors.district && <span className='text-red-500 text-sm'>*Quận, huyện bắt buộc phải nhập</span>}
                                                        </div>
                                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                            <label htmlFor="postal-code" className="block text-left text-sm font-medium text-gray-700">ZIP / Postal code</label>
                                                            <input type="text" {...register('code')} name="postal-code" id="postal-code" autoComplete="postal-code" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-1 py-1 border-gray-300 " />
                                                        </div>
                                                        <div className="col-span-6  lg:col-span-2 sm:col-span-3">
                                                            <input {...register('ptgh', {required: true})} type="checkbox" className='rounded-full' id="ptgh" defaultValue={0} />
                                                            <label className='text-left'>Standard Express <br /><span style={{ fontSize: 13, color: 'gray' }}>Nhận hàng trong vòng 5 ngày, đổi trả miễn phí</span></label>
                                                            {errors.ptgh && <span className='text-red-500 text-sm'>*Tên bắt buộc phải nhập</span>}
                                                        </div>
                                                        <div className="col-span-6 lg:col-span-2 sm:col-span-3">
                                                            <input {...register('ptgh', {required: true})} type="checkbox" id="ptgh" defaultValue={1} />
                                                            <label className='text-left'>J&amp;T Express <br /><span style={{ fontSize: 13, color: 'gray' }}>Nhận hàng trong vòng 3 ngày,đổi trả miễn phí</span></label>
                                                           
                                                        </div>
                                                    </div>
                                                    <div className="mt-3">
                                                       
                                                        <button className="btn_checkout flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">Comfirm</button>
                                                      
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a></div><a>
                </a></main><a>
            </a></div>

    )
}

export default CartPage