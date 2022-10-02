interface IInput {
	value: string
	disabled?: boolean
	template_path?: string
	placeholder?: string
}

class Input implements IInput {
	constructor(public value, public disabled = false, public template_path = '', public placeholder = 'enter value') {
		this.value = value;
		this.disabled = disabled
		this.template_path = template_path
		this.placeholder = placeholder
	}
	
	change(value) {
		if (!this.disabled) {
			this.value = value
		}
	}
}

const inp = new Input({value: true, disabled: true})



