import {useRef, useEffect, useState} from "react";

interface IArray {

}


const StoriesService = (props: any) => {
	
	const {payload, isPlay, setIsPlay, auto_start, style = {}, ...datum} = props
	
	const [isLoading, setIsLoading] = useState(false)
	const [imagesArray, setImagesArray] = useState<any>(null)
	const [imagesArrayLength, setImagesArrayLength] = useState<number | null>(null)
	const [isError, setIsError] = useState(false)
	//const divRef = useRef<any>(null)
	
	useEffect(() => {
		setIsLoading(true)
		let promises = payload.map((url: string) => {
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
		
		Promise.all(promises)
			.then((data: any) => {
				setImagesArray(data)
				setImagesArrayLength(data.length)
			})
			.catch((e) => {
				console.log(e)
				setIsError(true)
			})
			.finally(() => {
				setIsLoading(false)
			})
	},[payload])
	
	useEffect(() => {
		console.log(imagesArray)
	},[imagesArray])
	
	
	
	const [count, setCount] = useState(0)
	const divRef = useRef<any>(null)
	
	
	let interval: any
	
	const timer = () => {
		interval = setInterval(() => {
			setCount(count + 1)
			console.log("!")
		}, 1000);
	}
	
	useEffect(() => {

		if (imagesArray && imagesArrayLength && count < imagesArrayLength) {
			//divRef.current
			//@ts-ignore
			const child = divRef.current.children
			const ch = child[0]
			console.log(ch)
			if (ch) {
				divRef.current.removeChild(child[0])
			}
			
			divRef.current.appendChild(imagesArray[count])
		}
	},[count, imagesArray])
	
	
	useEffect(() => {
		
		console.log("__")
		
		if (count === imagesArrayLength) {
			console.log("stopped")
			clearInterval(interval)
			setIsPlay(false)
		}
		
		//@ts-ignore
		//let l = imagesArray.length
		//console.log(l)
		
		if (!isPlay) {
			clearInterval(interval)
		} else {
			if (!isLoading) {
				timer()
			}
			
		}
		return () => clearInterval(interval);
	}, [imagesArray, imagesArrayLength, count, isPlay, timer]);
	
	
	
	
	
	if (isLoading) {
		return <div>...loading</div>
	}
	
	return (
		<div>
			{isPlay.toString()}<br/>
			
			{count}
			
			<div ref={divRef}></div>
		</div>
	)
}

export {StoriesService}