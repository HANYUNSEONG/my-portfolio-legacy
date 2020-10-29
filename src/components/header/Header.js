import React from 'react';

const Header = ({ toggle, handleHeaderToggle }) => {
    const scrollTargetMent = (target) => {
        document.getElementById(target)
        && document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <header className={toggle ? 'on' : ''}>
            <div className="ham_btn" onClick={handleHeaderToggle}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav>
                <ul>
                    <li onClick={(e) => scrollTargetMent('About')}>About Me</li>
                    <li onClick={(e) => scrollTargetMent('Skills')}>Skills</li>
                    <li onClick={(e) => scrollTargetMent('Awards')}>Awards</li>
                    <li onClick={(e) => scrollTargetMent('Info')}>Info</li>
                    <li onClick={(e) => scrollTargetMent('Contact')}>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;