import './App.css';
import {Route, Routes} from "react-router-dom"
import Homee from './routes/Homee';
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';
import Signup from './routes/Signup';
import Login from './routes/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homee/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
