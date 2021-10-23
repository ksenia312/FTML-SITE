import React from 'react';
import style from './Content.module.scss';
import Intro from "../Intro/Intro";


export default class Content extends React.Component {
  render() {
    return (
      <div className={style.content}>
        <Intro/>
      </div>
    )
  }
}

