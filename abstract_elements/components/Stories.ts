interface IStore {
	title: string,
	content: string,
	date: number,
	inarchive?: boolean
}

interface IStories {
	user_id: number,
}

class Stories implements IStories{
	stores: IStore[]
	
	constructor(public user_id) {
		this.user_id = user_id
	}
	
	add(store: IStore) {
		this.stores.push(store)
	}
}

const store = new Stories(1)

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