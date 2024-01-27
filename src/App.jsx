import './App.css'
import Login from './components/login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './components/register'
import Dashboard from './pages/dashboard'
import EditProfilePage from './pages/edit-profile'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/edit-profile' element={<EditProfilePage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
