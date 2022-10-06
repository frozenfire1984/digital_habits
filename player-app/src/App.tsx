import React, {useState, useEffect, useRef} from 'react';
import logo from './logo.svg';
import './styles/App.scss';
import {Player} from './components/Player/'

function App() {
  const [tab, setTab] = useState(2)
  
  return (
    <div className="app">
      <ul className="app__heading tabs">
        <li className={`tabs__item ${tab === 1 ? 'tabs__item_active' : ''}`}>
          <button className="btn" onClick={() => {setTab(1)}}>Player</button>
        </li>
        <li className={`tabs__item ${tab === 2 ? 'tabs__item_active' : ''}`}>
          <button className="btn"  onClick={() => {setTab(2)}}>Stories</button>
        </li>
        <li className={`tabs__item ${tab === 3 ? 'tabs__item_active' : ''}`}>
          <button className="btn"  onClick={() => {setTab(3)}}>Foo</button>
        </li>
      </ul>
      
    
      <div className="app__content">
      {(() => {
        switch(tab) {
          case 1:
            return (
              <div className="player-wrapper">
                <Player
                  payload="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                  preview_url="https://placeimg.com/640/480/any"
                  default_fullscreen={true}
                />
              </div>
            );

          case 2:
            return (
              <div className="player-wrapper">
                <Player
                  payload={[
                    //"https://placeimg.com/640/480/nature",
                    //"https://placeimg.com/640/480/people",
                    //"https://placeimg.com/640/480/tech",
                    //"https://placeimg.com/640/480/arch"/
                    "https://via.placeholder.com/150/0000FF/808080?text=foo",
                    "https://via.placeholder.com/150/0000FF/808080?text=bar",
                    "https://via.placeholder.com/150/0000FF/808080?text=baz",
                    "https://via.placeholder.com/150/0000FF/808080?text=1",
                    "https://via.placeholder.com/150/0000FF/808080?text=2",
                    /*"https://via.placeholder.com/150/0000FF/808080?Text=3",
                    "https://via.placeholder.com/150/0000FF/808080?Text=4",
                    "https://via.placeholder.com/150/0000FF/808080?Text=5",
                    "https://via.placeholder.com/150/0000FF/808080?Text=6",
  
                    "https://via.placeholder.com/150/0000FF/808080?Text=7",
                    "https://via.placeholder.com/150/0000FF/808080?Text=8",
                    "https://via.placeholder.com/150/0000FF/808080?Text=9",
  
                    "https://via.placeholder.com/150/0000FF/808080?Text=10",
                    "https://via.placeholder.com/150/0000FF/808080?Text=11",
                    "https://via.placeholder.com/150/0000FF/808080?Text=12",
  
                    "https://via.placeholder.com/150/0000FF/808080?Text=13",
                    "https://via.placeholder.com/150/0000FF/808080?Text=14",
                    "https://via.placeholder.com/150/0000FF/808080?Text=15",*/
                    
                    
                  ]}
                  //preview_url="https://placeimg.com/640/480/any"
                  default_fullscreen={false}
                />
              </div>
            );
          case 3:
            return (
              <div>3</div>
            )
          default:
            return 'foo';
        }
      })()}
      </div>
      
    </div>
  );
}

export default App;
