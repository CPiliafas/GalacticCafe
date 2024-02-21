import {useRef} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import "../Styles/main.css";
import { IoPlanetSharp } from "react-icons/io5";

function Navbar() {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return(
        <header>
            <h3>Galactic Cafe</h3>
            <IoPlanetSharp 
                style={{
                    top: '10px',
                    left: '3px',
                }}
                size="40px"
            />
            <nav ref={navRef}>
                <a href="#">Home</a>
                <a href="#">Our Mission</a>
                <a href="#">Our Menu</a>
                <a href="#">Careers</a>
                <a href="#">Contact Us</a>
                <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavBar}>
                <FaBars />
            </button>
        </header>
    );
}

function Main(){
    
}

export default Navbar; 