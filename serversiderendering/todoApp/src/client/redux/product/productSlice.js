import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    products: [],
    fetchError: '',
    isFetching: '',
};

export const productsSlice = createSlice({
    name: 'products',
    initialState: INITIAL_STATE,
    reducers: {
        fetchProducts: (state) => {},
        fetchProductSuccess: (state) => {},
        fetchProductFailure: (state) => {},
    },
});

export const { fetchProducts, fetchProductSuccess, fetchProductFailure } =
    productsSlice.actions;
export default productsSlice.reducer;
