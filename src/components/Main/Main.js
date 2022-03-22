import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Cart from './Cart';
import Error from './Error';
import Shop from './Shop';
import Welcome from './Welcome';

const Main = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Welcome />} />
            </Route>

            <Route path='/cart' element={<Layout />}>
                <Route index element={<Cart />} />
            </Route>

            <Route path='/shop' element={<Layout />}>
                <Route index element={<Shop />} />
            </Route>

            <Route path='*' element={<Error />} />
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