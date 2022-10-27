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
  return (
    <div className='single-container'>
      {
        vehicles.map(vehicle=>{
          return <div className='single-box'>
          <div className='single-img'>
            <img src={vehicle.imgsrc} alt=""></img>
          </div>
          <div className='single-info'>
            <h2>{vehicle.priceval}</h2>
          <h4>{vehicle.productsname}</h4>
          <LoremIpsum p={1} className="lorem" />
          <p>Elanın nömrəsi: {vehicle.id}</p>
          <p>Baxış sayı: {seentime()}</p>
          <p>Elan tarixi:  {vehicle.productscreated}</p>
          <div className='button-box'>
          <a href='tel://+9945000000000' className='call-button'><i className="fa fa-phone" aria-hidden="true"></i>
Zəng Et</a>
          <a href='https://wa.me/994773184121?text=' className='message-button'><i className="fa-brands fa-whatsapp" aria-hidden="true"></i>Whatsapp</a>
          </div>
          </div>
          </div>
        })
      }
    </div>
  );
}

export default Comments;
