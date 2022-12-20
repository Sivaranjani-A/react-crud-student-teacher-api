import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function Portal() {

    return (
        <>
            <div id="wrapper">
                <Navbar />
                <div className="container-fluid mt-3">
                    <Outlet></Outlet>
                </div>
            </div>

        </>
    )
}

export default Portal