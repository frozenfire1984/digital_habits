function play() {
    console.log("play!");
    return "test";
}
var Button = /** @class */ (function () {
    function Button(text, bg, size, callback, disabled, layout_path) {
        if (bg === void 0) { bg = "blue"; }
        if (size === void 0) { size = "sm"; }
        if (disabled === void 0) { disabled = false; }
        if (layout_path === void 0) { layout_path = ''; }
        this.text = text;
        this.bg = bg;
        this.size = size;
        this.disabled = disabled;
        this.layout_path = layout_path;
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
var btn = new Button("click me", "blue", "sm", play, true);
btn.click();
