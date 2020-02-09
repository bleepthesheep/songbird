import React from 'react'

const Desc = ({ bird }) => {
  if (bird) {
    return (
      <div className="flex-1 desc">
        <div className="flex">
          <img
            height="120"
            src={bird.image}
            alt={bird.name + ', ' + bird.species}
          />

          <div className="flex-1 ml-4">
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

export default Desc
