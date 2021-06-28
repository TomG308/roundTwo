import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {

    render() {
        return (
            <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
                <h1>h01 navbar</h1>
                <Link to='/' className='navbar-brand'>Supporter tracker</Link>
                <div className='collpase navbar-collapse'>
                <ul className='navbar-nav mr-auto'>
                    <li className='navbar-item'>
                    <Link to='/' className='nav-link'>Supporters</Link>
                    </li>
                    <li className='navbar-item'>
                    <Link to='create' className='nav-link'>Create supporter log</Link>
                    </li>
                    <li>
                    <Link to='/create' className='navbar-item' ></Link>
                    </li>
                </ul>

                </div>
            </nav>
        )
    }
}