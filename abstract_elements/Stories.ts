interface IStore {
	title: string,
	content: string,
	date: number,
	inarchive?: boolean
}

class Stories {
	stores: IStore[]
	
	constructor(user_id: number, store: IStore) {
		const temp_arr = this.stores
		temp_arr.push(store)
		this.stores = temp_arr
	}
	
	add(store: IStore) {
		this.stores.push(store)
	}
}

const store = new Stories(1, {
	title: "lorem",
	content: "lorem ipsun foo bar",
	date: 123,
}) 

store.add({
	title: "lorem 2",
	content: "lorem ipsun foo bar",
	date: 124,
})

store.add({
	title: "lorem 3",
	content: "lorem ipsun foo bar",
	date: 125,
})

console.log(store)