import React, {useEffect, useRef, useState} from "react";
import {IPlayerBase} from "../types";

interface IPlayerVideo extends IPlayerBase{
	isMuted?: boolean,
}

const PlayerVideo = ({payload, isPlay, setIsPlay, isMuted}: IPlayerVideo) => {
	const $video = useRef<HTMLVideoElement>(null)

	useEffect(() => {
		if ($video && $video.current) {
			if (isPlay) {
				$video.current.play()
			} else {
				$video.current.pause()
			}

			$video.current.addEventListener("ended", () => {
				setIsPlay(false)
			})
		}
	},[$video, isPlay])

	useEffect(() => {
		if ($video && $video.current) {
			if (isMuted) {
				console.log("0")
				$video.current.volume = 0
			} else {
				$video.current.volume = 1
			}
		}
		console.log(isMuted)
	},[isMuted])
	
	return (
			<>
				{isMuted?.toString()}<br/>
				{isPlay?.toString()}
		<video ref={$video} className='video-player'>
			<source src={payload.toString()} type="video/mp4"/>
			<source src={payload.toString()} type="video/ogg"/>
			you browser don't support video!
		</video>
				</>
	)
}

export {PlayerVideo}