
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/signin" element={<SignIn />} />
  </Routes>
</Router>

  );
}

export default App;
