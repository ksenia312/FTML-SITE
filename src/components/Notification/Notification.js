import React from 'react';
import style from './Notification.module.scss';


export default class Notification extends React.Component {
  render() {
    return (
      <div className={style.notification}>
        Клуб будет полезен студентам, которые хотят чего-то большего. Если ты готов развивать свои hard skills в клиентской стороне пользовательского интерфейса, то тебе к нам
      </div>
    )
  }
}

