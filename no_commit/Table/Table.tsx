const Table = (props: any) => {
	
	const {children, style = {}, ...datum} = props
	
	return (
		<table
			style={{
				borderCollapse: "collapse",
				width: "500px",
				...style}}
			{...datum}>
			{children}
		</table>
	)
}

export {Table}