import React, {Component} from 'react';
import './BoxHeaderButton.css';
import './BoxHeader';

class BoxHeaderButton extends Component{

    constructor (props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.buttonOnClick();
    }
    render(){
        return(
            <button type="button" onClick = {this.handleClick}>{this.props.rol}</button> 
        )
    }
}    
export default BoxHeaderButton;



/*     render (){
        return(
            <div className= "BoxHeaderButton">
                <button className="HeaderButton">Meser@</button>
                <button className="HeaderButton">Cocina</button>
            </div>
        )
    }



}
    export default BoxHeaderButton;
 */
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