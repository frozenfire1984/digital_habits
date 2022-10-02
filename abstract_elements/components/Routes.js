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
        template_url: "pages/index"
    },
    {
        url: "/about",
        title: "about",
        template_url: "pages/about"
    },
    {
        url: "/catalog",
        title: "catalog",
        template_url: "pages/catalog"
    }
]);
app_router.go("/about");
console.log(app_router);
