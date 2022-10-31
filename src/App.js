import React, { Component,useState,useEffect } from 'react';
import Navbar from "./components/Navbar";
import Category from './components/Category';
import './App.css';
import BottomMenu from './components/BottomMenu';
import Card from './components/Card';
import { Routes, Route} from "react-router-dom";
import Yenielan from './components/Yenielan';
import Comments from './components/Comments';
import Texnologiya from "./components/Texnologiya";
import Emlak from "./components/Emlak";
import Neqliyyat from './components/Neqliyyat';
import Iselani from "./components/Iselani"
import Favorite from './components/Favorite';

function App() {
  const [favorite,setFavorite]=useState([])
  
  
      document.addEventListener("click", function (e) {
       if(e.target.className=="search"){
         e.target.addEventListener("keyup",function(){
           var name=document.querySelectorAll(".product-name")
           for(var i=0;i<=name.length;i++){
             if(name[i].textContent.toLowerCase().startsWith(e.target.value)){
               name[i].parentElement.parentElement.style.display=""
             }else{
              name[i].parentElement.parentElement.style.display="none"
             }
           }
         })
       }
      })
      useEffect(()=>{
        document.addEventListener("click",function(e){
          if(e.target.className=="far fa-heart"){
            fetch("https://api.npoint.io/a1ce5662cff7a09fe754")
            .then(response=>response.json())
            .then(response=>setFavorite(favorite=>[...favorite,response.find(res=>res.id==e.target.id)]))
            e.target.style.fontWeight="bolder"
            e.target.style.color="red"
            localStorage.setItem("ads",JSON.stringify(favorite))
          }
        })
      },[])
return (
    <div>
       <Navbar />
        <Category />
        <BottomMenu />
        <Routes>
          <Route path="/" element={<Card/>}></Route>
          <Route path='/yenielan'  element={<Yenielan />}></Route>
          <Route path='/texnologiya' element={<Texnologiya />}></Route>
          <Route path='/emlak'  element={<Emlak />}></Route>
          <Route path='/neqliyyat'  element={<Neqliyyat />}></Route>
          <Route path='/iselanlari'  element={<Iselani />}></Route>
          <Route path='/comments/:id'  element={<Comments/>}></Route>
          <Route path='/secilmis' element={<Favorite/>}></Route>
        </Routes>
    </div>
  );
}
export default App
