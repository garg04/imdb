import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="flex items-center bg-[#fbfbfb]">
                <div className="m-4">
                    <img
                        className=" h-12"
                        src="https://cdn-icons-png.flaticon.com/512/3658/3658959.png"
                        alt="movie-icon"
                    />
                </div>
                <div className="text-3xl font-bold m-4">
                    <Link to="/">Movies</Link>
                </div>
                <div className="text-3xl font-bold m-4">
                    <Link to="/watchlist">Watchlist</Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;
