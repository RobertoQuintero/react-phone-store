import React, { Component } from 'react';
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './components/Navbar';
import Cart from './components/Cart/Cart';
import Details from './components/Details';
import Default from './components/Default';
import ProductList from './components/ProductList';
import Modal from './components/Modal';

class App extends Component {
  render(){

    return (
    
      <Router>
      <Navbar />
      <Switch>
        <Route exact path="/"><ProductList/></Route>
        <Route path='/details'><Details/></Route>
        <Route path='/cart'><Cart/></Route>
        <Route><Default/></Route>
      </Switch>
      <Modal />
      </Router>
      
    
      )
    
  }
}

export default App
