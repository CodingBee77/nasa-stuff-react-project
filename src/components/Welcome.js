import React, { Component } from 'react';

export default class Welcome extends Component {

  diappear = () => {
    this.hide()
  }


  render() {

    return (
      <div>
        <button onClick={this.disappear}>Play!</button>
      </div>
    );
  }
}