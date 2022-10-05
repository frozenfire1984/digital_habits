interface IUser {
	getName: () => string
}

interface IUserWithHobby {
	getHobby: () => string
}

/*interfaces*/

class User implements IUser {
	constructor(private name: string, private age: number) {
	}
	
	public getName(){
		return `I am ${this.name}, and me ${this.age} years`
	}
}

class UserWithHobby implements IUserWithHobby {
	constructor(
		private name: string,
		private age: number,
		private hobby: string
	) {}
	
	public getName(){
		return `I am ${this.name}, and me ${this.age} years`
	}
	
	public getHobby() {
		return this.hobby
	}
}
/*class*/


const john = new User("John", 30)
const dana = new User("Dana", 50)

const ronaldo = new UserWithHobby("Ronaldo", 30, "football")