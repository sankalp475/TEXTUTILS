import About from './components/About';
import './components/css/App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react'
import Alert from './components/Alert';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

function App() {
	const [ThemeMode, setThemeMode] = useState('light');
	const [alert, setAlert] = useState(null)

	const showAlert = (massage, type) => {
		setAlert({
			msg: massage,
			type: type,
		})
		setTimeout(() => {
			setAlert(null)
		}, 1200)
	}
	const ToggleTheme = () => {
		if (ThemeMode === 'light') {
			setThemeMode('dark')
			showAlert('dark mode has been enabled', 'SUCCESS')

		} else {
			setThemeMode('light')
			showAlert('light mode has been enabled', 'SUCCESS')
		}
	}



	const bodyTg = document.querySelector('body')
	// const acc = document.querySelector('.accordion-body')

	if (ThemeMode === 'dark') {
		bodyTg.style.background = 'rgba(33,37,41,1)'
		bodyTg.style.color = '#fff'
		// acc.style.color='#fff'
	} else {
		bodyTg.style.background = 'inherit'
		bodyTg.style.color = 'inherit'
		// acc.style.color='inherit'
		// 33,37,41
	}


	return (
		<>
			<Router>
				<Navbar title="textutils" about="about" aboutUrl="/" ThemeMode={ThemeMode} ToggleTheme={ToggleTheme}
				/>
				<Switch>
					<Route exact path="/about">
					    <div className="container" >
							<Alert Alert={alert} />

						    <About ThemeMode={ThemeMode} defaultValue='light' />
						</div>
					</Route>
					<Route exact path="/">
						<div className="container" >
							<Alert Alert={alert} />
							<TextForm
								Heading='Enter Your Text below'
								Mode={ThemeMode}
							/>
						</div>
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;


