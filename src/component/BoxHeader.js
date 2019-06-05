import React, {Component} from 'react'
import './BoxHeader.css';
import BoxHeaderLogo from '../logo.png';
import BoxHeaderButton from './BoxHeaderButton';
import WaiterButton from './WaiterButton';
import Kitchen from './Kitchen';

class BoxHeader extends Component {
  constructor(props){
    super(props);
    this.state = {
      showKitchen: false,
      showWaiter: true,
    }

    this.WaiterButtonFunc = this.WaiterButtonFunc.bind(this);
    this.KitchenFunc = this.KitchenFunc.bind(this);
  }
  WaiterButtonFunc (){
    this.setState({
      ...this.state,
      showWaiter : true,
      showKitchen : false
    })
  }
  KitchenFunc (){
    this.setState({
      ...this.state,
      showWaiter : false,
      showKitchen : true
    })
  }
  
  render () {
    return (
      <div>
    <div className= "BoxHeader">
      <img src={BoxHeaderLogo} className = "BoxHeaderLogo" alt="logo"/>
      <BoxHeaderButton rol = "Meser@" customOnButtonClick ={this.WaiterButtonFunc}/>
      <BoxHeaderButton rol = "Cocina"customOnButtonClick ={this.KitchenFunc}/>
    </div>
    <div id="containerMenu">
      {
        this.state.showWaiter && 
        <WaiterButton></WaiterButton>
      }
      {
        this.state.showKitchen &&
        <Kitchen></Kitchen>
      }
    </div>
    </div>
    
    );
  }
}

export default BoxHeader;