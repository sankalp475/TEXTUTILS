import './App.css';
import Navbar from './components/Navbar';

function App() {

	const handleclick = () => {
		console.log('clickes')
	}
	   
	return (
		<>
			<Navbar title="textutils" about="about" aboutUrl="/" />
		</>
	);
}

export default App;


