import React from 'react';
import style from './Content.module.scss';
import Intro from "../Intro/Intro";
import Notification from "../Notification/Notification";


export default class Content extends React.Component {
  render() {
    return (
      <div className={style.content}>
        <Intro/>
        <Notification />
      </div>
    )
  }
}

