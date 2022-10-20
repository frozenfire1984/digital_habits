import React, {useEffect, useRef} from "react"
import { ImSpinner9 } from "react-icons/im";
import {usePreload} from "../../hooks/usePreload";
import "./Preview.scss"

interface IPreview {
	url: string
}

export const Preview = ({url}: IPreview) => {

	const {isLoading, isError, imagesArray} = usePreload(url)
	const $frameRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (imagesArray.length > 0 && $frameRef && $frameRef.current) {
			$frameRef.current.appendChild(imagesArray[0])
		}
	},[imagesArray])

	if (isLoading) {
		return <div className="preview__loading-spinner"><ImSpinner9 /></div>
	}

	return (
		<div className="preview">
			<div ref={$frameRef} className="preview__frame"/>
		</div>
	)
}