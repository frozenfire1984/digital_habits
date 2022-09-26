interface IScreen {
	url: string,
	title: string,
	template_url: string,
	active?: false
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
])


app_router.go("/about")

console.log(app_router)