import React from 'react';
import logo from './app-logo.png';
import './App.css';

import {
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
  <Switch>
    <Route path="/"> 
      <DefaultApp />
    </Route>
  </Switch>
    
  );
}

function DefaultApp() {
  return <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h4>Coming Soon!</h4>
    </header>
</div>;
}

export default App;
