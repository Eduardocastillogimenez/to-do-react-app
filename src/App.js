import React from 'react';
import NotFound from 'views/NotFound';
import Home from 'views/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.less';

const App = () => (
  <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
  </Router>
);

export default App;