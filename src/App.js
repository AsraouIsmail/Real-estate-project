/* eslint-disable no-unused-vars */

import Best from './components/Best';
import Featured from './components/Featured';
import Navbar from './components/Navbar';
import './index.css';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="featured" element={<Featured />} />
        <Route path="best" element={<Best />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
