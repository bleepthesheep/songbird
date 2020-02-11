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
        setScore(score + points)
        setEnd(true)
        return
      }

      setHide(false)

      return true
    }

    setPoints(points - 1)

    return false
  }

  const reset = (resetScore = false) => {
    if (resetScore) {
      setScore(0)
      setType(0)
      setHide(false)
      setEnd(false)
    } else {
      setScore(points + score)
      setType(type + 1)
    }

    // reset state
    setChosen(null)
    setBird(Math.floor(Math.random() * 6))
    setHide(true)
    setPoints(5)

    // reset classnames
    document
      .querySelectorAll('.option')
      .forEach(el => el.classList.remove('right', 'wrong'))
  }

  React.useEffect(() => console.log(birdsData[type][bird].name), [bird, type])

  return (
    <div className="App">
      <div className="container">
        <Header active={type} reset={reset} score={score} />
        {end ? (
          <div className="container">
            <div className="win">
              <h1>Поздравляем!</h1>
              <h2>
                Вы прошли викторину и набрали {score} из 30 возможных баллов
              </h2>
              <div className="reset">
                <button onClick={() => reset(true)}>Начать заново</button>
              </div>
            </div>
          </div>
        ) : (
          <>
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

            <div className="reset full">
              <button disabled={hide} onClick={() => reset()}>
                Следующий уровень
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default App
