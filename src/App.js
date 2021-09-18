import About from './components/About';
import './components/css/App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react'

function App() {
	const [ThemeMode, setThemeMode] = useState('light');

	const ToggleTheme = () => {
		if (ThemeMode === 'light') {
			setThemeMode('dark')
		} else {
            setThemeMode('light')
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
			<Navbar title="textutils" about="about" aboutUrl="/" ThemeMode={ThemeMode} ToggleTheme={ToggleTheme} />
			<div className="container" >
				<TextForm
					Heading='Enter Your Text below'
					Mode={ThemeMode}
				/>
	            <About ThemeMode={ThemeMode} defaultValue='light' />
			</div>
		</>
	);
}

export default App;


