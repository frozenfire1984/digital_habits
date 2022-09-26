var VideoPlayer = /** @class */ (function () {
    function VideoPlayer(path, skin) {
        if (skin === void 0) { skin = "dark_theme"; }
        this.path = path;
        this.skin = skin;
    }
    VideoPlayer.prototype.play = function () {
        console.log("track ".concat(this.path, " played; current skin: ").concat(this.skin));
    };
    VideoPlayer.prototype.stop = function () {
        console.log("track ".concat(this.path, " stopped; current skin: ").concat(this.skin));
    };
    VideoPlayer.prototype.pause = function () {
        console.log("track ".concat(this.path, " paused; current skin: ").concat(this.skin));
    };
    return VideoPlayer;
}());
var player = new VideoPlayer("video.mov", "blue_theme");
player.play();
