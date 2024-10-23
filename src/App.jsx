/* eslint-disable no-unused-vars */
import React, { lazy, useState, useEffect } from "react";
import { debounce } from 'lodash';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import { BeatLoader } from "react-spinners";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import WorkPage from "./Pages/WorkPage";
import NavBar from "./Components/NavBar";
import ParticleBackground from './Components/ParticleBackground';

const Home = React.memo(lazy(() => import("./Pages/Home")))

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      console.log('Scrolling...');
    };

    // debounce(handleScroll, 200) delays the execution of handleScroll by 200 milliseconds. So, if the user keeps scrolling, handleScroll will only be called after they've stopped for at least 200ms. This prevents the handleScroll function from being called too frequently, which could cause performance issues.
    const debouncedHandleScroll = debounce(handleScroll, 200);

    window.addEventListener('scroll', debouncedHandleScroll);

    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={loading ? "setBackground w-full h-screen flex items-center justify-center" : "setBackground w-full flex items-center justify-center"}>
      <ParticleBackground />
      {loading ? (
        <BeatLoader className="text-gradient" size={50} color={"#D76571"} />
      ) : (
        <Router>
          <Header />
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/work" element={<WorkPage />} />
            <Route exact path="/contact" element={<ContactPage />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
