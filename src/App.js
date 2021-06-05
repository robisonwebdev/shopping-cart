import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='' component={} />
          <Route exact path='' component={} />
          <Route exact path='' component={} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;