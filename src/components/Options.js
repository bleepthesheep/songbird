import React from 'react'
import PropTypes from 'prop-types'

import '../assets/css/options.scss'

const Options = ({ birds, checkId, won, setChosen }) => {
  const handleClick = (e, bird) => {
    let option = e.target.closest('.option')

    setChosen(birds[bird.id - 1])

    if (
      won ||
      option.classList.contains('right') ||
      option.classList.contains('wrong')
    )
      return

    if (checkId(bird.id)) {
      option.classList.add('right')
    } else {
      option.classList.add('wrong')
    }
  }

  let elements = birds.map(bird => (
    <div className="option" key={bird.id} onClick={e => handleClick(e, bird)}>
      <span className="indicator"></span>
      <span>{bird.name}</span>
    </div>
  ))

  return <div className="options flex-1">{elements}</div>
}

Options.propTypes = {
  birds: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      species: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
      audio: PropTypes.string,
    })
  ),
  checkId: PropTypes.func,
  setChosen: PropTypes.func,
  won: PropTypes.bool,
}

export default Options
