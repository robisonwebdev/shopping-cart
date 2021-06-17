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
    console.log(cart);
  }, [cart]);

  function addToCart(id) {
    Products.map(product => {
      if (product.id === id) {
        product['quantity'] = 1;

        setCart(prevState => {
          return [...prevState, product];
        });
      }
    })
  }

  function productQuantityChange(id, value) {
    let updateCart = cart.map(product => {
      if (product.id === id) {
        return {...product, quantity: value};
      }
      return product;
    });

    setCart(updateCart);
  }

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/shop'>
            <Shop />
          </Route>
          <Route exact path='/cart'>
            <Cart cartItems={cart} quantityChange={productQuantityChange}/>
          </Route>
          <Route exact path='/shop/:id'>
            <ProductDetails addToCart={addToCart} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;