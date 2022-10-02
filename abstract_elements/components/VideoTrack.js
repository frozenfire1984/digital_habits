var VideoTrack = /** @class */ (function () {
    function VideoTrack(name, type, meta_data) {
        if (meta_data === void 0) { meta_data = ''; }
        this.name = name;
        this.type = type;
    }
    return VideoTrack;
}());
var rambo = new VideoTrack("rembo", "mp4");
console.log(rambo);
