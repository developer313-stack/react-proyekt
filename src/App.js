import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Category from './components/Category';
import './App.css';
import BottomMenu from './components/BottomMenu';
class App extends Component {
render() {
    return (
      <div>
      <Navbar/>
      <Category/>
      <BottomMenu/>
  </div>
    );
  }
}
export default App;
