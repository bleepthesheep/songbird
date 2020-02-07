import React, { useState } from 'react';
import '../assets/css/question.css';
import noimage from '../assets/img/noimage.jpg';

function Question({ birdName }) {
  // birdName = 'Corvus corax';

  const audioMsg = 'Play';

  const [audioBlock, setAudioBlock] = useState(
    <div className="question__audio"></div>
  );

  const toggleAudio = () => {
    const a = document.getElementById('audio');
    console.log(a);
    a.play();
  };

  fetch(
    encodeURI(
      `https://cors-anywhere.herokuapp.com/https://www.xeno-canto.org/api/2/recordings?query=${birdName}`,
      {
        headers: {
          Origin: 'xeno-canto.org'
        }
      }
    )
  )
    .then(res => {
      if (res.ok == false) {
        console.log(res);
        return;
      }
      setAudioBlock(
        <div className="hide" id="audio">
          <audio controls>
            <source src={res.recordings[0].file} />
            Your browser does not support the audio element.
          </audio>
        </div>
      );
    })
    .catch(err => console.log(err));

  return (
    <div className="question">
      <div className="question__image-wrapper">
        <img src={noimage} alt="" className="question__image" />
      </div>

      <div className="question__main">
        <div className="question__name">{birdName}</div>
        <hr />
        {audioBlock}
        <button className="btn audio-btn" onClick={toggleAudio}>
          {audioMsg}
        </button>
      </div>
    </div>
  );
}

export default Question;
