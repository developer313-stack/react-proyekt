import React, { Component } from 'react';

 class Navbar extends Component {
  render() {
    function openMenu(){
      var menu=document.getElementById("leftMenu");
      menu.style.display="block"
    }
    function closeMenu(){
      var menu=document.getElementById("leftMenu");
      menu.style.display="none"
    }
    return (
      <div className='nav'>
        <div className='bars' onClick={()=>openMenu()}>
        <i class="fas fa-bars"></i>
        </div>
        <div className='logo'>
            <h2>tap.az</h2>
        </div>
        <div>
<div className='search-box'>
  <input type="text" placeholder='Əşya və ya xidmət axtarışı'></input>
  <span className='find'>Tap</span>
</div>
        </div>
        <div className='btn'>
           <span className='new-ads'>Yeni elan</span>
           <i class="fa-solid fa-circle-plus"></i>
        </div>
        <ul id='leftMenu' className='left-menu'>
          <div className='menu-header'>
            <h4>tap.az</h4>
            <i onClick={()=>closeMenu()} class="fa-solid fa-xmark"></i>
          </div>
          <li><i class="fa-solid fa-user"></i> Giriş</li>
          <li><i class="fa-solid fa-heart"></i> Seçilmişlər</li>
          <li><i class="fa-solid fa-wallet"></i> Balansı artırın</li>
          <li>Yardım</li>
          <li>İstifadəçi razılaşması</li>
          <li>Məxfilik siyasəti</li>
          <li>Saytda reklam</li>
          <li>Məxfilik siyasəti</li>
          <li>Tam versiyası</li>
          <li><i id='chat' class="fa-solid fa-comments"></i>Bizimlə əlaqə</li>
        </ul>
      </div>
    );
  }
}
export default Navbar