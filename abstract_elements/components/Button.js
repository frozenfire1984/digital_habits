function play() {
    console.log("play!");
    return "test";
}
var Button = /** @class */ (function () {
    function Button(_a) {
        var text = _a.text, bg = _a.bg, size = _a.size, _b = _a.disabled, disabled = _b === void 0 ? false : _b, _c = _a.template_path, template_path = _c === void 0 ? '' : _c, callback = _a.callback;
        this.text = text;
        this.bg = bg;
        this.size = size;
        this.disabled = disabled;
        this.template_path = template_path;
        this.callback = callback;
    }
    Button.prototype.click = function () {
        if (!this.disabled && this.callback) {
            console.log("click log");
            this.callback();
        }
        else {
            console.log("disabled!");
        }
    };
    return Button;
}());
var btn = new Button({
    text: "click me",
    bg: "blue",
    size: "sm",
    callback: play
});
btn.click();
