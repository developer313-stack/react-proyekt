import React, { Component } from 'react';
import PropTypes from 'prop-types';


 class User extends Component {
  state={
    isVisible:true
  }
 onClickEvent=()=>{
   this.setState({
     isVisible:!this.state.isVisible
   })
 }
  render() {
    const {name,department,salary}=this.props
    const {isVisible}=this.state
    return (
<div className='col-md-8 mb-4'>
<div className='card mt-4'>
  <div className='card-header d-flex justify-content-between'>
    <h4 className='d-inline' onClick={this.onClickEvent} >{name}</h4>
    <i className='far fa-trash-alt' style={{cursor:"pointer"}}></i>
  </div>
 {
   isVisible ?  <div className='card-body'>
   <p className='card-text'>Şöbə: {department}</p>
   <p className='card-text'>Maaş: {salary}</p>
 </div> :null
 }
</div>
</div>
    )
  }
}
User.propTypes={
  name:PropTypes.string.isRequired
}
User.defaultProps={
  name:"Məlumat Yox",
  department:"Məlumat Yox",
  salary:"Məlumat Yox"
}
export default User