
import { Routes, Route } from 'react-router-dom';
import './App.css';
import BeautyProducts from './Components/BeautyProducts';
import Dresses from './Components/Dresses';
import Garden from './Components/Garden';
import Home from './Components/Home';
import Jewelry from './Components/Jewelry';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/accessories' element={<Jewelry/>}/>
        <Route path='/garden' element={<Garden/>}/>
        <Route path='/dress' element={<Dresses/>}/>
        <Route path='/wedding' element={<Dresses/>}/>
        <Route path='/beauty' element={<BeautyProducts/>}/>
      </Routes>
    </div>
  );
}

export default App;
