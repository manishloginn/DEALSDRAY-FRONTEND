import React, { useState } from 'react'
import { jwtDecode } from 'jwt-decode'
import Cookies from 'js-cookie'
import { Link, Route, Routes } from 'react-router-dom'
import './employeecontainer.css'
import EmployesData from './EmployesData'





const EmployeDashboard = () => {


    const [user, setuser] = useState([])
    const token = Cookies?.get('userToken')

    // console.log(token)

    useState(() => {
        if(token !== undefined) {
            setuser(jwtDecode(token))
        }
    }, [token])

    return (
        <>
            <div className='employeecontainer'>
                <div className='linkContainer'>
                    <div className='links'>
                        <Link to='/home'> home </Link>
                        <Link to='/employeelist'> Employee List </Link>
                    </div>
                    <div className='linksname'>
                        <p>{user?.username}</p>
                        <button>Log out</button>
                    </div>
                </div>

            </div>
           
        </>
    )
}

export default EmployeDashboard
