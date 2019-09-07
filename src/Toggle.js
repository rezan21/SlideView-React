import React, { Component } from 'react';
import svg from './svg.svg';
export class Toggle extends Component {
  state = {
    isShown: false
  };

  toggleContent = () => {
    this.setState({ isShown: !this.state.isShown });
  };
  render() {
    return (
      <div onClick={this.toggleContent} className='container'>
        <h2 style={{ textAlign: 'center' }}>
          <img alt='' src={svg} width='15px' style={{ display: 'inline' }} />
          {'  '}
          I'm Just Another Component.
          <img alt='' src={svg} width='15px' style={{ display: 'inline' }} />
        </h2>

        <div className={this.state.isShown ? 'show' : 'hide'}>
          <h3>This Is My Content Stored In This Slide!</h3>
        </div>
      </div>
    );
  }
}

export default Toggle;
