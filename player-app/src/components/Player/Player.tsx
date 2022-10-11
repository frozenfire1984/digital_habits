import {useEffect, useRef, useState} from "react";
import { ImPlay3, ImPause2, ImEnlarge2, ImShrink2, ImPlay2, ImPause, ImSpinner9 } from "react-icons/im";
import { FaWindowClose, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import {PlayerVideo} from "./PlayerVideo/PlayerVideo";
import {PlayerStories} from "./PlayerStories/PlayerStories";
import './Player.scss'

interface IPlayer {
	payload: string | string[],
	previewUrl?: string
	defaultFullscreen?: boolean
	autoStart?: boolean,
	defaultMuted?: boolean,
	controlsVisible?: boolean,
	closable?: boolean,
}

const Player = ({
		payload,
		previewUrl,
		defaultFullscreen = true,
		autoStart = true,
		defaultMuted = false,
		controlsVisible = true,
		closable = true
}: IPlayer) => {
	const [isPlay, setIsPlay] = useState(false)
	const [isFullscreen, setIsFullscreen] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [isError, setIsError] = useState(false)
	const [isOpen, setIsOpen] = useState(false)
	const [isMuted, setIsMuted] = useState(false)

	useEffect(() => {
		setIsFullscreen(defaultFullscreen)
		//setIsPlay(autoStart)
		setIsMuted(defaultMuted)
	},[defaultFullscreen, autoStart, defaultMuted])

	const startHandler = () => {
		//console.log("startHandler")
		if (!isOpen) {
			setIsOpen(true)
			setIsPlay(autoStart)
		}
	}

	const closeHandler = () => {
		setIsPlay(false)
		setIsFullscreen(defaultFullscreen)
		setIsOpen(false)
		setIsLoading(false)
		setIsError(false)
	}

	const fullscreenHandler = () => {
		setIsFullscreen(!isFullscreen)
	}

	const pauseHandler = () => {
		setIsPlay(!isPlay)
	}

	const muteHandler = () => {
		setIsMuted(!isMuted)
	}

	return (
		<div className='player'>
			{/*isMuted: {isMuted.toString()}<br/>
			isPlay: {isPlay.toString()}*/}
			{/*isLoading: {isLoading.toString()}*/}
			<div className="player__preview-holder">
				{previewUrl &&
					<img className="player__preview-img" src={previewUrl} alt=""/>
				}
				<button className="btn btn_start" onClick={startHandler}>
					<ImPlay3/>
				</button>
			</div>

			{isOpen &&
			<div className={`player__window ${isFullscreen ? 'player__window_fullscreen' : ''}`}>

				{closable &&
				<button className='btn btn_close' onClick={closeHandler}>
					<FaWindowClose/>
				</button>
				}

				<div className={`player__holder `}>
					{typeof payload === "string" &&
						<PlayerVideo
							payload={payload}
							isPlay={isPlay}
							setIsPlay={setIsPlay}
							isMuted={isMuted}
							isLoading={isLoading}
							setIsLoading={setIsLoading}
							setIsError={setIsError}
						/>
					}

					{typeof payload === "object" &&
						<PlayerStories
							payload={payload}
							isPlay={isPlay}
							setIsPlay={setIsPlay}
							setIsLoading={setIsLoading}
							setIsError={setIsError}
						/>
					}

					{isLoading &&
					<div className="player__loading">
						<ImSpinner9 className="player__loading-spinner" />
					</div>
					}

					{isError &&
					<div className="player__error">
						<span className="player__error-message">Loading error</span>
					</div>
					}

				</div>
				{controlsVisible &&
				<div className={`player__controls ${isLoading || isError ? 'player__controls_disabled' : ''}`}>
					<button
						className="btn"
						onClick={pauseHandler}
					>
						{isPlay ? <ImPause/> : <ImPlay2/>}
					</button>

					<button
						className="btn"
						onClick={fullscreenHandler}
					>
						{isFullscreen ? <ImShrink2/> : <ImEnlarge2/>}
					</button>

					{typeof payload === "string" &&
					<button
						className="btn"
						onClick={muteHandler}
					>
						{isMuted ? <FaVolumeMute/> : <FaVolumeUp/>}
					</button>
					}
				</div>
				}
			</div>
			}
		</div>
	)
}

export default Player