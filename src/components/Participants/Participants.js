import React from 'react';
import style from './Participants.module.scss';
import Profile from "../../assets/files/profile.png";


export default class Participants extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      participants: {
        1: {img: Profile, figcaption: 'Сулейманов Руслан'},
        2: {img: Profile, figcaption: 'Сулейманов Руслан'},
        3: {img: Profile, figcaption: 'Сулейманов Руслан'},
        4: {img: Profile, figcaption: 'Сулейманов Руслан'},
        5: {img: Profile, figcaption: 'Сулейманов Руслан'},
      }
    }
  }

  render() {
    const {participants} = this.state
    return (
      <div id='leaders' className={style.participants_container}>
        <h2 className={style.h2}>Участники</h2>
        <div className={style.carousel_container}>
          <div className={style.carousel}>
            {Object.values(participants).map(p =>
              (<figure>
                <img src={p.img} alt='user'/>
                <figcaption>{p.figcaption}</figcaption>
              </figure>))}
          </div>
        </div>
      </div>
    )
  }
}

