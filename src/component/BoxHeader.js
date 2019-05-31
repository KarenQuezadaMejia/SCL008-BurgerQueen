import React, {Component} from 'react'
import ReactDom from 'react-dom';
import './BoxHeader.css';
import BoxHeaderLogo from '../logo.png';
import BoxHeaderButton from './BoxHeaderButton';
import WaiterButton from './WaiterButton';
import Kitchen from './Kitchen';

class BoxHeader extends Component {
  WaiterButton (){
    ReactDom.render(<WaiterButton/>, document.getElementById('containerMenu'))
  }
  Kitchen (){
    ReactDom.render(<Kitchen/>, document.getElementById('conteinerMenu'))
  }
  
  render () {
    return (
    <div id= "BoxHeader">
      <img src={BoxHeaderLogo} className = "BoxHeaderLogo" alt="logo"/>
      <button className ="BoxHeaderButton" id="initbutton"> <BoxHeaderButton rol = "Meser@" customOnButtonClick ={this.WaiterButton}/></button>
      <button className ="BoxHeaderButton" id="initbutton"> <BoxHeaderButton rol = "Cocina"customOnButtonClick ={this.Kitchen}/></button>
    </div> 
    );
  }
}

export default BoxHeader;