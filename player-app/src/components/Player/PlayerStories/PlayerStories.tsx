import {useRef, useEffect, useState} from "react";
import {IPlayerBase} from "../types";
import {usePreload} from "../../../hooks/usePreload"
import "./PlayerStories.scss"

interface IPlayerStories extends IPlayerBase{
	intervalDuration?: number
}

interface IPromiseData {
	[key: number]: object,
	length: number
}

const PlayerStories = ({payload, isPlay, setIsPlay, intervalDuration = 1000}: IPlayerStories) => {
	const [isLoading, setIsLoading] = useState(false)
	const [imagesArray, setImagesArray] = useState<HTMLImageElement[]>([])
	const [imagesArrayLength, setImagesArrayLength] = useState<number>(0)
	const [isError, setIsError] = useState(false)
	const divRef = useRef<HTMLDivElement>(null)
	
	let promises: Promise<object>[] | null = null
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
	},[payload])

	useEffect(() => {
		if (promises?.length) {
			Promise.all(promises)
					.then((data: IPromiseData | any) => {
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
		}
	},[promises])
	


	const [count, setCount] = useState(0)

	useEffect(() => {
		if (imagesArray && imagesArrayLength && count <= imagesArrayLength - 1 && divRef && divRef.current) {
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
		let interval: number = 0

		if (isPlay) {
			interval = window.setInterval(() => {
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
			<div className="stories-player__frame" ref={divRef}/>
		</div>
	)
}

export {PlayerStories}