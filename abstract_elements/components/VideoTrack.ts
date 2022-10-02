type TFileType = "mp4" | "mov" | "wmf" | "avi" | "webm"

class VideoTrack {
	name: string
	type: TFileType
	
	constructor(name: string, type: TFileType, meta_data: string = '') {
		this.name = name;
		this.type = type
	}
}

const rambo = new VideoTrack("rembo", "mp4")

console.log(rambo)



