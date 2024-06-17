import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <header>
                <div className='navbar'>
                    <div className="main-container">
                        <div className="logo">
                            <img src="https://cdn-icons-png.flaticon.com/512/10169/10169718.png" alt="Logo" />
                            <span>Li Xu - Dev</span>
                        </div>
                        <nav>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/gallery">Gallery</Link></li>
                                <li><Link to="/resume">Resume</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <nav className='nav justify-content-end'>
                        <ul >
                            <li><Link to="/admin">⚙️</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;