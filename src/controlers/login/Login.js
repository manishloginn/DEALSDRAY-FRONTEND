import React, { useEffect, useState } from 'react'
import './loginstyle.css'
import axios from 'axios'
import { endpoint } from '../endoints/endpoint'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

const Login = ({login, setlogin}) => {

    const navigate = useNavigate()

    const [formData, setformData] = useState({
        username:'',
        password:''
    })

    console.log(login)

    const haldelChange = (e) => {
        setformData((prev) => ({
            ...prev,
            [e.target.name] : e.target.value
        })
        )
    }

    const hendelSubmit = (e) => {
        e.preventDefault()
        axios.post(endpoint.login, formData)
        .then((res) => {
            console.log(res.data)
            if(res.status === 200){
                Cookies.set("userToken", res.data.token)
                setlogin(false)
                navigate('/home')
            }
        }).catch((err ) => {
            console.log(err)
        })
    }



    return (
        <div>
            <h3 className='logincontent'>Login Page</h3>
            <div className='logincontainer'>
                <form className='form' onSubmit={hendelSubmit}>
                    <div className='inputDiv'>
                        <label htmlFor='username'>User Name</label>
                        <input type='text' name='username' id='username' onChange={haldelChange} value={formData.username} required />
                    </div>
                    <div className='inputDiv'>
                        <label htmlFor='password'>Password</label>
                        <input type='text' name='password' id='password' onChange={haldelChange} value={formData.password} required />
                    </div>
                    <div className='button'>
                    <button type='submit'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
