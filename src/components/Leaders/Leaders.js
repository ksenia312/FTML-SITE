import React from 'react';
import style from './Leaders.module.scss';
import Leader1 from '../../assets/images/leader1.jpg'
import Leader2 from '../../assets/images/leader2.jpg'
import Leader3 from '../../assets/images/leader3.jpg'
import Leader4 from '../../assets/images/leader4.jpg'
import Line from '../../assets/files/line.png'
import Arrow_left from '../../assets/files/arrow_left.png'
import Arrow_right from '../../assets/files/arrow_right.png'


export default class Leaders extends React.Component {
  render() {
    return (
      <div className={style.leaders_container}>
        <h2 className={style.h2}>Руководители</h2>
        <div className={style.carousel_container}>
          <div className={style.carousel}>
            <figure>
              <img src={Leader1} alt='leader1'/>
              <figcaption>Сулейманов Руслан</figcaption>
            </figure>
            <figure>
              <img src={Leader2} alt='leader2'/>
              <figcaption>Береснев Андрей</figcaption>
            </figure>
            <figure>
              <img src={Leader3} alt='leader3'/>
              <figcaption>Прохоров Николай</figcaption>
            </figure>
            <figure>
              <img src={Leader4} alt='leader4'/>
              <figcaption>Прохоров Николай</figcaption>
            </figure>
          </div>
          <div className={style.switch}>
            <button><img src={Arrow_left} alt='arrow left'/></button>
            <><img className={style.line} src={Line} alt='line'/></>
            <button><img src={Arrow_right} alt='arrow right'/></button>
          </div>
        </div>
      </div>
    )
  }
}

