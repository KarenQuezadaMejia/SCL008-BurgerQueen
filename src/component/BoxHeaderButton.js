import React, {Component} from 'react';
import './BoxHeaderButton.css';

class BoxHeaderButton extends Component{
    render (){
        return(
            <div className= "BoxHeaderButton">
                <button className="HeaderButton">Meser@</button>
                <button className="HeaderButton">Cocina</button>
            </div>
        )
    }



}
    export default BoxHeaderButton;

   /*  constructor (props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.buttonOnClick();
    }

    render(){
        return(
            <button type="button" onClick = {this.handleClick}>{this.props.roles}</button> 
        )
    }
}    

export default BoxHeaderButton; */