import React, { Component } from 'react';

class Emlak extends Component {
  render() {
    return (
      <div>
        <section>
            <div className='empty-box'>
                <img src='icons/search.gif'></img>
                <h3>Bu kateqoriyada elan yoxdur</h3>
            </div>
        </section>
      </div>
    );
  }
}
export default Emlak;