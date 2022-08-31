import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Category from './components/Category';
import './App.css';
import Altmenu from './components/Altmenu';
class App extends Component {
render() {
    return (
      <div>
      <Navbar/>
      <Category/>
  </div>
    );
  }
}
export default App;
