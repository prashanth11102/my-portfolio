import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Certifications from './components/Certifications'; // Importing Certifications
import Achievements from './components/Achievements'; // Importing Achievements

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/certifications' element={<Certifications />} />
        <Route path='/achievements' element={<Achievements />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
