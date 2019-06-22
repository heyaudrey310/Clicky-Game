import React from 'react';
import './img-container.css';
import players from '../players';

// main container for each player component
// loops through each index in props.players, which contains an array of player images

const Container = props => (
  // loops through
  <div
    className={
      props.shake
        ? 'container d-flex flex-wrap justify-content-center shake'
        : 'container d-flex flex-wrap justify-content-center'
    }
  >
    {props.players.map((a, i) => <players name={a} key={i} clickEvent={props.clickEvent} />)}
  </div>
);

export default Container;