import React from 'react';
import style from './Events.module.scss';
import Button from "../Button/Button";
import Lamp from '../../assets/files/lamp.png'

export default class Events extends React.Component {
  render() {
    return (
      <div id='events' className={style.events_container}>
        <div className={style.events}>
          <h2 className={style.h2}>Ближайшие мероприятия</h2>
          <div>
            <p>Не переживай, что ничего глобального пока не происходит — <br/>все хакатаны еще будут!</p>
            <br/>
            <p> А чтобы уж точно ничего не пропустить, подписывайся на нашу <br/> группу во “Вконтакте”</p>
          </div>
          <Button content='Вступить'/>
        </div>
        <div className={style.lamp}>
        <img src={Lamp} alt='lamp'/>
        </div>
      </div>
    )
  }
}

