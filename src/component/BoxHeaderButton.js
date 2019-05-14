import React, {Component} from 'react';
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
            <button type="button" onClick = {this.handleClick}>{this.props.roles}</button> 
        )
    }
}    

export default BoxHeaderButton;