import React from 'react';

const Header = ({ toggle }) => {
    return (
        <header className={toggle ? 'on' : ''}>
            <nav>
                <ul>
                    <li>About Me</li>
                    <li>Skills</li>
                    <li>Awards</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;