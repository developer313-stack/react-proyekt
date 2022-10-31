import React from 'react';

function Favorite() {
    var products=JSON.parse(localStorage.getItem("ads",products))
    return (
        <div>
           <div className='card-container'>
          {products.map(vehicle=>{
      return  <div className='card'>
      <span id='icon' className='fav-icon'><i class="fa-solid fa-ellipsis-vertical"></i></span>
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
    })}
    </div>
        </div>
    );
}
export default Favorite;