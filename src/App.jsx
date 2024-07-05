import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Certifications from './components/Certifications'; 
import Achievements from './components/Achievements'; 
import Skills from './components/Skills'; 

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/certifications' element={<Certifications />} />
        <Route path='/achievements' element={<Achievements />} />
        <Route path='/skills' element={<Skills />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
