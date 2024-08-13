import "./App.css";
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './index.css'
import logo from './images/logo.jpg'
import Carousel from "./components/Carousel";
import BusinessFamily from "./components/BusinessFamily";
import Service from "./components/Service";
import TeamMember from "./components/TeamMember";


function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading process (e.g., fetching data)
    setTimeout(() => {
      setLoading(false);
    }, 3200); // Replace this with your actual loading process
  }, []);

  return (
    <div className="App">
      {loading ? <LoadingScreen /> : <MainContent />}
    </div>
  );
}

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <img src={logo} alt="Loading..." className="loading-logo"/>
    </div>
  );
}

function MainContent() {
  return (
    <div>
      <Carousel/>
      <BusinessFamily/>
      <Service/>
      <TeamMember/>
    </div>
  );
}

export default App;
