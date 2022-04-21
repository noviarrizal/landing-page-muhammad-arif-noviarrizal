import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" exact element={<Home />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
