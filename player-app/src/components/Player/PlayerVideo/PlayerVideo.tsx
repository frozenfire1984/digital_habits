import {useEffect, useRef, useState} from "react";
import {IPlayerBase} from "../types";


const PlayerVideo = ({payload, isPlay, setIsPlay, isMuted, setIsMuted, intervalDuration}: IPlayerBase) => {
	const [videoCurrent, setVideoCurrent] = useState<any>(null)
	const $video = useRef<any>(null)
	
	useEffect(() => {
		if (isPlay) {
			videoCurrent?.play()
		} else {
			videoCurrent?.pause()
		}
	}, [isPlay, videoCurrent])


	/*useEffect(() => {
		if (isMuted) {
			videoCurrent.muted = true
		} else {
			//some reason don't work!
			videoCurrent.muted = false
		}
	}, [isMuted, videoCurrent])*/
	
	useEffect(() => {
		setVideoCurrent($video.current)
	},[])
	
	useEffect(() => {
		videoCurrent?.addEventListener("ended", () => {
			setIsPlay(false)
		})
	},[videoCurrent])
	
	useEffect(() => {
		return () => {
			setVideoCurrent(null)
		}
	},[])
	
	return (
		<video ref={$video} className='video-player'>
			<source src={payload.toString()} type="video/mp4"/>
			<source src={payload.toString()} type="video/ogg"/>
			you browser don't support video!
		</video>
	)
}

export {PlayerVideo}