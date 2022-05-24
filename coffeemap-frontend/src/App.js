import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cafe from './components/Cafe';
import Login from './components/Login';
import Main from './pages/Main';
import Map from './components/Map';
import Register from './components/Register'
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import CreateReview from './components/AddNewCafe';

function App() {
	return (
		<>		
		
		<BrowserRouter>
		<NavBar />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/cafe" element={<Cafe />} />
				<Route path="/login" element={<Login />} />
				<Route path="/map" element={<Map />} />
				<Route path="/register" element={<Register />} />
				{/* Protected route */}
				<Route path="/add" element={<CreateReview />} />

			</Routes>

					<Footer />

		</BrowserRouter>
		</>

	);
}

export default App;
