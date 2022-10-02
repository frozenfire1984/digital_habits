var Input = /** @class */ (function () {
    function Input(value, disabled, template_path, placeholder) {
        if (disabled === void 0) { disabled = false; }
        if (template_path === void 0) { template_path = ''; }
        if (placeholder === void 0) { placeholder = 'enter value'; }
        this.value = value;
        this.disabled = disabled;
        this.template_path = template_path;
        this.placeholder = placeholder;
        this.value = value;
        this.disabled = disabled;
        this.template_path = template_path;
        this.placeholder = placeholder;
    }
    Input.prototype.change = function (value) {
        if (!this.disabled) {
            this.value = value;
        }
    };
    return Input;
}());
var inp = new Input({ value: true, disabled: true });
