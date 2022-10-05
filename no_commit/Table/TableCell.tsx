import {forwardRef} from "react";

const TableCell = forwardRef((props: any, ref: any) => {
	const {children, onClick = () => {console.log("dymmy")}, style = {}, ...datum} = props
	

	
	return (
		<td
			ref={ref}
			onClick={onClick}
			style={{
				border: "1px gray solid"
			}}
			{...datum}>
			{children}
		</td>
	)
})



export {TableCell}