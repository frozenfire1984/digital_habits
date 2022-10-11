import React from "react";

type TReactDispatch = React.Dispatch<React.SetStateAction<boolean>>

export interface IPlayerBase {
	payload: string | string[],
	isPlay: boolean,
	setIsPlay: TReactDispatch,

	setIsLoading: TReactDispatch,

	setIsError: TReactDispatch,
	//isMuted?: boolean,
	//setIsMuted?: React.Dispatch<React.SetStateAction<boolean>>,
	intervalDuration?: number
}