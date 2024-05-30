import React from 'react'
import PropTypes from 'prop-types'
import '../styles/TextForm.css'

export default function Navbar(props) {
    const handleClickHome = () => {
        document.title = "TextUtils"
        const highlight = "active";
    }

    const handleClickAbout = () => {
        document.title = "TextUtils - About";
        const highlight = "active";
    };

    return (
        <>
            <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link {highlight}" onClick={handleClickHome} aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" onClick={handleClickAbout} href="#about">{props.aboutText}</a>
                            </li>
                        </ul>
                        
                        <div className="form-check form-switch">
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            <label className={`form-check-label text-${props.mode === 'light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">{props.mode === 'light' ? "Enable Dark Mode" : "Enable Light Mode" }</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
  };

Navbar.defaultProps = {
    aboutText: "About"
};