import React from 'react';
import style from './Header.module.scss';
import Logo from '../../assets/files/logo.png'

export default class Header extends React.Component {
  render() {
    return (
      <header className={style.header}>
        <div className={style.header_logo}>
            <img src={Logo} alt={'logo'}/>
        </div>
        <nav className={style.navbar}>
          <a className={style.navbarItem} href={'#'}>Главная</a>
          <a className={style.navbarItem} href={'#'}>Мероприятия</a>
          <a className={style.navbarItem} href={'#'}>Руководители</a>
          <a className={style.navbarItem} href={'#'}>Участники</a>
        </nav>
      </header>
    )
  }
}

