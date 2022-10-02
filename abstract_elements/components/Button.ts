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
	disabled?: boolean,
	template_path?: string
	callback: () => void,
}

class Button {
	text
	bg
	size
	disabled
	template_path
	callback
	
	constructor({text, bg, size, disabled = false, template_path = '', callback}: IButton) {
		this.text = text;
		this.bg = bg;
		this.size = size;
		this.disabled = disabled;
		this.template_path = template_path;
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

const btn = new Button({
	text: "click me",
	bg: "blue",
	size: "sm",
	callback: play,
})

btn.click()
