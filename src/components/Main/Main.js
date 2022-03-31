import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Cart from './Cart/Cart';
import Error from './Error/Error';
import Product from './Product/Product'
import Shop from './Shop/Shop';
import Welcome from './Welcome/Welcome';
import '../../styles/Main/Main.css';

const Main = ({ cartItems, setCartItems }) => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout />}>
                <Route index element={<Welcome />} />             
                <Route path='cart' element={<Cart />} />
                <Route path='shop' element={<Shop />} />
                <Route path='*' element={<Error />} />
            </Route>

            <Route path='/shop' element={<Layout />}>
                <Route path=':id' element={<Product cartItems={cartItems} setCartItems={setCartItems} />} />    
            </Route>  
        </Routes>
    );
};

const Layout = () => {
    return (
        <main>
            <Outlet />
        </main>
    );
}

export default Main;