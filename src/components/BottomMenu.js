import React, { Component } from 'react';
import {Link } from 'react-router-dom';

class BottomMenu extends Component {
  render() {
    return (
      <div>
        <div className='bottom-navbar'>
            <Link className='link' to="/">
            <li className='li'>
                <i className='fa fa-home'></i>
                Əsas</li>
                </Link>
            <li className='li'>
                <i className='fa fa-square'></i>
                Kataloq</li>
                <Link className='link' to="/yenielan">
            <li className='li'>
                <i className='fa fa-plus'></i>
                Yeni elan</li>
                </Link>
                <Link className='link' to="/secilmis">
            <li className='li'>
                <i className='fa fa-heart'></i>
                Seçilmişlər
            </li>
            </Link>
            <Link className='link' to="/kabinet">
            <li className='li'>
                <i className='fa fa-user'></i>
                Kabinet
                </li>
                </Link>
        </div>
      </div>
    );
  }
}
export default BottomMenu;
 