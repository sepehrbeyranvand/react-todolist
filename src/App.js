import './App.css'
import Contact from './components/contact'
import Home from './components/home'
import { BrowserRouter as Router, Route,NavLink, Routes } from 'react-router-dom'
import LogIn from './components/login'


function App(){
    return(
        <div>
            <Router>
                <nav>
                <div className="p-5 bg-[#030303] flex justify-around">
                <h1 className="text-xl text-white font-bold">TODO❤</h1>
                <div>
                    <NavLink to='/' className="text-lg p-2  text-white mx-3">Home</NavLink>
                    <NavLink to='/contact' className="text-lg p-2  text-white mx-3">Contact Us</NavLink>
                    <NavLink to='/login' className="text-lg p-2  text-white mx-3">Log in </NavLink>
                </div>
            </div>
                </nav>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/login' element={<LogIn/> }/>
                    <Route path='*' element={<p>404</p>}/>
                </Routes>
            </Router>
        </div>

    )
}

export default App