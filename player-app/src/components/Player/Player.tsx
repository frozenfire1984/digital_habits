import {useEffect, useRef, useState} from "react";
import { ImPlay3, ImPause2, ImEnlarge2, ImShrink2, ImPlay2, ImPause } from "react-icons/im";
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
	controlsVisible?: boolean
}

const Player = ({payload, previewUrl, defaultFullscreen = true, autoStart = true, defaultMuted = false, controlsVisible = true}: IPlayer) => {
	const [isPlay, setIsPlay] = useState(false)
	const [isFullscreen, setIsFullscreen] = useState(false)
	const [isOpen, setIsOpen] = useState(false)
	const [isMuted, setIsMuted] = useState(false)

	useEffect(() => {
		setIsFullscreen(defaultFullscreen)
		setIsPlay(autoStart)
		setIsMuted(defaultMuted)
	},[defaultFullscreen, autoStart, defaultMuted])

	const startHandler = () => {
		console.log("startHandler")
		if (!isOpen) {
			setIsOpen(true)
			setIsPlay(autoStart)
		}
	}

	const closeHandler = () => {
		console.log("closeHandler")
		setIsPlay(false)
		setIsFullscreen(defaultFullscreen)
		setIsOpen(false)
	}

	const fullscreenHandler = () => {
		console.log("fullscreenHandler")
		setIsFullscreen(!isFullscreen)
	}

	const pauseHandler = () => {
		console.log("pauseHandler")
		setIsPlay(!isPlay)
	}

	const muteHandler = () => {
		console.log("muteHandler")
		setIsMuted(!isMuted)
	}

	return (
		<div className='player'>
			isMuted: {isMuted.toString()}
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
				<div className="player__video-holder">
					{typeof payload === "string" &&
						<PlayerVideo
							payload={payload}
							isPlay={isPlay}
							setIsPlay={setIsPlay}
							isMuted={isMuted}
						/>
					}

					{typeof payload === "object" &&
						<PlayerStories
							payload={payload}
							isPlay={isPlay}
							setIsPlay={setIsPlay}
							//isMuted={isMuted}
							//setIsMuted={setIsMuted}
						/>
					}

					<button className='btn btn_video-close' onClick={closeHandler}>
						<FaWindowClose />
					</button>
				</div>
				{controlsVisible &&
				<div className="player__controls">
					<button className="btn" onClick={pauseHandler}>{isPlay ? <ImPause/> : <ImPlay2/>}</button>
					<button className="btn" onClick={fullscreenHandler}>{isFullscreen ? <ImShrink2/> : <ImEnlarge2/>}</button>
					{typeof payload === "string" &&
					<button className="btn" onClick={muteHandler}>{isMuted ? <FaVolumeMute/> : <FaVolumeUp/>}</button>
					}
				</div>
				}
			</div>
			}
		</div>
	)
}

export default Player