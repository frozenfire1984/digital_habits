import React from "react";

export interface IPlayerBase {
	payload: string | string[],
	isPlay: boolean,
	setIsPlay: React.Dispatch<React.SetStateAction<boolean>>,
	intervalDuration?: number
}