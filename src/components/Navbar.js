import React from 'react';
import myLogo from './letter-g.png'
import Hobbies from "./Hobbies"
import Skills from "./Skills"
export default function Navbar() {
    return (
        <nav className="navbar transparent navbar-dark navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                    <div className="navbar-nav text-black">
                        <a className="nav-link active text-black mx-5 nav-element" aria-current="page" href="#" >Home</a>
                        <a className="nav-link text-black mx-5 nav-element" href="#Hobby-section">Hobbies</a>
                        <img src={myLogo} className='mx-5 nav-element logo' alt="Bootstrap" width="55" height="50" />
                        <a className="nav-link text-black nav-element mx-5" href="#Skill-section">Skills</a>
                        <a className="nav-link text-black mx-5 nav-element">Disabled</a>
                    </div>
                </div>
            </div>
        </nav>

    )
}

