import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from '../features/AuthSlice';
import CartSlice from '../features/CartSlice';
import categorySlice from '../features/categorySlice';
import ProductSlice from '../features/ProductSlice';

export const store = configureStore({
  reducer: {
    product: ProductSlice,
    category: categorySlice,
    auth: AuthSlice,
    cart: CartSlice
  },
});
