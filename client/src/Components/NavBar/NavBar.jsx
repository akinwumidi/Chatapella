import React from 'react'
import "./navbar.scss"
import { RiMoonLine, RiSunLine, RiMenu5Line } from "react-icons/ri";
const NavBar = () => {
    return (
        <div className='navbar'>
            <div className="share-btn"><RiMenu5Line /></div>
            <div className="nav-brand"><span>C</span>hatapella</div>
            <div className="nav-actions"><RiMoonLine /> <RiSunLine /> </div>
        </div>
    )
}

export default NavBar