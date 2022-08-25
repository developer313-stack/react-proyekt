import React from 'react';
import {useEffect,useState} from "react";
function Card() {
const[jobs,setJobs]=useState([])
  useEffect(()=>{
    fetch("https://mocki.io/v1/70346c5d-28de-4de7-ae2f-cf2e8dcc39f5")
    .then(response=>response.json())
    .then(response=>setJobs(response))
  },[])
  function favclick(){
var icon=document.getElementById("icon")
  icon.style.color="red";
  icon.style.fontWeight="bold";
}
  return (
    <div>
    {jobs.map(job=>{
      return  <div className='card'>
      <div className='img-box'>
      <img src={job.image} alt=""></img>
      <span className='vip-icon'><img src='./cardimgs/vip.svg' alt=''></img></span>
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
  );
}
export default Card;