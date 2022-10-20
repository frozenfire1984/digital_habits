import React, {useEffect, useState} from "react";
import { ImPlay3, ImEnlarge2, ImShrink2, ImPlay2, ImPause, ImSpinner9 } from "react-icons/im";
import { IoIosCloseCircle } from "react-icons/io";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import {PlayerVideo} from "./PlayerVideo/PlayerVideo";
import {PlayerStories} from "./PlayerStories/PlayerStories";
import {Preview} from "../Preview/Preview";
import './Player.scss'
import {IPlayer} from "./types";

const Player = ({
		payload,
		title = "",
		previewUrl = "",
		defaultFullscreen = true,
		autoStart = true,
		defaultMuted = false,
		controlsVisible = true,
		closable = true,
		intervalDuration
}: IPlayer) => {
	const [isPlay, setIsPlay] = useState(false)
	const [isFullscreen, setIsFullscreen] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [isError, setIsError] = useState(false)
	const [isOpen, setIsOpen] = useState(false)
	const [isMuted, setIsMuted] = useState(false)

	useEffect(() => {
		setIsFullscreen(defaultFullscreen)
		setIsMuted(defaultMuted)
	},[defaultFullscreen, autoStart, defaultMuted])

	const startHandler = () => {
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
			<div className="player__preview-holder">
				{title &&
				<div className="player__title">{title}</div>
				}

				{previewUrl &&
				<Preview url={previewUrl}/>
				}
				<button className="btn btn_start" onClick={startHandler}>
					<ImPlay3/>
				</button>
			</div>

			{isOpen &&
			<div className={`player__window ${isFullscreen ? 'player__window_fullscreen' : ''}`}>

				{closable &&
				<button className='btn btn_close' onClick={closeHandler}>
					<IoIosCloseCircle/>
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
							intervalDuration={intervalDuration}
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
					<button className="btn" onClick={pauseHandler}>
						{isPlay ? <ImPause/> : <ImPlay2/>}
					</button>

					<button className="btn" onClick={fullscreenHandler}>
						{isFullscreen ? <ImShrink2/> : <ImEnlarge2/>}
					</button>

					{typeof payload === "string" &&
					<button className="btn" onClick={muteHandler}>
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