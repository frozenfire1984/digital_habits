import {forwardRef} from "react";


const PlayerService = forwardRef((props: any, ref: any) => {
	
	const {payload, style = {}, ...datum} = props
	
	return (
		<video ref={ref} className='player__video' {...datum}>
			<source src={payload} type="video/mp4"/>
			<source src={payload} type="video/ogg"/>
		</video>
	)
})

export {PlayerService}