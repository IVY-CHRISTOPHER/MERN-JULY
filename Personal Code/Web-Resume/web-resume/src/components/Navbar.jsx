import { FaBars, FaTimes } from 'react-icons/fa';
import {useRef} from 'react';

const Navbar = () => {

    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle('responsiveNav');
    }

    return (
        <>
            <header>
                <h3>Logo</h3>
                <nav ref={navRef}>
                    <a href="#about">About Me</a>
                    <a href="#projects">My Projects</a>
                    <button className='nav-btn nav-close-btn' onClick={showNavBar}>
                        <FaTimes/>
                    </button>
                </nav>
                <button className='nav-btn' onClick={showNavBar}>
                    <FaBars/>
                </button>
            </header>
        </>
    )
}

export default Navbar