var Router = /** @class */ (function () {
    function Router(screens) {
        this.screens = screens;
    }
    Router.prototype.add = function (screen) {
        this.screens.push(screen);
    };
    Router.prototype.go = function (path) {
        console.log("go to screen ".concat(path));
    };
    return Router;
}());
var app_router = new Router([
    {
        url: "/",
        title: "main",
        content: "lorem ipsum"
    },
    {
        url: "/about",
        title: "about",
        content: "lorem ipsum"
    },
    {
        url: "/catalog",
        title: "catalog",
        content: "lorem ipsum"
    }
]);
app_router.go("/about");
console.log(app_router);
