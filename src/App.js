import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Category from './components/Category';
import './App.css';
import BottomMenu from './components/BottomMenu';
import Card from './components/Card';
import { Routes, Route } from "react-router-dom";
import Yenielan from './components/Yenielan';
import Comments from './components/Comments';
import Texnologiya from "./components/Texnologiya";
import Emlak from "./components/Emlak";
import Neqliyyat from './components/Neqliyyat';
import Iselani from "./components/Iselani"
class App extends Component {
  render() {
    document.addEventListener("click", function (e) {
      e.target.addEventListener("keyup", function (e) {
        var cards = document.querySelectorAll(".product-name")
        for (var i = 0; i <= cards.length; i++) {
          if (cards[i].innerHTML.includes(e.target.value)) {
            cards[i].parentElement.parentElement.style.display = ""
          } else {
            cards[i].parentElement.parentElement.style.display = "none"
          }
        }
      })
    })

    return (
      <div>
        <Navbar />
        <Category />
        <BottomMenu />
        <Routes>
          <Route path="/" element={<Card/>}></Route>
          <Route path='/yenielan'  element={<Yenielan />}></Route>
          <Route path='/texnologiya'  element={<Texnologiya />}></Route>
          <Route path='/emlak'  element={<Emlak />}></Route>
          <Route path='/neqliyyat'  element={<Neqliyyat />}></Route>
          <Route path='/iselanlari'  element={<Iselani />}></Route>
          <Route path='/comments/:id'  element={<Comments/>}></Route>
        </Routes>
      </div>
    );
  }
}
export default App;
