import {forwardRef} from "react";


const PlayerService = forwardRef((props: any, ref: any) => {
	
	const {video_url, style = {}, ...datum} = props
	
	return (
		<video ref={ref} className='player__video' {...datum}>
			<source src={video_url} type="video/mp4"/>
			<source src={video_url} type="video/ogg"/>
		</video>
	)
})

export {PlayerService}