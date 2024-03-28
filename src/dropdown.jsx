import React, { useState } from 'react';

const Dropdown = ({ title, children, buttonStyle}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown">
            <button onClick={toggleDropdown} className="dropbtn" style={buttonStyle}>{title}</button>
            {isOpen && (
                <div id="myDropdown" className="dropdown-content">
                    {children}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
