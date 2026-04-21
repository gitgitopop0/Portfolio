import React, { useState, useEffect } from 'react'
import '../../styles/Navbar.css'
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {
    const [Lang, setLang] = useState('en')
    const location = useLocation()

    useEffect(() => {
        const storedLang = localStorage.getItem('lang')
        if (storedLang) {
            setLang(storedLang)
        }
    }, [])

    const handleLangChange = (e) => {
        const value = e.target.value
        setLang(value)
        localStorage.setItem('lang', value)

        window.dispatchEvent(new Event('langChange'))
    }

    const getTitle = () => {
        if (location.pathname === "/") return "My Work"
        if (location.pathname === "/contact") return "Contact"
        return "My Work"
    }

    return (
        <>
            <div className="mainNav">
                <div className="myworkNav">{getTitle()}</div>
                <ul className="navList">
                    <li className='listnav'><NavLink className='listnavLink' to="/">Home</NavLink></li>
                    <li className='listnav'><NavLink className='listnavLink' to="/contact">Contact</NavLink></li>
                    <li className='langWrapper'>
                        <select className='langSelect' value={Lang} onChange={handleLangChange}>
                            <option value="en">EN</option>
                            <option value="th">TH</option>
                        </select>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar