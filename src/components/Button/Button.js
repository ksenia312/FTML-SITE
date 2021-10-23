import React from 'react';
import style from './Button.module.scss';


export default class Button extends React.Component {

  render() {
    return (
      <a href={'https://vk.com/ftmlclub'}>
        <button className={style.button}>{this.props.content}</button>
      </a>
    )
  }
}

