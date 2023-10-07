import React from 'react'
import { Link } from "react-router-dom";
import image from "./logo.jpg"



const NavBar = () => {

    return (
        <div>
            <nav style={{color:'black', backgroundColor:'black' }} className="navbar fixed-top navbar-expand-lg navbar-dark ">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src={image} alt="HTA" width="50px" height="50px"/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/enroll">Enorll Now</Link></li>
                                    <li><Link className="dropdown-item" to="/enroll">Contact Us</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                            <li className="nav-item"><a id="github" className="nav-link" href="https://github.com/Nani-codes/alt_hta" rel="noreferrer" target="_blank"> Github Code</a></li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default NavBar
