import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
function Navbar(props) {



	const btn_styled = {
		color: '#fff',
		background: '#20c997',
		border: '2px solid #20c997',
		padding: '5px 13px',
		borderRadius: '5px',
		textTransform: 'uppercase'
	}




	return (

		<nav
			className={`
			     navbar navbar-expand-lg
				 navbar-${props.ThemeMode}
				 bg-${props.ThemeMode}
				 ${(props.ThemeMode === 'light') ?
					'box_shadow'
					: 'light'}`
			}>

			<div className="container-fluid ">
				<a className="navbar-brand" href="/">
					{props.title}
				</a>
				<buthrefn className="navbar-hrefggler hrefggle" type="buthrefn" data-bs-hrefggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="hrefggle navigation">
					<span className="navbar-hrefggler-icon"></span>
				</buthrefn>

			    <div className="form-check form-switch btn-tgl">
					<input
						className="form-check-input padd"
						type="checkbox"
						id="flexSwitchCheckChecked"
						onClick={props.hrefggleTheme}
					/>
					<label htmlFor="checkbox" className={`text-${(props.ThemeMode === 'light')? 'dark' : 'light'}`}>MODE</label>
			    </div>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auhref mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="/">Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href='/about'>{props.about}</a>
						</li>
					</ul>
					<form className="d-flex search-box">
						<input className="form-control me-2 search" type="search" placeholder="Search" aria-label="Search" />
						<buthrefn style={btn_styled}>serach</buthrefn>
					</form>
				</div>

			</div>
		</nav>

	)
}

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	about: PropTypes.string.isRequired,
	aboutUrl: PropTypes.string.isRequired,
}


export default Navbar
