import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import UserContext from '../Context/UserContext';

function Navbar() {
    const userdata = useContext(UserContext);
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">

                <h2>Teacher-Student CRUD WITH API</h2>
                <div>
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">{userdata.username}</span>
                    <img className="img-profile rounded-circle" style={{ width: 30 }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLNVeRVAa6t-lq4qpDwr1MU1ZPvRf2WcuXtw&usqp=CAU" />
                    <Link className="btn btn-outline-success btn-sm" to="/">Logout</Link>
                </div>

            </div>
        </nav>

    )
}

export default Navbar