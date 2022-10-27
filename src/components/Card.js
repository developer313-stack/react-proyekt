import React from 'react';
import {useEffect,useState} from "react";
import {Link} from 'react-router-dom'
function Card() {
const[jobs,setJobs]=useState([]);
useEffect(()=>{
   fetch("https://mocki.io/v1/04bd4890-726f-4d2d-b792-29b3d05c1ea8")
    .then(response=>response.json())
    .then(response=>setJobs(response))
  },[])
  return (
    <div>
      <div className="card-container">
    {jobs.map(job=>{
      return <div className='card'>
      <span id='icon' className='fav-icon'><i className="far fa-heart" id={job.id}></i></span>
      <Link className="cardLink" to={`/comments/${job.id}`}>
        <div>
      <div className='img-box'>
      <img src={job.image} alt=""></img>
      <span className='vip-icon'><img src='./icons/vipicon.svg' alt=''></img></span>
      </div>
      <div className='card-body'>
          <h4>{job.price}</h4>
          <p className='product-name'>{job.title}</p>
          <p className='date'>{job.date}</p>
      </div>
      </div>
      </Link>
  </div>
    })}
    </div>
    </div>
  );
}
export default Card;