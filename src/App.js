import './App.css';
import Navbar from './Components/Navbar';
import Home1 from './Components/Home/Home1';
import About from './Components/About/About';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Footer from './Components/Footer';
import Project from './Components/Project/Project';
import Resume from './Components/Resume/Resume';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home1 />} ></Route>
            <Route exact path="/about" element={<About />} ></Route>
            <Route exact path="/project" element={<Project />} ></Route>
            <Route exact path="/resume" element={<Resume />} ></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
