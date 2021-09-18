import '../components/css/Textform.css';
import React, { useState } from 'react'

function TextForm(props) {
	const [Text, setText] = useState('');

	const handleChange = (e) => {
		setText(e.target.value)
	}

	const handleClick = (e) => {
		e.preventDefault()

		// console.log('upper case wase clickes')
		let TextValue = Text.toUpperCase()
		setText(TextValue)
	}

	const btn_styled_upperCase = {
		color: '#20c997',
		background: '#20c997',
		border: '2px solid #20c997',
		padding: '5px 13px',
		borderRadius: '5px',
		textTransform: 'uppercase',
		marginBottom: '10px',
		marginTop: '10px',
		marginLeft: '10px',
		marginRight: '10px'

	}

	const btn_styled_outline = {
		color: '#20c997',
		background: '#fff',
		border: '2px solid #20c997',
		padding: '5px 13px',
		borderRadius: '5px',
		textTransform: 'uppercase',
		marginBottom: '10px',
		marginTop: '10px',
		marginLeft: '10px',
		marginRight: '10px'
	}

	const handleClear = (e) => {
		e.preventDefault()
		let cleatText = ''
		setText(cleatText)
	}

	const handleCopy = async (e) => {
		e.preventDefault()
		if (!navigator.clipboard) {
			return
		}
		const text = Text
		if (text === '') {
			return
		}
		try {
			await navigator.clipboard.writeText(text)
			console.log('Copied to clipboard')
		} catch (err) {
			console.error('Failed to copy!', err)
		}
	}

	const handleLower = (e) => {
		e.preventDefault()

		// console.log('upper case wase clickes')
		let TextValue = Text.toLowerCase()
		setText(TextValue)
	}

	const handSplit = (e) => {
		e.preventDefault()
		let TextValue = Text.split(' ').join('')
		setText(TextValue)
	}



	return (
		<form className="my-4">
			<h5>{props.Heading}</h5>
			<div className="form-floating my-2 mx-textarea">
				<textarea
					value={Text}
					className={`form-control textarea text-${(props.Mode === 'light')?'dark':'light'}`}
					placeholder="Leave a comment here" id="floatingTextarea2"
					style={
						{
							height: "200px",
							background: 'transparent',

						}
					}
					onChange={handleChange}
				>
				</textarea>
			</div>
			<button
				style={btn_styled_upperCase}
				onClick={handleClick}
				className={`
				    bg-${(props.Mode === 'light') ? 'dark' : 'transparent'}
			    `}

			>   ToUpperCase
			</button>
			<button
				style={btn_styled_outline}
				onClick={handleClear}
				className={`bg-${(props.Mode === 'light')?'dark':'transparent'}`}
			>   clear
			</button>
			<button
				style={btn_styled_outline}
				onClick={handleCopy}
				className={`bg-${(props.Mode === 'light')?'dark':'transparent'}`}
			>   CopyText
			</button>
			<button
				style={btn_styled_outline}
				onClick={handleLower}
				className={`bg-${(props.Mode === 'light')?'dark':'transparent'}`}
			>   TOlowar case
			</button>
			<button
				style={btn_styled_outline}
				onClick={handSplit}
				className={`bg-${(props.Mode === 'light')?'dark':'transparent'}`}
			>   remove space
			</button>

			<div className="container font">
				<h4 className="headingText">Your Summry</h4>

				<span className="mx-3">WORDS:</span>
				<span >{Text.split(' ').length}</span>
				<span className="mx-3">CHARACTERS:</span>
				<span >{Text.length}</span>

				<div>{0.008 * Text.split(' ').length} Words to Read</div>
				<h3>Prevue</h3>
				<p className="my-2 mx-3">
					<span className='my-3'>{Text}</span>
				</p>
			</div>
		</form>
	)
}

export default TextForm
