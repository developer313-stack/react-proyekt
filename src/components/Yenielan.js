import React, { Component } from 'react';
import {Link} from 'react-router-dom';
 class Yenielan extends Component {
  render() {
    return (
      <div>
        <div className='elan'>
         <div className='head'>
           <Link className="link" to="/">
         <i id='left' className='fa fa-arrow-left'></i>
         </Link>
            <h4>Yeni elan</h4>
         </div>
            <label>Kateqoriya</label>
            <select>
                <option >Texnologiya</option>
                <option>Nəqliyyat</option>
                <option>Əmlak</option>
                <option>İs elanları</option>
            </select>
            <label>Şəhər</label>
            <select>
                <option>Bakı</option>
                <option>Sumqayıt</option>
                <option>Bərdə</option>
                <option>Gəncə</option>
                <option>Beyləqan</option>
                <option>Lənkəran</option>

            </select>
            <label>Elan başlığı</label>
            <input type="text"></input>
            <label>Qiymət</label>
           <input type="text"></input>
           <label>Məzmun</label>
           <textarea></textarea>
           <label htmlFor="file" id='label'><i class="fa fa-image"></i> Şəkil yüklə</label>
           <input type="file" id="file" className="file" multiple></input>
           <button>Yeni elan</button>
        </div>
      </div>
    );
   
  }
}
export default Yenielan;