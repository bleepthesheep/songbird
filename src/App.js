import React from 'react';

import Question from './components/Question';

import './assets/css/main.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Question birdName="Corvus corax" />
      </div>
    </div>
  );
}

export default App;
