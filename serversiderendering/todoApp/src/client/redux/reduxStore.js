import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/cartSlice';
import productsReducer from './product/productSlice';
const reduxStore = configureStore({
    reducer: {
        cart: cartReducer,
        products: productsReducer,
    },
});
export default reduxStore;
