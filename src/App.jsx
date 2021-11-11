import './App.css';
import { Container } from './App.styled';
import { Courses } from './components/Courses/Courses';
import { Header } from './components/Header';

function App() {
	return (
		<Container>
			<Header />
			<Courses />
		</Container>
	);
}

export default App;
