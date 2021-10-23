import React from 'react';
import style from './Participants.module.scss';
import Profile from "../../assets/files/profile.png";


export default class Participants extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      participants: {
        1: {key: 1, img: Profile, figcaption: 'Никитина Ксения'},
        2: {key: 2, img: Profile, figcaption: 'Мельникова Мария'},
        3: {key: 3, img: Profile, figcaption: 'Ингеройнен Полина'},
        4: {key: 4, img: Profile, figcaption: 'Ларионов Михаил'},
        5: {key: 5, img: Profile, figcaption: 'Сулейманов Руслан'},
      }
    }
  }

  render() {
    const {participants} = this.state
    return (
      <div id='participants' className={style.participants_container}>
        <h2 className={style.h2}>Участники</h2>
        <div className={style.carousel_container}>
          <div className={style.carousel}>
            {Object.values(participants).map(p =>
              (<figure id={p.key}>
                <img src={p.img} alt='user'/>
                <figcaption>{p.figcaption}</figcaption>
              </figure>))}
          </div>
        </div>
      </div>
    )
  }
}

