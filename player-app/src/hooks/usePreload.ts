import {useState, useEffect} from "react";

interface IPromiseData {
	[key: number]: object,
	length: number
}

export const usePreload = (props: string[] | string) => {
	const [isLoading, setIsLoading] = useState(false)
	const [imagesArray, setImagesArray] = useState<HTMLImageElement[]>([])
	const [isError, setIsError] = useState(false)
	let promises: Promise<object>[] | null = null

	useEffect(() => {
		setIsLoading(true)
		if (typeof props !== "string") {
			promises = props.map((url: string) => {
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
	}, [props])

	useEffect(() => {
		if (promises?.length) {
			Promise.all(promises)
					.then((data: IPromiseData | any) => {
						setImagesArray(data)
					})
					.catch((e) => {
						setIsError(true)
					})
					.finally(() => {
						setIsLoading(false)
					})
		}
	}, [promises])

	return {isLoading, isError, imagesArray}
}