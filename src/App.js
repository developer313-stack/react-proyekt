import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Category from './components/Category';
import './App.css';
import BottomMenu from './components/BottomMenu';
import Card from './components/Card';
import {Routes,Route} from "react-router-dom";
import Yenielan from './components/Yenielan';
class App extends Component {
render() {
    return (
      <div>
         <Navbar/>
      <Category/>
      <div className='container'></div>
      <BottomMenu/>
      <Routes>
       <Route path='/yenielan' element={<Yenielan/>}></Route>
    </Routes>
  </div>
    );
  }
}
export default App;
