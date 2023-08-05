import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Watchlist from "./components/Watchlist";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/watchlist" element={<Watchlist />} />
            </Routes>
        </>
    );
}

export default App;
