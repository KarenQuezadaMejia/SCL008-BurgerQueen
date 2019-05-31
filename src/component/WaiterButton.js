import React, {Component} from 'react';
import './WaiterButton.css';
import BoxHeaderButton from './BoxHeaderButton';

class WaiterButton extends Component{
    breakfast(){

    }

    lunch(){

        return (
            <article className="breakfast">
            <div id= "containerMenu">
            <BoxHeaderButton rol="Desayuno" customOnButtonClick={this.breakfast}/>
            <BoxHeaderButton rol="Almuerzo" customOnButtonClick={this.lunch}/>
            </div>
            </article>
        )
    }
}

export default WaiterButton;
