import React from 'react';
import './players.css';

// the onClick function is defined as a callback so that the clicked elements value

const Players = props => (
  <div className="card" onClick={e => props.clickEvent(e.target.src)}>
    <img className="card-img-top card-height" src={props.player} alt="" />
  </div>
);

export default Players;