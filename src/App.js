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

// const App = () => {
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     cart.forEach(product => {
//       if (product.quantity === 0) {
//         let filterCart = cart.filter(product => product.quantity > 0);
//         setCart(filterCart);
//       }
//     })

//     console.log(cart);
//   }, [cart]);

//   function addToCart(id) {
//     Products.forEach(product => {
//       if (product.id === id) {
//         if (cart.some(item => item.id === id)) {
//           let updateProduct = cart.map(item => {
//             if (item.id === id) {
//               return { ...item, quantity: item.quantity + 1 };
//             }
//             return item;
//           });

//           setCart(updateProduct);
//         } else {
//           product.quantity = 1;

//           setCart(prevState => {
//             return [...prevState, product];
//           });
//         }
//       }
//     })
//   }

//   function productQuantityChange(id, value) {
//     let updateCart = cart.map(product => {
//       if (product.id === id) {
//         return { ...product, quantity: value };
//       }
//       return product;
//     });

//     setCart(updateCart);
//   }

//   return (
//     <Router>
//       <div className='App'>
//         <Navbar cartQuantity={cart.length} />
//         <Switch>
//           <Route exact path='/'>
//             <Home />
//           </Route>
//           <Route exact path='/shop'>
//             <Shop />
//           </Route>
//           <Route exact path='/cart'>
//             <Cart cartItems={cart} quantityChange={productQuantityChange} />
//           </Route>
//           <Route exact path='/shop/:id'>
//             <ProductDetails addToCart={addToCart} />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

export default App;