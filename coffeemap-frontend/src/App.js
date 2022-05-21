import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cafe from './components/Cafe';
import Login from './components/Login';
import Main from './components/Main';
import Map from './components/Map';
import Register from './components/Signup'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="cafe" element={<Cafe />} />
				<Route path="login" element={<Login />} />
				<Route path="map" element={<Map />} />
				<Route path="register" element={<Register />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
