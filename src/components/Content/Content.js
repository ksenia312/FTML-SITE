import React from 'react';
import style from './Content.module.scss';
import Intro from "../Intro/Intro";
import Events from "../Events/Events";
import Leaders from "../Leaders/Leaders";


export default class Content extends React.Component {
  render() {
    return (
      <main className={style.content}>
        <Intro/>
        <Events/>
        <Leaders/>
      </main>
    )
  }
}

