var Stories = /** @class */ (function () {
    function Stories(user_id, store) {
        var temp_arr = this.stores;
        temp_arr.push(store);
        this.stores = temp_arr;
    }
    Stories.prototype.add = function (store) {
        this.stores.push(store);
    };
    return Stories;
}());
var store = new Stories(1, {
    title: "lorem",
    content: "lorem ipsun foo bar",
    date: 123
});
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
