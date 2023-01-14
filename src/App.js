import './App.css';
import {Route,Routes} from "react-router-dom"
import Features from './components/Features';
import Rent from './components/Rent';
import Sale from './components/Sale';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
       <NavBar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/sale' element={<Sale/>}/>
    <Route path='/rent' element={<Rent/>}/>
    <Route path='/features' element={<Features/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
