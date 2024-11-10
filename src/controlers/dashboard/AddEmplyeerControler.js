import React, { useState } from 'react'
import EmployeDashboard from './EmployeDashboard'
import "./addemployee.css"
import axios from 'axios'
import { endpoint } from '../endoints/endpoint'
import { useNavigate } from 'react-router-dom'

const AddEmplyeerControler = () => {


    const [empform, setEmpform] = useState({
        name: "",
        email: "",
        mobile: "",
        designation: "",
        gender: "",
        course: []


    })

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target
        if (type === "checkbox") {
            setEmpform(prev => ({
                ...prev,
                course: checked
                    ? [...prev.course, value]
                    : prev.course.filter(course => course !== value)
            }))
        }
        else {
            setEmpform(prev => ({
                ...prev,
                [name]: value
            }))
        }

    }


    const navigate = useNavigate()
    const handelSubmit = async (e) => {
        e.preventDefault()
    
        const response = await axios.post(endpoint.createEmploye, empform)
        if(response.status === 200){
            navigate('/employeelist')
        }
        console.log(response.status)
    }



    return (
        <>

            <EmployeDashboard />

            <form className='form' onSubmit={handelSubmit} >
                <div className='inputDiv'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' name='name' id='name'
                        value={empform.name}
                        onChange={handleInputChange}
                        required />
                </div>
                <div className='inputDiv'>
                    <label htmlFor='email'>Email</label>
                    <input type='text' name='email' id='email'
                        value={empform.email}
                        onChange={handleInputChange}
                        required />
                </div>
                <div className='inputDiv'>
                    <label htmlFor='mobile'>Mobile No</label>
                    <input type='text' name='mobile' id='mobile'
                        value={empform.mobile}
                        onChange={handleInputChange}
                        required />
                </div>
                <div className='inputDiv'>
                    <label htmlFor='designation'>Designation</label>
                    <select
                        name='designation'
                        id='designation'
                        value={empform.designation}
                        onChange={handleInputChange}
                        required>
                        <option value="">Select</option>
                        <option value="HR">HR</option>
                        <option value="Manager">Manager</option>
                        <option value="Sales">Sales</option>
                    </select>
                </div>
                <div className='inputDiv'>
                    <label>Gender</label>
                    <input
                        type='radio'
                        name='gender'
                        value='male'
                        checked={empform.gender === 'male'}
                        onChange={handleInputChange}
                    /> Male
                    <input
                        type='radio'
                        name='gender'
                        value='female'
                        checked={empform.gender === 'female'}
                        onChange={handleInputChange}
                    /> Female
                </div>
                <div className='inputDiv'>
                    <label htmlFor='course'>Course</label>
                    <input
                        type='checkbox'
                        name='course'
                        value='MCA'
                        checked={empform.course.includes('MCA')}
                        onChange={handleInputChange}
                    /> MCA
                    <input
                        type='checkbox'
                        name='course'
                        value='BCA'
                        checked={empform.course.includes('BCA')}
                        onChange={handleInputChange}
                    /> BCA
                    <input
                        type='checkbox'
                        name='course'
                        value='BSC'
                        checked={empform.course.includes('BSC')}
                        onChange={handleInputChange}
                    /> BSC
                </div>
                <div className='button'>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </>
    )
}

export default AddEmplyeerControler
