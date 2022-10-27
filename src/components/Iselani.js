import React from 'react';
import {useEffect,useState} from "react";
import {Link} from "react-router-dom"
function Iselani() {
    const[vehicles,setVehicles]=useState([])
  useEffect(()=>{
    fetch("https://mocki.io/v1/6dcca1ff-7a00-49d1-b6ad-fbbde18d7827")
    .then(response=>response.json())
    .then(response=>setVehicles(response))
  },[])
  return (
    <div>
          <div className='card-container'>
          {vehicles.map(vehicle=>{
      return <Link className='cardLink' to={`/comments/${vehicle.id}`}>
       <div className='card'>
      <div className='img-box'>
      <img src={vehicle.imgsrc} alt=""></img>
      <span id='icon' className='fav-icon'><i className="far fa-heart"></i></span>
      </div>
      <div className='card-info'>
          <h4>{vehicle.price + " Azn"}</h4>
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

export default Iselani;
