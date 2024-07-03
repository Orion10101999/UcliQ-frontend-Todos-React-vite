import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="flex justify-between items-center bg-green-400 text-white p-4">
            <div className="flex space-x-4">
            <h1 className="text-xl">Todo List App UcliQ</h1>
            <h2><Link to={"/"}>Home</Link></h2>

            </div>
            <div className="flex space-x-4">
                <h2><Link to={"/signup"}>SignUp</Link></h2>
                <h2><Link to={"/login"}>LogIn</Link></h2>
            </div>
        </header>

    );
};

export default Header;
