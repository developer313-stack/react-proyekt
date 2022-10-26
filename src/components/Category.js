import React from 'react';
import {Link} from 'react-router-dom';

 function Category() {
  return (
    <div>
      <div className='second-input'>
        <input type="text" placeholder='Əşya və ya xidmət axtarışı'></input>
        <i id='search' class="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className='containere'>
      <div>
          <Link to="/">
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
         
    </div>
  );
}
export default Category;