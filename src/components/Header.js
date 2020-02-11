import React from 'react'
import PropTypes from 'prop-types'

import logo from '../assets/img/logo.svg'

import '../assets/css/header.scss'

const Header = ({ score = 0, active = 0 }) => {
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
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="score">Score: {score}</div>
      </div>
      <div className="menu">
        {types.map((type, index) => (
          <div
            key={index}
            // onClick={() => reset(index)}
            className={index === active ? 'item active' : 'item'}
          >
            <span>{type}</span>
          </div>
        ))}
      </div>
    </header>
  )
}

Header.propTypes = {
  score: PropTypes.number,
  active: PropTypes.number,
}

export default Header
