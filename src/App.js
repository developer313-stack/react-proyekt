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
  document.addEventListener("click",function(e){
  e.target.addEventListener("keyup",function(e){
    var cards=document.querySelectorAll(".product-name")
    for(var i=0;i<=cards.length;i++){
if(cards[i].innerHTML.includes(e.target.value)){
  cards[i].parentElement.parentElement.style.display=""
}else{
  cards[i].parentElement.parentElement.style.display="none"
}
    }
  })
  })
  
    return (
      <div>
         <Navbar/>
      <Category/>
      <Card/>
      <BottomMenu/>
      <Routes>
      <Route path='/yenielan' element={<Yenielan/>}></Route>
    </Routes>
  </div>
    );
  }
}
export default App;
