import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar'
import Projects from './Components/Projects';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
    </div>
  );
}

export default App;
