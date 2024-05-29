import './App.css'
import Home from './components/home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App(){
    return(
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='*' element={<p>404</p>}/>
                </Routes>
            </Router>
        </div>

    )
}

export default App