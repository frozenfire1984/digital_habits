interface IInput {
	value: string
	disabled?: boolean
	layout_path?: string
	placeholder?: string
	handler?: () => void
}

class Input implements IInput {
	constructor(public value, public disabled = false, public layout_path = '', public placeholder = 'enter value', public handler = null) {
		this.value = value;
		this.disabled = disabled
		this.layout_path = layout_path
		this.placeholder = placeholder
		this.handler = handler
	}
	
	change(value) {
		if (!this.disabled) {
			this.value = value
		}
	}
}

const inp = new Input("test", true, '')



