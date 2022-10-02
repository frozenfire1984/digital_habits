var Table = /** @class */ (function () {
    function Table(cols, rows, thead_titles, data, caption) {
        if (caption === void 0) { caption = ''; }
        this.cols = cols;
        this.rows = rows;
        this.thead_titles = thead_titles;
        this.data = data;
        this.caption = caption;
    }
    return Table;
}());
