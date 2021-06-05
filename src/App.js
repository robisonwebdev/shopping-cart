import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

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