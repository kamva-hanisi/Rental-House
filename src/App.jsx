import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Houses from './Components/Houses/Houses'
import ContactUs from './Components/ContactUs/ContactUs'
import AboutUs from './Components/AboutUs/AboutUs'
import Slider from './Components/slider/slider';

// import { slides } from './data/carouselData.json';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/About Us' element={<AboutUs />} />
        <Route path='/Houses' element={<Houses />} />
        <Route path='/Contact us' element={<ContactUs />} />
      </Routes>
      <Slider />
    </div>
  )
}

export default App
