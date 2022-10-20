const TableHead = (props: any) => {
	
	const {children, ...datum} = props
	
	return (
		<thead {...datum}>
			{children}
		</thead>
	)
}

export {TableHead}