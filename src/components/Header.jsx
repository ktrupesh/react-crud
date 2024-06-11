import React from 'react'
import { Link, NavLink } from 'react-router-dom'
function Header() {
    return (
        <>
            <header className=' position-sticky top-0'>
                <div className="container">
                    <div className="logo">
                        <NavLink to='/' className=' text-white'><h4>Nandani Dashboard</h4></NavLink>
                    </div>


                    <div className="admin-serch">
                        <div className="input-group">
                            <h5>Dashboard Admin Setting</h5>
                        </div>
                    </div>

                    <div className="icon d-flex justify-content-center align-items-center gx-2">
                        <ul className=' p-0 m-0 d-flex justify-content-center align-items-center gap-3'>
                            <li><Link className=' text-white fw-bolder'>Addmin</Link></li>
                            <li><Link to='addminlogin' className=' text-white fw-bolder'>Login</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header