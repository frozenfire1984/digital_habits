import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {Player} from './components/Player/'

function App() {
  return (
    <div className="App">
      <div className="player-wrapper">
        <Player
          video_url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          preview_url="https://placeimg.com/640/480/any"
        />
      </div>
    </div>
  );
}

export default App;
