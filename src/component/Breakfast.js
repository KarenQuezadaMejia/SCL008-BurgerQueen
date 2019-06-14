import React, { Component } from 'react';
import Button from './Button';

const menu = require("../data/breakfastdata")
class breakfastmenu extends Component {
  constructor() {
    super();
    this.state = {
      menu,
    }
  }
  render() {
    const menubreakfast = menu.breakfast.map((product) => {
      return (
        <Button rol={product.item + "" + product.price} customOnButtonClick={() => { this.props.nameProduct(menubreakfast) }} />
      )
    })
    return (
      <div id="secondboxitem">
       {menubreakfast}
      </div>

    );
  }
}
<<<<<<< HEAD
export default (breakfastmenu);
=======
export default (breakfastmenu);
>>>>>>> 56c421401794cc2cb49306e8fb50111fc1072d5b
