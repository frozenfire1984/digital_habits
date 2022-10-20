import {useState, useEffect} from "react";

interface IPromiseData {
	[key: number]: object,
	length: number
}

export const usePreload = (props: string[] | string) => {
	const [isLoading, setIsLoading] = useState(false)
	const [payload, setPayload] = useState<string[]>([])
	const [imagesArray, setImagesArray] = useState<HTMLImageElement[]>([])
	const [isError, setIsError] = useState(false)
	let promises: Promise<object>[] | null = null

	useEffect(() => {
		setIsLoading(true)

		if (typeof props === "string") {
			let arr = []
			arr.push(props)
			setPayload(arr)
			console.log("string")
		} else {
			setPayload(props)
			console.log("[]")
		}
	}, [props])

	useEffect(() => {
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

		if (promises?.length) {
			Promise.all(promises)
					.then((data: IPromiseData | any) => {
						setImagesArray(data)
					})
					.catch((e) => {
						setIsError(true)
					})
					.finally(() => {
						console.log("final")
						setIsLoading(false)
					})
		}
	},[payload])

	return {isLoading, isError, imagesArray}
}