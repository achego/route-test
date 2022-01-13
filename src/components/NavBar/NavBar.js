import React from 'react'
import { Route, Routes } from 'react-router'
import cs from './NavBar.css'


const NavBar = () => {
    return (
        <header className={cs.NavBar}>
            <div><h2>Joe Ben</h2></div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/new-post">New Post</a></li>
                </ul>
            </nav>

        </header>
    )
}

export default NavBar
