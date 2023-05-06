import React, {useState} from "react"
import { NavLink } from "react-router-dom";
import { HiMenu } from 'react-icons/hi'
import { FaTimes } from 'react-icons/fa'

const Navbar = () => {
    const [toggle, setToggle] = useState(false);


    const clickHandler = () => setToggle(false);

    return (
        <header className={toggle ? "active" : ""}>

            <div className="mobile-view">
                
                <h2 className="header-title"><span className="title-span">R</span>ecognizer.</h2>


                <div className="nav-toggler">
                    {
                        toggle ? 
                        <FaTimes className="t-icon" onClick={() => setToggle(false)} /> 
                        : 
                        <HiMenu className="t-icon" onClick={() => setToggle(true)} />
                    }
                </div>

            </div>

            <nav>
                <ul className={toggle ? "active" : ""}>
                    <li>
                        <NavLink to="/" activeclassname="active" onClick={clickHandler}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/check" onClick={clickHandler}>Check</NavLink>
                    </li>
                    <li>
                    <NavLink to="/contact" onClick={clickHandler}>Contact</NavLink>
                    </li>
                </ul>
            </nav>

            
        </header>
    )
}

export default Navbar;