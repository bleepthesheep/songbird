import React from 'react'
import logo from '../assets/img/logo.svg'

import '../assets/css/header.scss'

const Header = ({ score = 0, reset, active = 0 }) => {
  let types = [
    'Разминка',
    'Воробьиные',
    'Лесные птицы',
    'Певчие птицы',
    'Хищные птицы',
    'Морские птицы',
  ]

  return (
    <header className="header">
      <div className="top">
        <div className="logo-wrapper">
          <img src={logo} height="60" className="logo" alt="logo" />
        </div>
        <div className="score">Score: {score}</div>
      </div>
      <div className="menu">
        {types.map((type, index) => (
          <div
            onClick={() => reset(index)}
            className={index === active ? 'item active' : 'item'}
          >
            <a href={'#' + index}>{type}</a>
          </div>
        ))}
      </div>
    </header>
  )
}

export default Header
