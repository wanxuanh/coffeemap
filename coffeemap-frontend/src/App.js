import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cafe from './components/Cafe';
import Login from './components/Login';
import Main from './pages/Main';
import Map from './components/Map';
import Register from './components/Register'
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import AddReview from './components/AddReview';
import AddNewCafe from './components/AddNewCafe';
import Profile from './components/Profile'
import NavBar2 from './components/Navbar2'
import {useState} from 'react'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Reviews from './components/Review'
import Logout from './components/Logout'
import RequireAuth from './components/RequireAuth';
import MapWithMarker from './components/MapWithMarker';
import './App.css'


function App() {

	  const [light, setLight] = useState(true);

const themeLight = createTheme({
  palette: {
    background: {
      default: "#e4f0e2"
    }
  }
});

const themeDark = createTheme({
  palette: {
    mode: 'dark',
  },
});
	return (
		<>		
		
		<BrowserRouter>
		<NavBar2 />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/cafe" element={<Cafe />} />
				<Route path="/login" element={<Login />} />
				<Route path="/map" element={<MapWithMarker />} />
				<Route path="/register" element={<Register />} />
				<Route path="/reviews" element={<Reviews	 />} />
				{/* Protected route */}
				<Route element={<RequireAuth />}>
				<Route path="/add" element={<AddNewCafe />} />
				<Route path="/review" element={<AddReview	 />} />
				<Route path="/profile" element={<Profile	 />} />
				</Route>
				<Route path="/logout" element={<Logout	 />} />

			</Routes>

					<Footer />
		</BrowserRouter>
		</>

	);
}

export default App;
