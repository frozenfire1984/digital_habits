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
	autoStart?: boolean
}

const Player = ({payload, previewUrl, defaultFullscreen = true, autoStart = true}: IPlayer) => {
	const [isPlay, setIsPlay] = useState(false)
	const [isFullscreen, setIsFullscreen] = useState(false)
	const [isOpen, setIsOpen] = useState(false)
	//const [videoCurrent, setVideoCurrent] = useState<any>(null)
	const [isMuted, setIsMuted] = useState(false)

	console.log("defaultFullscreen")
	console.log(defaultFullscreen)
	
	useEffect(() => {
		
		setIsFullscreen(defaultFullscreen)
		
		/*return () => {
			setIsPlay(false)
			setIsFullscreen(defaultFullscreen)
			setIsOpen(false)
			setIsMuted(false)
		}*/
	},[])
	
	/*useEffect(() => {
		if (isPlay) {
			videoCurrent?.play()
		} else {
			videoCurrent?.pause()
		}
	}, [isPlay, videoCurrent])*/
	
	/*useEffect(() => {
		if (isMuted) {
			videoCurrent.muted = true
		} else {
			//some reason don't work!
			//videoCurrent.muted = false
		}
	}, [isMuted, videoCurrent])*/
	
	/*useEffect(() => {
		setVideoCurrent($video.current)
	},[isOpen])*/
	
	/*useEffect(() => {
		videoCurrent?.addEventListener("ended", () => {
			setIsPlay(false)
		})
	},[videoCurrent])*/
	
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
			{isFullscreen.toString()}
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
						/>
					}
					
					{typeof payload === "object" &&
						<PlayerStories
							payload={payload}
							isPlay={isPlay}
							setIsPlay={setIsPlay}
						/>
					}
					
					<button className='btn btn_video-close' onClick={closeHandler}>
						<FaWindowClose />
					</button>
				</div>
				<div className="player__controls">
					<button className="btn" onClick={pauseHandler}>{isPlay ? <ImPause/> : <ImPlay2/>}</button>
					<button className="btn" onClick={fullscreenHandler}>{isFullscreen ? <ImShrink2/> : <ImEnlarge2/>}</button>
					{typeof payload === "string" && <button className="btn" onClick={muteHandler}>{isMuted ? <FaVolumeMute/> : <FaVolumeUp/>}</button>}
				</div>
			</div>
			}
		</div>
	)
}

export default Player