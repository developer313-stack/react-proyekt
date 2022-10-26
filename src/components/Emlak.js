import React from 'react';
import {useEffect,useState} from "react";
import {Link} from 'react-router-dom'
function Emlak() {
    const[vehicles,setVehicles]=useState([]);
  useEffect(()=>{
    fetch("https://api.mocki.io/v2/6c4e9e3d")
    .then(response=>response.json())
    .then(response=>setVehicles(response))
  },[])
  return (
    <div>
        <div className='card-container'>
          {vehicles.map(vehicle=>{
      return <Link className='cardLink' to={`/comments/${vehicle.id}`} key={vehicle.id}>
      <div className='card' key={vehicle.id}>
      <div className='img-box'>
      <img src={vehicle.imgsrc} alt=""></img>
      <span id='icon' className='fav-icon'><i className="far fa-heart"></i></span>
      </div>
      <div className='card-info'>
          <h4>{vehicle.priceval + " Azn"}</h4>
          <p className='product-name'>{vehicle.productsname}</p>
          <p className='date'>{vehicle.productscreated}</p>
      </div>
  </div>
  </Link>
    })}
    </div>
    </div>
  );
}

export default Emlak;
