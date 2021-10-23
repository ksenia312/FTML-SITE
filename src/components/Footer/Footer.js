import React from 'react';
import style from './Footer.module.scss';
import Button from "../Button/Button";
import Vk from '../../assets/files/vk.png'

export default class Footer extends React.Component {
  render() {
    return (
      <footer className={style.footer}>
        <h2 className={style.h2}>Будем рады видеть <br/> тебя в клубе</h2>
        <Button content={'Вступить в группу, чтобы быть в курсе всех событий'}/>
      </footer>
    )
  }
}

