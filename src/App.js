import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Category from './components/Category';
import './App.css';
import BottomMenu from './components/BottomMenu';
import Card from './components/Card';
class App extends Component {
render() {
    return (
      <div>
         <Navbar/>
      <Category/>
      <Card/>
      <BottomMenu/>
  </div>
    );
  }
}
export default App;
