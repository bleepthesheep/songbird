import React, { useState } from 'react'
import Question from './components/Question'
import Header from './components/Header'
import Options from './components/Options'
import Desc from './components/Desc'
import './assets/css/main.scss'

import birdsData from './birds'

function App() {
  const [type, setType] = useState(0)
  const [bird, setBird] = useState(Math.floor(Math.random() * 6))
  const [hide, setHide] = useState(true)
  const [chosen, setChosen] = useState(null)
  const [score, setScore] = useState(0)
  const [points, setPoints] = useState(5)

  const checkId = id => {
    if (id === birdsData[type][bird].id) {
      setScore(points + score)
      setHide(false)
      return true
    }

    setPoints(points - 1)

    return false
  }

  const reset = (newtype = 0) => {
    setType(newtype)
    setBird(Math.floor(Math.random() * 6))
    setHide(true)
    // setChosen(null)
    setPoints(5)

    document
      .querySelectorAll('.option')
      .forEach(el => el.classList.remove('right', 'wrong'))
  }

  return (
    <div className="App">
      <div className="container">
        <Header active={type} reset={reset} score={score} />
        <Question
          birdName={birdsData[type][bird].name}
          audio={birdsData[type][bird].audio}
          image={birdsData[type][bird].image}
          hide={hide}
        />
        <div className="flex">
          <Options
            birds={birdsData[type]}
            checkId={checkId}
            won={!hide}
            setChosen={setChosen}
          />
          <Desc bird={chosen} />
        </div>

        <div className="reset">
          <button disabled={hide} onClick={e => reset()}>
            Next Round
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
