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
        <h3>Main Stateful Component generated from the cli</h3>
      </div>
    );
  }
}

Main.propTypes = {};

export default Main;
