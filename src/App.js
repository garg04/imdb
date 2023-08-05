import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Watchlist from "./components/Watchlist";
import Banner from "./components/Banner";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/watchlist" element={<Watchlist />} />
            </Routes>
            <Banner></Banner>
        </>
    );
}

export default App;
