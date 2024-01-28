import './App.css'
import Login from './components/login'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from './components/register'
import Dashboard from './pages/dashboard'
import EditProfilePage from './pages/edit-profile'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/edit-profile' element={<EditProfilePage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
