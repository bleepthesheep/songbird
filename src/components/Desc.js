import React from 'react'
import PropTypes from 'prop-types'

const Desc = ({ bird }) => {
  if (bird) {
    return (
      <div className="flex-1 desc">
        <div className="desc__header">
          <p>
            <img
              className="desc__image"
              height="120"
              src={bird.image}
              alt={bird.name + ', ' + bird.species}
            />
          </p>
          <div className="flex-1">
            {bird.name}
            <hr />
            {bird.species}
            <hr />
            <audio controls autoPlay={false} src={bird.audio}>
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
        <p className="mt-4">{bird.description}</p>
      </div>
    )
  }

  return (
    <div className="flex-1 desc">
      <p>
        Послушайте плеер. <br />
        Выберите птицу из списка
      </p>
    </div>
  )
}

Desc.propTypes = {
  bird: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    species: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    audio: PropTypes.string,
  }),
}

export default Desc
