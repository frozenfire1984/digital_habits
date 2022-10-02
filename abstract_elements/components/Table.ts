type TData = string | number | boolean

class Table {
	cols: number
	rows: number
	thead_titles: string[]
	data: TData[]
	caption: string
	
	constructor(cols: number, rows: number, thead_titles: string[], data: TData[], caption: string = '') {
		this.cols = cols;
		this.rows = rows;
		this.thead_titles = thead_titles;
		this.data = data;
		this.caption = caption
	}
}