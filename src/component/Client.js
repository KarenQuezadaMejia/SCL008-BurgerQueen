import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Waiter.css';
import Button from './Button';
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import {connect} from 'react-redux';

class Diner extends Component{

    render(){
        return(
            <div id="name">
                <input>Nombre Cliente</input>
            </div> 
        )
    }
}

export default (Diner);