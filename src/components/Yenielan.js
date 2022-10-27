import React,{useRef,useEffect} from 'react';

function Yenielan() {
  const title=useRef()
 function writeval(){
    console.log(title.current.value)
  }
  useEffect(()=>{
writeval()
  },)
  return (
    <div>
       <div className='elan'>
         <div className='head'>
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
            <input type="text" ref={title} onKeyUp={writeval}></input>
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
export default Yenielan