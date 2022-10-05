const TableBody = (props: any) => {
	
	const {children, style = {}, ...datum} = props
	
	return (
		<tbody {...datum}>
			{children}
		</tbody>
	)
}

export {TableBody}