import React, { useEffect, useState } from 'react'
import './navstyle.css'
import Links from '../links/Links'
import Login from '../login/Login'
import Cookies from 'js-cookie'

const Navbar = () => {

    const [cookie, setcookie] = useState('')

    useEffect(() => {
      const findcookie = Cookies.get('userToken')
      setcookie(findcookie)
    }, [])

    // console.log(cookie)

    return (
        <>
            <div className='navContainer'>
                <div className='logo'><span className='Employe'>Employe</span> <span className='management'>Management</span> </div>
            </div>
            {
                cookie ?    <Links /> :<Login />
            }
         
            
        </>
    )
}

export default Navbar
