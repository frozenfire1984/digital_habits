import {useRef, useEffect, useState} from "react";
import {IPlayerBase} from "../types";
import "./PlayerStories.scss"

const PlayerStories = ({payload, isPlay, setIsPlay, intervalDuration = 0}: IPlayerBase) => {
	const [isLoading, setIsLoading] = useState(false)
	const [imagesArray, setImagesArray] = useState<any[]>([])
	const [imagesArrayLength, setImagesArrayLength] = useState<number | null>(null)
	const [isError, setIsError] = useState(false)
	const divRef = useRef<any>(null)
	
	let promises: Promise<any>[] | null = null
	const tempIsPlay = isPlay
	
	useEffect(() => {
		setIsLoading(true)
		setIsPlay(false)
		if (typeof payload !== "string") {
			promises = payload.map((url: string) => {
				return new Promise((resolve, reject) => {
					let img = new Image()
					img.src = url
					img.onload = () => {
						resolve(img)
					}
					
					img.onerror = () => {
						reject(url)
					}
				})
			})
		}
		
		// @ts-ignore
		Promise.all(promises)
			.then((data: any) => {
				setImagesArray(data)
				setImagesArrayLength(data.length)
				setIsPlay(tempIsPlay)
			})
			.catch((e) => {
				console.log(e)
				setIsError(true)
			})
			.finally(() => {
				setIsLoading(false)
			})
	},[payload])
	
	const [count, setCount] = useState(0)
	
	useEffect(() => {
		if (imagesArray && imagesArrayLength && count <= imagesArrayLength - 1) {
			if (divRef.current.children[0]) {
				divRef.current.removeChild(divRef.current.children[0])
			}
			divRef.current.appendChild(imagesArray[count])
		} else {
			setIsPlay(false)
			setCount(0)
		}
	},[divRef, count, imagesArray, imagesArrayLength])
	
	useEffect(() => {
		let interval: any | null = null
		
		if (isPlay) {
			interval = setInterval(() => {
				setCount(prevState => prevState + 1)
			}, intervalDuration)
		} else {
			setIsPlay(false)
			clearInterval(interval)
		}
		
		return () => clearInterval(interval)
	},[isPlay, count])
	
	if (isLoading) {
		return <div>...loading</div>
	}
	
	return (
		<div className="stories-player">
{/*			{isLoading && "...loading"}<br/>
			tempIsPlay: {tempIsPlay.toString()}<br/>
			isPlay: {isPlay.toString()}<br/>
			{count}*/}
			<div className="stories-player__frame" ref={divRef}/>
		</div>
	)
}

export {PlayerStories}