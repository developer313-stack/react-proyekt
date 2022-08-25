import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Category from './components/Category';
import Elanlar from './components/Elanlar';
import './App.css';
class App extends Component {
render() {
    return (
      <div>
  <Navbar/>
  <Category/>
  <Elanlar/>
      </div>
    );
    
  }
}
export default App;
