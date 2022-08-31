import React, { Component } from 'react';

class Altmenu extends Component {
  render() {
    return (
      <div>
        <ul className='altmenu'>
            <li>
            <i class="fa fa-home"></i>
<h5>Ana Sehife</h5>
            </li>
            <li>
            <i class="fa-solid fa-message"></i>
            <h5>Mesajlar</h5>
            </li>
            <li>
            <i class="fa-solid fa-octagon-plus"></i>
            <h5>Yeni</h5>
            </li>
            <li>
            <i class="fa-solid fa-heart"></i>
            <h5>Mesajlar</h5>
            </li>
            <li>
            <i class="fa-solid fa-user"></i>
          <h5>Kabinet</h5>
            </li>
        </ul>
      </div>
    );
  }
}
export default Altmenu
