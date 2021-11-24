import React from 'react'

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="container">
                <a className="logo" href="www.google.com">New World Crafting Calculator</a>
                <input className="search-bar" type="text" placeholder="   Search..."/>
            </div>
        </nav>
    )
}

export default Navbar
