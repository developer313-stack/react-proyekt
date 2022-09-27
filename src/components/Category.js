import React from 'react';
import Neqliyyat from './Neqliyyat';
import {Routes,Route,Link} from 'react-router-dom';
import Texnologiya from './Texnologiya';
import Emlak from './Emlak';
import Yenielan from './Yenielan';
import Card from './Card'

 function Category() {
  return (
    <div>
      <div className='second-input'>
        <input type="text" placeholder='Əşya və ya xidmət axtarışı'></input>
        <i id='search' class="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className='containere'>
      <div>
          <Link to="/homepage">
          <span>
<img src='icons/icon10.png' alt=''></img>
          </span>
          </Link> 
          <h3>
      Əsas
          </h3>
        </div>
        <div>
        <Link to='/texnologiya'>
          <span>
<img src='icons/icon1.png' alt=''></img>
          </span>
          </Link> 
          <h3>
      Texnologiya
          </h3>
        </div>
 <div>
   <Link to='/neqliyyat'>
   <span>
<img src='icons/icon2.png' alt=''></img>
          </span>
          </Link>
          <h3>
      Nəqliyyat
          </h3>
        </div>
        <div>
          <Link to='/emlak'>
          <span>
<img src='icons/icon3.png' alt=''></img>
          </span>
          </Link>
          <h3>
      Əmlak
          </h3>
        </div>
        <div>
          <Link to="/geyimler">
          <span>
<img src='icons/icon4.png' alt=''></img>
          </span>
          </Link> 
          <h3>
      Geyim
          </h3>
        </div>
        <div>
          <Link to="/xidmetler">
          <span>
<img src='icons/icon5.png' alt=''></img>
          </span>
          </Link> 
          <h3>
        Xidmətlər
          </h3>
        </div>
        <div>
          <Link to="/hobbi">
          <span>
<img src='icons/icon6.png' alt=''></img>
          </span>
          </Link> 
          <h3>
      Hobbi
          </h3>
        </div>
        <div>
          <Link to="/heyvanlar">
          <span>
<img src='icons/icon7.png' alt=''></img>
          </span>
          </Link> 
          <h3>
      Heyvanlar
          </h3>
        </div>
        <div>
          <Link to="/iselanlari">
          <span>
<img src='icons/icon8.png' alt=''></img>
          </span>
          </Link> 
          <h3>
      İş elanları
          </h3>
        </div>
        <div>
          <Link to="/magazalar">
          <span>
<img src='icons/icon9.png' alt=''></img>
          </span>
          </Link> 
          <h3>
      Mağazalar
          </h3>
        </div>
        </div>
          <Routes>
          <Route path='/' element={<Card/>}></Route>
          <Route path='/homepage' element={<Card/>}></Route>
            <Route path='/neqliyyat' element={<Neqliyyat/>}></Route>
            <Route path='/texnologiya' element={<Texnologiya/>}></Route>
            <Route path='/emlak' element={<Emlak/>}></Route>
            <Route path='/yenielan' element={<Yenielan/>}></Route>
          </Routes>
    </div>
  );
}
export default Category;