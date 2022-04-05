import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import './styles/App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {
    let numberOfItems = 0;

    cartItems.forEach(item => {
      numberOfItems += item.quantity;
    });

    setCartQuantity(numberOfItems);
  }, [cartItems]);

  return (
    <div id='App'>
      <Header cartQuantity={cartQuantity} />
      <Main cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
};

export default App;