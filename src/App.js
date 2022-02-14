
import React from 'react'
import './App.css';
import Header from "./components/Header"
import Slider from './components/Slider'
import Footer from './components/Footer'
import Home from './Pages/Home'
import Login from './Pages/Login';
import Location from './Pages/Location';
import Contact from './Pages/Contact';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Products from './Pages/Product';
import Detail from './Pages/Detail';
import Register from './Pages/Register';



function App() {

 

  return (
    <div className='container'>
      <Router>
          <Header/>
          
          <Switch>
          <Route exact path ="/" component ={Home}/>
          <Route exact path ="/Login" component ={Login}/>
          <Route exact path ="/Location" component ={Location}/>
          <Route exact path ="/Contact" component ={Contact}/>
          <Route exact path ="/Collection/:category" component ={Products}/>
          <Route exact path ="/product/:prod" component ={Detail}/>
          <Route exact path ="/register" component ={Register}/>
         
          
          
          </Switch>
          <Footer/>
      </Router>
     
    </div>
  )
}

export default App
