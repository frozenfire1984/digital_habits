import {useEffect, useRef, useState} from "react";
import { ImPlay3, ImPause2, ImEnlarge2, ImShrink2, ImPlay2, ImPause } from "react-icons/im";
import { FaWindowClose, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import './Player.scss'

interface IPlayer {
	video_url: string,
	preview_url?: string
}

const Player = (props: IPlayer) => {
	const [isPlay, setIsPlay] = useState(false)
	const [isFullscreen, setIsFullscreen] = useState(false)
	const [isOpen, setIsOpen] = useState(false)
	const [videoCurrent, setVideoCurrent] = useState<any>(null)
	const [isMuted, setIsMuted] = useState(false)
	const $video = useRef<any>(null)
	
	useEffect(() => {
		if (isPlay) {
			videoCurrent?.play()
		} else {
			videoCurrent?.pause()
		}
	}, [isPlay, videoCurrent])
	
	useEffect(() => {
		if (isMuted) {
			videoCurrent.muted = true
		} else {
			//some reason don't work!
			//videoCurrent.muted = false
		}
	}, [isMuted, videoCurrent])
	
	useEffect(() => {
		setVideoCurrent($video.current)
	},[isOpen])
	
	useEffect(() => {
		videoCurrent?.addEventListener("ended", () => {
			setIsPlay(false)
		})
	},[videoCurrent])
	
	const startHandler = () => {
		if (!isOpen) {
			setIsOpen(true)
			setIsFullscreen(true)
			setIsPlay(true)
		}
	}
	
	const closeHandler = () => {
		setIsPlay(false)
		setIsFullscreen(false)
		setIsOpen(false)
		setVideoCurrent(null)
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
				{props.preview_url &&
					<img className="player__preview-img" src={props.preview_url} alt=""/>
				}
				<button className="btn btn_start" onClick={startHandler}>
					<ImPlay3/>
				</button>
			</div>
			
			{isOpen &&
			<div className={`player__window ${isFullscreen ? 'player__window_fullscreen' : ''}`}>
				<div className="player__video-holder">
					<video ref={$video} className='player__video'>
						<source src={props.video_url} type="video/mp4"/>
						<source src={props.video_url} type="video/ogg"/>
					</video>
					<button className='btn btn_video-close' onClick={closeHandler}>
						<FaWindowClose />
					</button>
				</div>
				<div className="player__controls">
					<button className="btn" onClick={pauseHandler}>{isPlay ? <ImPause/> : <ImPlay2/>}</button>
					<button className="btn" onClick={fullscreenHandler}>{isFullscreen ? <ImShrink2/> : <ImEnlarge2/>}</button>
					<button className="btn" onClick={muteHandler}>{isMuted ? <FaVolumeMute/> : <FaVolumeUp/>}</button>
				</div>
			</div>
			}
		</div>
	)
}

export default Player