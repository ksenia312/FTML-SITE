import React from 'react';
import style from './Button.module.scss';


export default class Button extends React.Component {

  render() {
    return (
      <button className={style.button}><a href={'https://vk.com/ftmlclub'}>{this.props.content}</a> </button>
    )
  }
}
