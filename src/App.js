import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Nav';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog'
import "bootstrap/dist/css/bootstrap.min.css";
import Video from './components/Videos/Video';
import Contact from './components/Contact/Contact';
import './App.css';
const App = () => {
  const [current, setCurrent] = useState('');
  const handleNav = (route) => {
    setCurrent(route);
  }
  return (
    <Router>
      <Navbar />
      <div className="wrapper">
        <Routes>
          <Route exact path="/" onClick={() => handleNav('Home')} element={<Home/>} />
          <Route path="/blog" onClick={() => handleNav('Blog')}  element={<Blog/>} />
          <Route path="/videos" onClick={() => handleNav('Video')} element={<Video/>} />
          <Route path="/contact" onClick={() => handleNav('Contact')} element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
