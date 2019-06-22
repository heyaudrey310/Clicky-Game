import React from 'react';
import './players.css';

// the onClick function is defined as a callback so that the clicked elements value

const players = props => (
  <div className="card" onClick={e => props.clickEvent(e.target.src)}>
    <img className="card-img-top card-height" src={props.name} alt="" />
  </div>
);

export default players;