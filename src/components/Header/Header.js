import React from 'react';
import style from './Header.module.scss';
import Logo from '../../assets/files/logo.png'
import classNames from 'classnames';
import {UserAgent} from "react-useragent";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      mobile:false
    }
  }

  showNavbar = () => {
    this.state.open ? this.setState({open:false}) : this.setState({open:true})
  }

  render() {
    const logoClassNames = classNames(style.navbar, {[style.open]: this.state.open});
    return (
      <header className={style.header}>
        <div  className={style.header_logo}>
            <img onClick={this.showNavbar} src={Logo} alt={'logo'}/>
        </div>
        <nav className={logoClassNames}>
          <a className={style.navbarItem} href={'#'}>Главная</a>
          <a className={style.navbarItem} href={'#events'}>Мероприятия</a>
          <a className={style.navbarItem} href={'#leaders'}>Руководители</a>
          <a className={style.navbarItem} href={'#participants'}>Участники</a>
        </nav>
      </header>
    )
  }
}

