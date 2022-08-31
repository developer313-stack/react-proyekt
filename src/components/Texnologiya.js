import React from 'react';
import {useEffect,useState} from "react";
function Texnologiya() {
    const[vehicles,setVehicles]=useState([])
  useEffect(()=>{
    fetch("https://mocki.io/v1/89fefccf-c0d5-4946-aafe-3bac4e37aaa2")
    .then(response=>response.json())
    .then(response=>setVehicles(response))
  },[])
  return (
    <div>
        <div className='vehicle'>
          {vehicles.map(vehicle=>{
      return  <div className='card'>
      <div className='img-box'>
      <img src={vehicle.imgsrc} alt=""></img>
      <span id='icon' className='fav-icon'><i className="far fa-heart"></i></span>
      </div>
      <div className='card-info'>
          <h4>{vehicle.priceval}</h4>
          <p className='product-name'>{vehicle.productsname}</p>
          <p className='date'>{vehicle.productscreated}</p>
      </div>
  </div>
    })}
    </div>
    </div>
  );
}

export default Texnologiya;
