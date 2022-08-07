import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AdminLayout from './components/layout/AdminLayout';
import ClientsLayout from './components/layout/ClientsLayout';
import PrivateRouter from './components/PrivateRouter';
import AddCategory from './pages/Admin/Category/AddCategory';
import EditCategory from './pages/Admin/Category/EditCategory';
import ListCategory from './pages/Admin/Category/list';
import ListOrder from './pages/Admin/Order/ListOrder';
import ListOrderDetail from './pages/Admin/Order/ListOrderDetail';
import AddProduct from './pages/Admin/Product/AddProduct';
import EditProduct from './pages/Admin/Product/EditProduct';
import ProductList from './pages/Admin/Product/ProductList';
import SignIn from './pages/Clients/Auth/Signin';
import SignUp from './pages/Clients/Auth/Signup';
import CartPage from './pages/Clients/Cart/CartPage';
import HomePage from './pages/Clients/HomePage';
import ProductDetail from './pages/Clients/ProductDeltail';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='signin' element={<SignIn />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='/' element={<ClientsLayout />}>
          <Route index element={<HomePage />} />
          <Route path='product/:id/:cate' element={<ProductDetail/>} />
          <Route path='cart' element={<CartPage/>} />
        </Route>
        <Route path='admin' element={ <PrivateRouter><AdminLayout /></PrivateRouter> }>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path='dashboard' element={<img className='w-full' src='https://res.cloudinary.com/dl8w6p4sf/image/upload/v1649743622/9964853932064717632_hlwgiu.jpg' />} />
          <Route path='category'>
            <Route index element={<ListCategory />} />
            <Route path='add' element={<AddCategory />} />
            <Route path=':id/edit' element={<EditCategory />} />
          </Route>
          <Route path='product'>
            <Route index element={<ProductList />} />
            <Route path='add' element={<AddProduct />} />
            <Route path=':id/edit' element={<EditProduct />} />
          </Route>
          <Route path='order'>
            <Route index element={<ListOrder />} />
            <Route path=':id' element={<ListOrderDetail/>} />
          </Route>
          {/* <Route path='user'>
            <Route index element={<ListUser/>}/>
            <Route path='add' element={<AddProduct/>}/>
            <Route path=':id/edit' element={<EditProduct/>}/>
          </Route> */}
          {/* <Route path='new'>
            <Route index element={<ListNew/>}/>
            <Route path='add' element={<AddNew/>}/>
            <Route path=':id/edit' element={<EditNew/>}/>
          </Route> */}
        </Route>

      </Routes>
    </div>
  );
}

export default App;
