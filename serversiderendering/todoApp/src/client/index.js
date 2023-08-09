import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { routes } from './routes';
import { Provider } from 'react-redux';
import cartReducer from './redux/cart/cartSlice';
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './redux/product/productSlice';

const initialState = window.__PRELOADED_STATE__;
const reduxStore = configureStore({
    reducer: {
        cart: cartReducer,
        products: productReducer,
    },
    preloadedState: initialState,
});

const App = () => {
    return (
        <Provider store={reduxStore}>
            <BrowserRouter>
                <Routes>
                    {routes.map((route) => (
                        <Route
                            path={route.path}
                            key={route.path}
                            element={route.element}
                        />
                    ))}
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};
hydrateRoot(document.getElementById('app'), <App />);
