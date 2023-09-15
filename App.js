//import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import ContactUs from './components/pages/ContactUs';
import Navbar from './components/layout/Navbar';

export function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/> 
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<ContactUs/>} />

        </Routes>

      </BrowserRouter>
      
    </>
  );
}

export default App;
