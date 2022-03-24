import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Cart from './Cart/Cart';
import Error from './Error/Error';
import Shop from './Shop/Shop';
import Welcome from './Welcome/Welcome';

const Main = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout />}>
                <Route index element={<Welcome />} />             
                <Route path='cart' element={<Cart />} />
                <Route path='shop' element={<Shop />} />
                <Route path='*' element={<Error />} />
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