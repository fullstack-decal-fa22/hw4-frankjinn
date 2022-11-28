import React from 'react';
import Color from './Color';
import Block from './Block';
const Menu = (props) => { 
    return (
      <div className="colorOptions">
          <Color color="Blue" handleClick={props.handleClick}></Color>
          <Color color="Red" handleClick={props.handleClick}></Color>
          <Color color="Yellow" handleClick={props.handleClick}></Color>
          <Color color="Orange" handleClick={props.handleClick}></Color>
      </div>
    )
}

export default Menu;