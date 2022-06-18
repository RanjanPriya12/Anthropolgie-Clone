
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Footer } from './Components/Footer';
import Navbar from './Components/Navbar/Navbar';
import Address from './Components/Pages/Address';
import BeautyProducts from './Components/Pages/BeautyProducts';
import { CartPage } from './Components/Pages/CartPage';
import Dresses from './Components/Pages/Dresses';
import Garden from './Components/Pages/Garden';
import Home from './Components/Pages/HomePage/Home';
import ProductB from './Components/Pages/HomePage/ProductB';
import ProductD from './Components/Pages/HomePage/ProductD';
import ProductG from './Components/Pages/HomePage/ProductG';
import ProductJ from './Components/Pages/HomePage/ProductJ';
import Jewelry from './Components/Pages/Jewelry';
import { Login } from './Components/Pages/Login';
import PaymentPage from './Components/Pages/PaymentPage';


function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>

<Route path='/login' element={<Login/>}/>

<Route path='/cart' element={<CartPage/>}/>

        <Route path='/accessories' element={<Jewelry/>}/>
        <Route path="/accessories/:id" element={<ProductJ/>}/>
        <Route path="/address" element={<Address />}></Route>
        <Route path="/payment" element={<PaymentPage/>}/>
        
        <Route path='/garden' element={<Garden/>}/>
        <Route path="/garden/:id" element={<ProductG/>}/>
        
        <Route path='/furniture' element={<Garden/>}/>
        <Route path="/furniture/:id" element={<ProductG/>}/>
        
        <Route path='/dress' element={<Dresses/>}/>
        <Route path="/dress/:id" element={<ProductD/>}/>
        
        <Route path='/clothing' element={<Dresses/>}/>
        <Route path="/clothing/:id" element={<ProductD/>}/>
      
        <Route path='/beauty' element={<BeautyProducts/>}/>
        <Route path="/beauty/:id" element={<ProductB/>}/>
       
        
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
