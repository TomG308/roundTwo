import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {

    render() {
        return (
            <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
                <h1>h01 navbar</h1>
                <Link to='/' className='navbar-brand'>Home</Link>
                <div className='collpase navbar-collapse'>
                <ul className='navbar-nav mr-auto'>
                    <li className='navbar-item'>
                    <Link to='/about' className='nav-link'>About</Link>
                    </li>
                    <li className='navbar-item'>
                    <Link to='/events' className='nav-link'>Events</Link>
                    </li>
                    <li className='navbar-item'>
                    <Link to='/issues' className='nav-link'>Issues</Link>
                    </li>
                    <li className='navbar-item'>
                    <Link to='/volunteer' className='nav-link'>Volunteer</Link>
                    </li>
                </ul>

                </div>
            </nav>
        )
    }
}