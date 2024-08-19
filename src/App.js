// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import './index.css';
import logo from './images/logo.jpg';
import Carousel from "./components/Carousel";
import BusinessFamily from "./components/BusinessFamily";
import Service from "./components/Service";
import TeamMember from "./components/TeamMember";
import Value from "./components/Value";
import MainServices from "./components/MainServices";
import Expertise from "./components/Expertise";
import Process from "./components/Process";
import Footer from "./components/Footer";
import ProgressBar from './components/ProgressBar';
import Counter from './components/Counter';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="App">
      {loading ? <LoadingScreen /> : <MainContent />}
      <ProgressBar />
    </div>
  );
}

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <img src={logo} alt="Loading..." className="loading-logo" />
    </div>
  );
}

function MainContent() {
  return (
    <div>
      <div>
        <section id="home">
          <Carousel />
        </section>
        <BusinessFamily />
          <Service />
        <section id="about-us">
          <TeamMember />
        </section>
        <Value />
        <section id="services">
        <MainServices />
        </section>
        {/* <Impact /> */}
        <Counter/>
        <Expertise />
        <Process />
        <Footer />
      </div>
    </div>
  );
}

export default App;
