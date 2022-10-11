import React, {useState, useEffect, useRef, useLayoutEffect} from 'react';
import logo from './logo.svg';
import './styles/App.scss';
import {Player} from './components/Player/'

function App() {
	const [tab, setTab] = useState(1)

	return (
			<div className="app">
				<ul className="app__heading tabs">
					<li className={`tabs__item ${tab === 1 ? 'tabs__item_active' : ''}`}>
						<button className="btn" onClick={() => {
							setTab(1)
						}}>Player
						</button>
					</li>
					<li className={`tabs__item ${tab === 2 ? 'tabs__item_active' : ''}`}>
						<button className="btn" onClick={() => {
							setTab(2)
						}}>Stories
						</button>
					</li>
				</ul>


				<div className="app__content">
					{(() => {
						switch (tab) {
							case 1:
								return (
										<div className="player-wrapper">
											<Player
													//payload="./videos/test.ogm"
													payload="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
													//previewUrl="https://placeimg.com/640/480/any"
													defaultFullscreen={false}
													autoStart={true}
											/>
										</div>
								);

							case 2:
								return (
										<div className="player-wrapper">
											<Player
													payload={[
														/*"https://placeimg.com/640/480/nature",
														"https://placeimg.com/640/480/people",
														"https://placeimg.com/640/480/tech",
														"https://placeimg.com/640/480/arch",
														"https://placeimg.com/640/480/animals",
														"https://placeimg.com/640/480/any/grayscale",*/
														"https://via.placeholder.com/150/0000ff/808080?text=00",
														"https://via.placeholder.com/150/ff0000/808080?text=1",
														"https://via.placeholder.com/150/0000ff/808080?text=2",
														"https://via.placeholder.com/150/ff0000/808080?text=3",
														"https://via.placeholder.com/150/0000ff/808080?text=4",
														"https://via.placeholder.com/150/ff0000/808080?text=5",
													]}
													//preview_url="https://placeimg.com/640/480/any"
													//autoStart={false}
													defaultFullscreen={false}
											/>
										</div>
								);
							default:
								return 'foo';
						}
					})()}
				</div>

			</div>
	);
}

export default App;
