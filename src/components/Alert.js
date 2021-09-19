import React from 'react'

function Alert(props) {
	// const close_btn = {
	// 	color: '#fff',
	// 	background: '#20c997',
	// 	border: '2px solid #20c997',
	// 	padding: '0px 13px',
	// 	borderRadius: '5px',
	// 	textTransform: 'uppercase',
	// 	marginBottom: '10px',
	// 	marginTop: '10px',
	// 	marginLeft: '10px',
	// 	marginRight: '10px',
	// 	fontSize: '1.3rem',
	// 	position: 'absolute',
	// 	right: '0',
	// 	top:'0'
	// }
	// const handleClick = (e) => {
	// 	console.log(e.target.parentElement.style.display = 'none')
	// }

	const capitalised = (word) => {
		const lowerCase = word.toLowerCase()
		return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1)
	}

	return (
		<div>
			{props.Alert && <div className="alert alert-success alert-dismissible  fade show my-3" role="alert">
				<strong>{capitalised(props.Alert.type)}</strong>  {props.Alert.msg}

			</div>}
		</div>
	)
}

export default Alert
