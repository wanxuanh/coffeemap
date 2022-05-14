import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Cafe from "./components/Cafe"
import Login from "./components/Login";
import Main from "./components/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="cafe" element={<Cafe />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
