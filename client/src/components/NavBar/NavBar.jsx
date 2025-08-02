import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
    const navigate = useNavigate();
    return (
        <div className="bg-gradient-to-r from-teal-300 to-gray-600 p-4 text-white rounded shadow">
            <button className="mr-4 rounded bg-white text-black py-2 px-4 border-3 border-black" onClick={() => navigate("/") }>Erik's Portfolio</button>
            <button className="mr-4 rounded bg-white text-black py-2 px-4 border-3 border-black" onClick={() => navigate("/projects") }>Projects</button>
        </div>
    );
}

export default NavBar;