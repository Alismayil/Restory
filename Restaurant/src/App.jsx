import './App.css'
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from './layout/Navbar';
import AboutPage from './page/AboutPage';
import BlogPage from './page/blogPage';
import LocationPage from './page/locationPage';
import MenuPage from './page/menuPage';
import ReservationPage from './page/reservationPage';
import HomePage from './page/HomePage';
import Footer from './layout/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/menu' element={<MenuPage/>} />
          <Route path='/reservation' element={<ReservationPage/>} />
          <Route path='/blog' element={<BlogPage/>} />/
          <Route path='/location' element={<LocationPage/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
