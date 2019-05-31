/* import React, {Component} from 'react'
import ReactDom from 'react-dom';
import './BoxInit.css';
import BoxHeaderLogo from '../logo.png';
import BoxHeaderButton from './BoxHeaderButton';
import WaiterButton from './WaiterButton';
import Kitchen from './Kitchen';

class BoxInit extends Component {
  WaiterButton (){
    ReactDom.render(<WaiterButton/>, document.getElementById('containerMenu'))
  }
  Kitchen (){
    ReactDom.render(<Kitchen/>, document.getElementById('conteinerMenu'))
  }
  render () {
    return (
    <div id= "conteinerinit">
      <div className="BoxInit">
      <img src={BoxHeaderLogo} className = "BoxHeaderLogo" id="logoinit" alt="logo"/>
      </div>
      <div id = "conteinerinitbutton">
      <button className ="BoxHeaderButton" id="initbutton"> <BoxHeaderButton rol = "Meser@" customOnButtonClick ={this.WaiterButton}/></button>
      <button className ="BoxHeaderButton" id="initbutton"> <BoxHeaderButton rol = "Cocina"/></button>
      </div>
    </div> 
    );
  }
}

export default BoxInit; */