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

  const [end, setEnd] = useState(false)

  const checkId = id => {
    if (id === birdsData[type][bird].id) {
      if (type === 5) {
        setEnd(true)
        return
      }

      setHide(false)

      return true
    }

    setPoints(points - 1)

    return false
  }

  const reset = () => {
    setScore(points + score)

    // reset state
    setType(type + 1)
    setBird(Math.floor(Math.random() * 6))
    setHide(true)
    setPoints(5)

    // reset classnames
    document
      .querySelectorAll('.option')
      .forEach(el => el.classList.remove('right', 'wrong'))
  }

  // useEffect(() => console.log("Don't cheat!\n"), [])
  // useEffect(() => console.log(birdsData[type][bird].name), [bird, type])
  // useEffect(() => console.log(points, score), [score, points])

  return (
    <div className="App">
      {!end ? (
        <div className="container">
          <Header active={type} reset={reset} score={score} />
          <Question
            birdName={birdsData[type][bird].name}
            audio={birdsData[type][bird].audio}
            image={birdsData[type][bird].image}
            hide={hide}
          />
          <div className="main-wrapper">
            <Options
              birds={birdsData[type]}
              checkId={checkId}
              won={!hide}
              setChosen={setChosen}
            />
            <Desc bird={chosen} />
          </div>

          <div className="reset">
            <button disabled={hide} onClick={() => reset()}>
              Next Round
            </button>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="win">
            <h1>Congratulations!</h1>
            <h2>Your score is {score} out of 30</h2>
            {score === 30 && <h2>This is the maximum score!</h2>}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
