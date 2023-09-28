// stylesheets
import "./App.css";
import "./Dashboard.css";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// pages
import Home from "./pages/home";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import NavBar from "./components/NavBar";

// user hook
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
    const routerBaseName = process.env.PUBLIC_URL;

    const { user } = useAuthContext();

    return (
        // client-side routing
        <BrowserRouter basename={routerBaseName}>
            <NavBar />
            <Routes>
                <Route exact path="/" element={user ? <Dashboard /> : <Home />} />
                <Route path="signup" element={!user ? <Signup /> : <Navigate to="/" />} />
                <Route path="login" element={!user ? <Login/>: <Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
