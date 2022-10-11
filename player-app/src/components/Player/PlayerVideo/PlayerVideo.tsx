import React, {useEffect, useRef, useState} from "react";
import {IPlayerBase} from "../types";
import "./PlayerVideo.scss"

interface IPlayerVideo extends IPlayerBase{
	isMuted?: boolean,
	isLoading: boolean
}

const PlayerVideo = ({
	 payload,
	 isPlay,
	 setIsPlay,
	 isLoading,
	 setIsLoading,

	 setIsError,
	 isMuted}: IPlayerVideo) => {
	//const [isLoading, setIsLoading] = useState(false)
	//const [isError, setIsError] = useState(false)
	const $videoRef = useRef<HTMLVideoElement>(null)


	useEffect(() => {
		setIsLoading(true)
		if ($videoRef && $videoRef.current) {
			$videoRef.current.addEventListener("canplaythrough", () => {
				setIsLoading(false)
			})
		}
	},[$videoRef])

	useEffect(() => {
		if ($videoRef && $videoRef.current && !isLoading) {
			if (isPlay) {
				$videoRef.current.play()
			} else {
				$videoRef.current.pause()
			}

			$videoRef.current.addEventListener("ended", () => {
				setIsPlay(false)
			})

			$videoRef.current.addEventListener("error", () => {
				console.log("error")
				setIsError(true)
				setIsPlay(false)
				setIsLoading(false)
			})

			$videoRef.current.addEventListener("stalled", () => {
				console.log("stalled")
				setIsError(true)
				setIsPlay(false)
				setIsLoading(false)
			})
		}
	},[$videoRef, isPlay, isLoading])

	useEffect(() => {
		if ($videoRef && $videoRef.current) {
			if (isMuted) {
				console.log("0")
				$videoRef.current.volume = 0
			} else {
				$videoRef.current.volume = 1
			}
		}
		console.log(isMuted)
	},[isMuted])


	
	return (
			<>

				<video ref={$videoRef}  src={payload.toString()}  className='video-player'>
					you browser don't support video!
				</video>
			</>
	)
}

export {PlayerVideo}