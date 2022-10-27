import React from 'react';
import {useEffect,useState} from "react";
import {Link} from "react-router-dom"
function Texnologiya() {
    const[vehicles,setVehicles]=useState([])
  useEffect(()=>{
    fetch("https://mocki.io/v1/47cfabf5-fa07-403e-8e0b-40c1e7c68d83")
    .then(response=>response.json())
    .then(response=>setVehicles(response))
  },[])
  return (
    <div>
        <div className='card-container'>
          {vehicles.map(vehicle=>{
      return  <div className='card'>
      <span id='icon' className='fav-icon'><i className="far fa-heart" id={vehicle.id}></i></span>
      <Link className="cardLink" to={`/comments/${vehicle.id}`}>
        <div>
      <div className='img-box'>
      <img src={vehicle.imgsrc} alt=""></img>
      <span className='vip-icon'><img src='./icons/vipicon.svg' alt=''></img></span>
      </div>
      <div className='card-body'>
          <h4>{vehicle.priceval}</h4>
          <p className='product-name'>{vehicle.productsname}</p>
          <p className='date'>{vehicle.productscreated}</p>
      </div>
      </div>
      </Link>
  </div>

    })}
    </div>
    </div>
  );
}

export default Texnologiya;
