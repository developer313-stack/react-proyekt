import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Category from './components/Category';
import {Routes,Route} from 'react-router-dom'
import './App.css';
import Yenielan from './components/Yenielan';
class App extends Component {
render() {
    return (
      <div>
      <Navbar/>
      <Category/>
  </div>
    );
    <Routes>
    <Route path='/yenielan' element={<Yenielan/>}></Route>
  </Routes>
  }
}
export default App;
