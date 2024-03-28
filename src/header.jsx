import React from 'react';
import logo from './Logo.png';
import Dropdown from './dropdown';
import './header.css';


const Header = () => {
    return (
        <header>
            <img src={logo} alt="Company Logo" />
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/india">India</a></li>
                    <li><a href="/world">World</a></li>
                    <li>
                        <Dropdown title="Film" buttonStyle={{ fontSize: '20px', outline: 'none', border: 'none'}} >
                            <a href="/bollywood">Bollywood</a>
                            <a href="/hollywood">Hollywood</a>
                        </Dropdown>
                    </li>
                    <li>
                        <Dropdown title="Sports" buttonStyle={{ fontSize: '20px', outline: 'none', border: 'none'}} >
                            <a href="/cricket">Cricket</a>
                            <a href="/football">Football</a>
                            <a href="/hockey">Hockey</a>
                        </Dropdown>
                    </li>
                    <li><a href="/about-us">About Us</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
