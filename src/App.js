import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;