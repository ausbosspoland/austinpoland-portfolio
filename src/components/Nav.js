import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
            <div className="container">
                <a className="navbar-brand" href="#">Austin Poland</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <a className="nav-links" href="#">Home <span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-links" href="#">About Myself</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-links" href="#">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-links" href="#">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;