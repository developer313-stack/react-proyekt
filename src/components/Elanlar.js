import React from 'react';
import Card from './Card';

 function Elanlar() {
  return (
    <div>
       <div className='headers'>
          <h3>VIP ELANLAR</h3>
          <a href='/App.js'>Bütün VIP elanlar</a>
          </div>
          <div className='card-container'>
          <div className='products'>
          <Card/>
          </div>
          <div className='show-all'>
         <a href='https://tap.az' className='show-button'>Hamisini goster</a>
          </div>
      </div>
      </div>
  );
}
export default Elanlar;