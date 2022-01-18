import React from 'react'
import { NavLink } from 'react-router-dom'
import cs from './NavBar.css'


const NavBar = () => {

    const active = ({isActive}) => { 
        if(isActive){
            return{
                color: 'chartreuse',
                borderBottom: '3px solid chartreuse',
                paddingBottom: '10px'
            }
        }
    }

    return (
        <header className={cs.NavBar}>
            <div><h2>Joe Ben</h2></div>
            <nav>
                <ul>
                    <li><NavLink 
                            style={active}
                            to="/posts">Home</NavLink></li>
                    <li><NavLink   
                            style={active}
                            to="/new-post">New Post</NavLink></li>
                </ul>
            </nav>

        </header>
    )
}

export default NavBar
