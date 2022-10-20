import React from "react";

type TReactDispatch = React.Dispatch<React.SetStateAction<boolean>>

export interface IPlayerBase {
	payload: string | string[],
	isPlay: boolean,
	setIsPlay: TReactDispatch,
	setIsLoading: TReactDispatch,
	setIsError: TReactDispatch,
	intervalDuration?: number
}

export interface IPlayer {
	payload: string | string[],
	title?: string,
	previewUrl?: string,
	defaultFullscreen?: boolean,
	autoStart?: boolean,
	defaultMuted?: boolean,
	controlsVisible?: boolean,
	closable?: boolean,
	intervalDuration?: number
}