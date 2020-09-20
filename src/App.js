import React from 'react';
import './App.css';
// import router
import { 
  BrowserRouter as Router,
  Route,
  Switch
 } from "react-router-dom";
 // import components
 import MyNavbar from './components/Navbar';
//  import pages
import Register from './pages/Register';
import Calculator from './pages/CalculatorBMI';
import TextTrasform from './pages/TextTransform';
import Todos from './pages/Todos';

function App() {
  return (
    <Router>
      <MyNavbar/>

      <Switch>
        <Route path='/Register'>
          <Register/>
        </Route>
        <Route path='/Calculator'>
          <Calculator/>
        </Route>
        <Route path='/TextTransform'>
          <TextTrasform/>
        </Route>
        <Route path='/Todos'>
          <Todos/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
