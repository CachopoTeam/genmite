import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main">
        <h2>Main Stateful Component generated from the cli</h2>
      </div>
    );
  }
}

Main.propTypes = {};

export default Main;
