import { createSlice } from '@reduxjs/toolkit';
/*
Item Model : {
    id: string,
    name: string,
    price:number,
    discount?: number,
    quantity:number
}
*/
const INITIAL_STATE = {
    items: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        removeProduct: () => {},
    },
});

export const { removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
