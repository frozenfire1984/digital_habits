type TBg = "red" | "blue" | "green"
type TSize = "xs" | "sm" | "md" | "lg" | "xl"

function play() {
	console.log("play!")
	return "test"
}

class Button {
	text: string
	bg: TBg
	size: TSize
	callback!: () => {}
	disabled: boolean
	layout_path!: string
	
	
	constructor(text: string, bg: TBg = "blue", size: TSize = "sm", callback: () => {}, disabled: boolean = false, layout_path: string = '') {
		this.text = text;
		this.bg = bg;
		this.size = size;
		this.disabled = disabled;
		this.layout_path = layout_path;
		this.callback = callback;
	}
	
	click() {
		if (!this.disabled && this.callback) {
			console.log("click log")
			this.callback()
		} else {
			console.log("disabled!")
		}
	}
	
	
}

const btn = new Button("click me", "blue", "sm", play, true)

btn.click()