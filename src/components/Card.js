import React from 'react';
import {useEffect,useState} from "react";
import Category from './Category';
import Navbar from './Navbar';
function Card() {
const[jobs,setJobs]=useState([])
  useEffect(()=>{
    fetch("https://mocki.io/v1/70346c5d-28de-4de7-ae2f-cf2e8dcc39f5")
    .then(response=>response.json())
    .then(response=>setJobs(response))
  },[])
  function favclick(){
  var icon=document.querySelectorAll(".far");
for(let i=0;i<icon.length;i++){
  icon[i].addEventListener('click',()=>{
 if(icon[i].style.color==='white'&& icon[i].style.fontWeight===''){
    icon[i].style.color='red'
    icon[i].style.fontWeight='bolder'
   }else{
    icon[i].style.color='white'
    icon[i].style.fontWeight=''
   }
  })
}
  }
  return (
    <div>
      <div className="card-container">
    {jobs.map(job=>{
      return  <div className='card'>
      <div className='img-box'>
      <img src={job.image} alt=""></img>
      <span className='vip-icon'><img src='./icons/vipicon.svg' alt=''></img></span>
      <span id='icon' onClick={()=>favclick()} className='fav-icon'><i className="far fa-heart"></i></span>
      </div>
      <div className='card-body'>
          <h4>{job.price}</h4>
          <p className='product-name'>{job.title}</p>
          <p className='date'>{job.date}</p>
      </div>
  </div>
    })}
    </div>
    
    </div>
  );
}
export default Card;