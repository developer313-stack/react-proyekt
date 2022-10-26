import React,{useState,useEffect} from 'react';
import {useParams} from "react-router-dom";
import {LoremIpsum} from "react-lorem-ipsum"
function Comments() {
    const[vehicles,setVehicles]=useState([]);
    const params=useParams()
    useEffect(()=>{
      fetch("https://api.npoint.io/a1ce5662cff7a09fe754")
      .then((response)=>response.json())
      .then((response)=>setVehicles(response.filter(res=>res.id==params.id)))
    },[])

    function seentime(){
      var a=99;
      var b=Math.ceil(Math.random()*a)
      return b
    }

    console.log(vehicles)
  return (
    <div className='single-container'>
      {
        vehicles.map(vehicle=>{
          return <div className='single-box'>
          <div className='single-img'>
            <img src={vehicle.imgsrc}></img>
          </div>
          <div className='single-info'>
            <h2>{vehicle.priceval}</h2>
          <h4>{vehicle.productsname}</h4>
          <LoremIpsum p={1} className="lorem" />
          <p>Elanin nomresi: {vehicle.id}</p>
          <p>Baxis sayi: {seentime()}</p>
          <p>Elan yerlesdirme:  {vehicle.productscreated}</p>
          <div className='button-box'>
          <a href='tel://+9945000000000' className='call-button'>Zəng Et</a>
          <a className='message-button'>Mesaj</a>
          </div>
          </div>
          </div>
        })
      }
    </div>
  );
}

export default Comments;
