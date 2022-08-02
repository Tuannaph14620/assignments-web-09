import { configureStore } from '@reduxjs/toolkit';
import categorySlice from '../features/categorySlice';
import ProductSlice from '../features/ProductSlice';

export const store = configureStore({
  reducer: {
    product: ProductSlice,
    category: categorySlice
  },
});
