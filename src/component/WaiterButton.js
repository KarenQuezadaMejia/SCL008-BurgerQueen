import React, {Component} from 'react';
import './WaiterButton.css';
import BoxHeaderButton from './BoxHeaderButton';

class WaiterButton extends Component{
    breakfast(){

    }

    render(){

        return (
            <article className="breakfast">
            
            <BoxHeaderButton rol="Desayuno" customOnButtonClick={this.breakfast}/>
            <BoxHeaderButton rol="Almuerzo" customOnButtonClick={this.lunch}/>

            </article>
        )
    }
}

export default WaiterButton;
