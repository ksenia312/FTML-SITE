import React from 'react';
import style from './Header.module.scss';
import Logo from '../../assets/files/logo.png'

export default class Header extends React.Component {
  render() {
    return (
      <header className={style.header}>
        <div className={style.header_logo}>
            <a href={'#'}><img src={Logo} alt={'logo'}/></a>
        </div>
        <nav className={style.navbar}>
          <a className={style.navbarItem} href={'#'}>Главная</a>
          <a className={style.navbarItem} href={'#events'}>Мероприятия</a>
          <a className={style.navbarItem} href={'#leaders'}>Руководители</a>
          <a className={style.navbarItem} href={'#participants'}>Участники</a>
        </nav>
      </header>
    )
  }
}

