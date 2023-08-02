import "./App.css";
import "./Dashboard.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Dashboard from "./pages/dashboard";
import NavBar from "./components/NavBar";

function App() {
    const routerBaseName = process.env.PUBLIC_URL;

    return (
        <BrowserRouter basename={routerBaseName}>
            <NavBar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
