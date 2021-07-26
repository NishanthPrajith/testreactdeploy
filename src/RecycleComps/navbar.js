import './navbar.css';
import { useState } from 'react';

export default function NavBar() {

    const [navBarClicked, setClicked] = useState(false);

    function openNav() {
        console.log("Opened");
        console.log(navBarClicked);
        setClicked(true);
    }

    function closeNav() {
        setClicked(false); 
    }

    return (
        <nav>
            <div className = "logo">
                <p>np.</p>
            </div>
            <div className = "hamburger">
                <div className={navBarClicked ? "main" : ""}>
                    <div className={navBarClicked ? "sidenav" : "sidenavNone"}>
                        <div>
                            <p>Menu</p>
                            <a href="www.google.com">Home</a>
                            <a href="www.google.com">About Me</a>
                            <a href="www.google.com">Projects</a>
                            <a href="www.google.com">Contact Me</a>
                        </div>
                    </div>
                </div>

                <div>
                    <div onClick={navBarClicked ? closeNav : openNav} className = {navBarClicked ? "menuActive" : "menu"}>
                        <div className = "line"></div>
                        <div className = "line"></div>
                    </div>
                </div>
            </div>
        </nav>
    )
}