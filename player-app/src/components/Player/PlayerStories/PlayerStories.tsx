import React, {useRef, useEffect, useState} from "react";
import {IPlayerBase} from "../types";
import {usePreload} from "../../../hooks/usePreload"
import "./PlayerStories.scss"

interface IPlayerStories extends IPlayerBase{
	intervalDuration?: number
}

const PlayerStories = ({
		payload,
		isPlay,
		setIsPlay,
		setIsLoading,
		setIsError,
		intervalDuration = 1000}: IPlayerStories) => {
	const [count, setCount] = useState(0)
	const $frameRef = useRef<HTMLDivElement>(null)
	const tempIsPlay = useRef<boolean>(isPlay)
	const {isLoading, isError, imagesArray} = usePreload(payload)

	useEffect(() => {
		setIsLoading(true)

		if (isLoading) {
			setIsPlay(false)

		} else if (!isError) {
			setIsPlay(tempIsPlay.current)
			setIsLoading(false)
		}

		if (isError) {
			setIsLoading(false)
			setIsError(true)
		}

	}, [isLoading, isError])

	useEffect(() => {
		if (!isError && imagesArray && count <= imagesArray.length - 1 && $frameRef && $frameRef.current) {
			const $frameChildren = $frameRef.current.children[0]

			if ($frameChildren) {
				$frameRef.current.removeChild($frameChildren)
			}
			$frameRef.current.appendChild(imagesArray[count])
		} else {
			setIsPlay(false)
			setCount(0)
		}
	},[$frameRef, isError, count, imagesArray])

	useEffect(() => {
		let interval: number = 0

		if (isPlay) {
			interval = window.setInterval(() => {
				setCount(prevState => prevState + 1)
			}, intervalDuration)
		} else {
			clearInterval(interval)
		}

		return () => clearInterval(interval)
	},[isPlay, count])
	
	return (
		<div className="stories-player">
			<div className="stories-player__frame" ref={$frameRef}/>
		</div>
	)
}

export {PlayerStories}