import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route component={NotFound}/>
      </Switch>
      </BrowserRouter>
      
    </div>
  );
};

export default App;