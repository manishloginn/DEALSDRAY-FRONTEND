import React, {  useEffect, useMemo, useState } from 'react'
import Login from '../login/Login'
import Cookies from 'js-cookie'
import EmployeDashboard from './EmployeDashboard'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const [login, setlogin] = useState(true)


  const cookie = Cookies.get("userToken")

  console.log(cookie?.length)

  const navigate = useNavigate()
 
  useEffect(() => {
    if (cookie?.length === undefined) {
      console.log('ok')
      setlogin(true)
    } else if (cookie?.length !== undefined){
      navigate('/home')
    }
  }, [cookie])



  return (
    <div>
      {
        login && cookie?.length == undefined && <Login login={login} setlogin={setlogin} /> 
      }
    </div>
  )
}

export default Dashboard
