import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Welcome from './Welcome';

const Cart = React.lazy(() => import('./Cart'));
const Error = React.lazy(() => import('./Error'));
const Shop = React.lazy(() => import('./Shop'));

const Main = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Welcome />} />
                <Route 
                    path='cart'
                    element={
                        <React.Suspense fallback={<>...</>}>
                            <Cart />
                        </React.Suspense>
                    }
                />
                <Route 
                    path='shop'
                    element={
                        <React.Suspense fallback={<>...</>}>
                            <Shop />
                        </React.Suspense>
                    }
                />
                <Route 
                    path='*'
                    element={
                        <React.Suspense fallback={<>...</>}>
                            <Error />
                        </React.Suspense>
                    }
                />
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