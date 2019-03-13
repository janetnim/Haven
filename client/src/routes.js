import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SignIn from './components/signin';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/signin" component={SignIn} />
    </div>
  </Router>
)

export default Routes;
