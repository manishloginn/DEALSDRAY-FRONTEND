import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import { endpoint } from '../endoints/endpoint'
import Cookies from 'js-cookie'
import './employesDetail.css'
import EmployeDashboard from './EmployeDashboard'
import { Link, useNavigate } from 'react-router-dom'

const EmployesData = () => {

    const [employeeData, setEmployeeData] = useState([])
    const token = Cookies.get('userToken')
    const navigate = useNavigate()


    

    useEffect(() => {
        const fetchEmpData = async () => {
            try {
                if (token === undefined) {
                    alert('please login first')
                    return navigate('/')
                }
                const response = await axios.get(endpoint.employeeDetail)
                setEmployeeData(response.data.data)
            } catch (error) {
                console.log("Error fetching employee data:", error)
            }
        }
        fetchEmpData()
    }, [])

    // console.log(employeeData)
    const handelDelete = async (e) => {
        console.log(e.target.id)
        const item = e.target.parentNode.parentNode
        item.remove()
        try {
            const response = await axios.post(endpoint.deletEmployee, { id: e.target.id })
            if(response.status === 200){
                alert('userDelete')
                navigate('/employeelist')
            }
        } catch (error) {
            console.log(error)
        }
    }


    const handelEdit = (e) => {
        e.preventDefault();

         console.log(e.target.id)

        // console.log(e.target.parentNode.parentNode)

        const filterData = employeeData?.find((value) => value._id === e.target.id)

        if (filterData) {
            Cookies.set("editEmployee", JSON.stringify(filterData))
            // console.log("Employee data set in cookie:", filterData)
        } else {
            alert("Employee not found")
        }

        navigate(`/edit_employee/${e.target.id}`)
    }

    let number = 1;
    const makingSeriouNumber = (index) => {
        for (let i = 1; i <= index; i++) {
            return number += 1
        }
        return number
    }

    return (
        <>
            <EmployeDashboard />
            <div className='tableContainer'>
                <Link to='/addEmployee'>add employee</Link>


                <table className='table'>
                    <tr >
                        <th>Unique id</th>
                        <th>images</th>
                        <th>name</th>
                        <th>Email</th>
                        <th>Mobile no</th>
                        <th>Designation</th>
                        <th>gender</th>
                        <th>Course</th>
                        <th>Created Date</th>
                        <th>action</th>
                    </tr>
                    {
                        employeeData.length > 0 ?
                            employeeData.map((value, index) => (
                                <tr key={index}>
                                    <td>{makingSeriouNumber(index)}</td>
                                    <td>
                                        <img style={{width:"60px"}} src={value.image} />
                                    </td>
                                    <td>{value.name}</td>
                                    <td>{value.email}</td>
                                    <td>{value.mobile}</td>
                                    <td>{value.designation}</td>
                                    <td>{value.gender}</td>
                                    <td>{value.course}</td>
                                    <td>{value.CreatedDate}</td>
                                    <td>
                                        <button onClick={(e) => handelEdit(e)}  id={value._id}>edit</button>
                                        -
                                        <button onClick={(e) => handelDelete(e)} id={value._id}>delete</button>
                                    </td>
                                </tr>

                            )) 
                            
                            : <h1> No Detail Found</h1>
                    }
                </table>
            </div>
        </>
    )
}

export default EmployesData
