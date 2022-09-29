type TBg = "red" | "blue" | "green"
type TSize = "xs" | "sm" | "md" | "lg" | "xl"

function play() {
	console.log("play!")
	return "test"
}

interface IButton {
	text: string,
	bg: TBg,
	size: TSize,
	callback: () => void,
	disabled: boolean,
	layout_path: string
}

class Button {
	text: string
	bg: TBg
	size: TSize
	callback!: () => void
	disabled: boolean
	layout_path!: string
	
	constructor(prop: IButton) {
		this.text = prop.text;
		this.bg = prop.bg;
		this.size = prop.size;
		this.disabled = prop.disabled;
		this.layout_path = prop.layout_path;
		this.callback = prop.callback;
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

const btn = new Button({
	text: "click me",
	bg: "blue",
	size: "sm",
	callback: play,
	disabled: true,
	layout_path: ''
})

btn.click()