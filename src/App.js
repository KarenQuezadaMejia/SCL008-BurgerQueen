
import React, {Component} from 'react';
import './App.css';
import BoxHeader from './component/BoxHeader';
import BoxHeaderButton from './component/BoxHeaderButton';

class App extends Component {
  render () {
    return (
    <div>
      <BoxHeader/>
      <BoxHeaderButton/>
    </div>  
    );
  }
}

export default App;