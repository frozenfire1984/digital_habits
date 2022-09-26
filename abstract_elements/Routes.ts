interface IScreen {
	url: string,
	title: string,
	content: string,
	active: false
}


class Router {
	screens: IScreen[]
	
	constructor(screens: IScreen[]) {
		this.screens = screens
	}
	
	add(screen: IScreen) {
		this.screens.push(screen)
	}
	
	go(path: string) {
		console.log(`go to screen ${path}`)
	}
}

const app_router = new Router([
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
])


app_router.go("/about")