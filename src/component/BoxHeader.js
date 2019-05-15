import React from 'react';
import './BoxHeader.css';
import BoxHeaderLogo from '../logo.png';

const BoxHeader= () => (
  <div className="BoxHeader">j
    <a href = "/">
    <img src={BoxHeaderLogo} className = "BoxHeaderLogo" alt="logo"/>
    <span className="BoxHeader_text">Proyecto Burger Queen</span>
    </a>
  </div>
);

export default BoxHeader;

