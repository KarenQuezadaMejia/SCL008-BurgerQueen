
import React, {Component} from 'react';
import './App.css';
import Nav from './component/Header'
import Button from './component/NavButton'

class App extends Component {
  render () {
    return (
    <div>
      <Nav/>
      <Button/>
    </div>  
    );
  }
}

export default App;