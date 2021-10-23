import React from 'react';
import style from './Intro.module.scss';


export default class Intro extends React.Component {
  render() {
    return (
      <div className={style.intro_container}>
        <div className={style.intro}>
          <h1 className={style.h1}>Клуб фронтенд <br/>разработки FTML</h1>
          <>
            Хочешь заниматься фронтендом или уже что-то умеешь? <br/>Вступай в наш клуб и найти единомышленников
          </>
          <>
            <button className={style.button}>Вступить</button>
          </>
        </div>
        <div className={style.meaning_block}>
          <h2 className={style.h2}>Для кого создан клуб?</h2>
          <ul className={style.ul}>
            <li>начинающие разработчики</li>
            <li>люди, заинтересованные получить свой первый опыт в разработке реальных кейсов</li>
            <li>опытные разработчики </li>
          </ul>
        </div>
      </div>
    )
  }
}

