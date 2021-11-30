import React from 'react'

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="nav-wrapper">
                <a className="logo" href="www.google.com">New World Crafting Calculator</a>
                <input className="search-bar" type="text" placeholder="   Search..."/>
            </div>
            <button className="menu-btn">
                    <img className="menu-icon" src="https://cdn0.iconfinder.com/data/icons/heroicons-ui/24/icon-menu-512.png" alt="" />
            </button>
        </div>
    )
}

export default Navbar
