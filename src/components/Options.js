import React from 'react'
import '../assets/css/options.scss'

const Options = ({ birds, checkId, won, setChosen }) => {
  const handleClick = (e, bird) => {
    setChosen(birds[bird.id - 1])

    if (won) return

    if (checkId(bird.id)) {
      e.target.closest('.option').classList.add('right')
    } else {
      e.target.closest('.option').classList.add('wrong')
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

export default Options
