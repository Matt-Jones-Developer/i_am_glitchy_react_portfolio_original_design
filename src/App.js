import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Squares from './components/SquaresAnim';
import Footer from './components/Footer';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css'

// layout component for tidy semantic HTML
// I have 2 headers per page
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Squares />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router basename="i_am_glitchy_react_portfolio_original_design">
      <NavBar />
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} index={true} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/skills" element={<Layout><Skills /></Layout>} />
        <Route path="/projects" element={<Layout><Projects /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
      </Routes>
    </Router>
  );
};

export default App;
