import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';
import Products from './products/productsInformation';
import './styles/App.css';

const App = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    cart.forEach(product => {
      if (product.quantity === 0) {
        let filterCart = cart.filter(product => product.quantity > 0);
        setCart(filterCart);
      }
    })

    console.log(cart);
  }, [cart]);

  function addToCart(id) {
    Products.forEach(product => {
      if (product.id === id) {
        if (cart.some(item => item.id === id)) {
          let updateProduct = cart.map(item => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity + 1 };
            }
            return item;
          });

          setCart(updateProduct);
        } else {
          product.quantity = 1;

          setCart(prevState => {
            return [...prevState, product];
          });
        }
      }
    })
  }

  function productQuantityChange(id, value) {
    let updateCart = cart.map(product => {
      if (product.id === id) {
        return { ...product, quantity: value };
      }
      return product;
    });

    setCart(updateCart);
  }

  return (
    <Router>
      <div className='App'>
        <Navbar cartQuantity={cart.length} />
        <Switch>
          <Route exact path='/shopping-cart/'>
            <Home />
          </Route>
          <Route exact path='/shopping-cart/shop'>
            <Shop />
          </Route>
          <Route exact path='/shopping-cart/cart'>
            <Cart cartItems={cart} quantityChange={productQuantityChange} />
          </Route>
          <Route exact path='/shopping-cart/shop/:id'>
            <ProductDetails addToCart={addToCart} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;