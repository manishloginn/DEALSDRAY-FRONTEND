import { BrowserRouter, Route, Router, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './controlers/navbar.js/Navbar';
import Dashboard from './controlers/dashboard/Dashboard';
import EmployeDashboard from './controlers/dashboard/EmployeDashboard';
import EmployesData from './controlers/dashboard/EmployesData';
import { useEffect } from 'react';
import Cookies from 'js-cookie'
import AddEmplyeerControler from './controlers/dashboard/AddEmplyeerControler';
import EditEmplyeerControler from './controlers/dashboard/EditEmplyeerControler';


const HomeRout = () => {

  const token = Cookies.get('userToken')

  const navigate = useNavigate()

  useEffect(() => {
    if (token === undefined) {
      alert('please login first')
      return navigate('/')
    }
  }, [])


  const style = {
    display: "flex",
    justifyContent: "Center",
    AligneIten: "Center",
  }

  return (
    <>
      <EmployeDashboard />
      <div style={style}>
        <h1 >Welcome Admin Panel</h1>
      </div>
    </>
  )
}


function App() {


  return (
    <BrowserRouter >
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/home' element={<HomeRout />} />
          <Route path='/employeelist' element={<EmployesData />} />
          <Route path='/addEmployee' element={<AddEmplyeerControler />} />
          <Route path='/edit_employee/:id' element={<EditEmplyeerControler />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
