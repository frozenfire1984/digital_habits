const TableRow = (props: any) => {
	
	const {children, ...datum} = props
	
	return (
		<tr {...datum}>
			{children}
		</tr>
	)
}

export {TableRow}