import React, { Component} from 'react';
import {Link} from 'react-router-dom';
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
        <i className="fas fa-bars"></i>
        </div>
        <div className='logo'>
            <h2>elan.az</h2>
        </div>
        <div>
<div className='search-box'>
  <input type="text" className='search' placeholder='Əşya və ya xidmət axtarışı'></input>
  <span className='find'>Tap</span>
</div>
        </div>
        <Link className='link'  to="/yenielan" exact>
        <div className='btn'>
           <span className='new-ads'>Yeni elan</span>
           <i className="fa-solid fa-circle-plus"></i>
        </div>
        </Link>
        <ul id='leftMenu' className='left-menu'>
          <div className='menu-header'>
            <h4>tap.az</h4>
            <i onClick={()=>closeMenu()} class="fa-solid fa-xmark"></i>
          </div>
          <li><i className="fa-solid fa-user"></i> Giriş</li>
          <li><i className="fa-solid fa-heart"></i> Seçilmişlər</li>
          <li><i className="fa-solid fa-wallet"></i> Balansı artırın</li>
          <li>Yardım</li>
          <li>İstifadəçi razılaşması</li>
          <li>Məxfilik siyasəti</li>
          <li>Saytda reklam</li>
          <li>Məxfilik siyasəti</li>
          <li>Tam versiyası</li>
          <li><i id='chat' className="fa-solid fa-comments"></i>Bizimlə əlaqə</li>
        </ul>
      </div>
    );
  }
}

export default Navbar