import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import AdminLayout from './components/layout/AdminLayout';
import ClientsLayout from './components/layout/ClientsLayout';
import PrivateRouter from './components/layout/PrivateRouter';
import AddCategory from './pages/Admin/Category/AddCategory';
import EditCategory from './pages/Admin/Category/EditCategory';
import ListCategory from './pages/Admin/Category/list';
import AddProduct from './pages/Admin/Product/AddProduct';
import EditProduct from './pages/Admin/Product/EditProduct';
import ProductList from './pages/Admin/Product/ProductList';
import Homepage from './pages/Clients/Homepage';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<ClientsLayout/>}>
          <Route index element={<Homepage/>}/>
          {/* <Route path='product'>
            <Route index  element={<ProductPage/>}/>
            <Route path=':id/:cate' element={<DetailProductPage/>} />
          </Route>
          <Route path='pro' element={<SlidebarProduct/>}/>
          <Route path='signin' element={<SignIn/>} />
          <Route path='signup' element={<SignUp/>} />
          <Route path='cart' element={<CartPage/>} />
          <Route path='new' element={<ListAllNew/>} />
          <Route path='contact' element={<ContactPage/>} /> */}
        </Route>
        <Route path='admin' element={<PrivateRouter><AdminLayout/></PrivateRouter>  }>
          <Route index element={<Navigate to="dashboard"/>}/>
          <Route path='dashboard' element={<img className='w-full' src='https://res.cloudinary.com/dl8w6p4sf/image/upload/v1649743622/9964853932064717632_hlwgiu.jpg'/>}/>
          <Route path='category'>
            <Route index element={<ListCategory/>}/>
            <Route path='add' element={<AddCategory/>}/>
            <Route path=':id/edit' element={<EditCategory/>}/>
          </Route>
          <Route path='product'>
            <Route index element={<ProductList/>}/>
            <Route path='add' element={<AddProduct/>}/>
            <Route path=':id/edit' element={<EditProduct/>}/>
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
