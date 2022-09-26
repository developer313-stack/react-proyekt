import React, { Component } from 'react';
 class Yenielan extends Component {
  render() {
    return (
      <div>
        <div className='elan'>
            <h4>Yeni elan</h4>
            <label>Kateqoriya</label>
            <select>
                <option>Texnologiya</option>
                <option>Nəqliyyat</option>
                <option>Əmlak</option>
                <option>İs elanları</option>
            </select>
            <label>Elan başlığı</label>
            <input type="text"></input>
            <label>Qiymət</label>
           <input type="text"></input>
           <label>Məzmun</label>
           <textarea></textarea>
           <label for="file">Choose</label>
           <input type="file" className="file"></input>
           <button>Yeni elan</button>
        </div>
      </div>
    );
  }
}
export default Yenielan;