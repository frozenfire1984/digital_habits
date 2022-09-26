type TSkin = "dark_theme" | "blue_theme" | "light_theme"

class VideoPlayer {
	path: string
	skin: TSkin
	
	constructor(path: string, skin: TSkin = "dark_theme") {
		this.path = path;
		this.skin = skin
	}
	
	play() {
		console.log(`track ${this.path} played; current skin: ${this.skin}`)
	}
	
	stop() {
		console.log(`track ${this.path} stopped; current skin: ${this.skin}`)
	}
	
	pause() {
		console.log(`track ${this.path} paused; current skin: ${this.skin}`)
	}
}

const player = new VideoPlayer("video.mov", "blue_theme")

player.play()