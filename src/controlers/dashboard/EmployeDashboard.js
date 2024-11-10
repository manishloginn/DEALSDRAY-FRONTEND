import React, { useState } from 'react'
import { jwtDecode } from 'jwt-decode'
import Cookies from 'js-cookie'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import './employeecontainer.css'
import EmployesData from './EmployesData'





const EmployeDashboard = () => {


    const [user, setuser] = useState([])
    const token = Cookies?.get('userToken')

    // console.log(token)

    useState(() => {
        if (token !== undefined) {
            setuser(jwtDecode(token))
        }
    }, [token])

    const navigate = useNavigate()
    const deletetoken = (e) => {
        e.preventDefault()
        Cookies.remove('userToken')
        Cookies.remove("editEmployee")
        navigate('/')
    }
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
                        <button onClick={deletetoken}>Log out</button>
                    </div>
                </div>

            </div>

        </>
    )
}

export default EmployeDashboard
