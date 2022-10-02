var Stories = /** @class */ (function () {
    function Stories(user_id) {
        this.user_id = user_id;
        this.user_id = user_id;
    }
    Stories.prototype.add = function (store) {
        this.stores.push(store);
    };
    return Stories;
}());
var store = new Stories(1);
store.add({
    title: "lorem 2",
    content: "lorem ipsun foo bar",
    date: 124
});
store.add({
    title: "lorem 3",
    content: "lorem ipsun foo bar",
    date: 125
});
console.log(store);
