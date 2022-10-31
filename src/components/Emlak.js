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

export default Emlak;
