import React from 'react'
import PropTypes from 'prop-types'

import '../assets/css/question.scss'
import noimage from '../assets/img/noimage.jpg'

function Question({ birdName, audio, hide, image }) {
  return (
    <div className="question">
      <div className="question__image-wrapper">
        {hide ? (
          <img height="150" src={noimage} alt="" className="question__image" />
        ) : (
          <img height="150" src={image} alt="" className="question__image" />
        )}
      </div>

      <div className="question__main">
        <div className="question__name">{hide ? '********' : birdName}</div>
        <hr />
        <div className="audio-container">
          <audio src={audio} controls>
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>
  )
}

Question.propTypes = {
  birdName: PropTypes.string,
  audio: PropTypes.string,
  hide: PropTypes.bool,
  image: PropTypes.string,
}

export default Question
