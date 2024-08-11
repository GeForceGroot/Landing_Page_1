import "./App.css";
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UpperBar from "./components/UpperBar";
import './index.css'
import logo from './images/logo.jpg'
import Navbar from "./components/Navbar";


function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading process (e.g., fetching data)
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Replace this with your actual loading process
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
      <UpperBar />
      <Navbar/>
      <Router>
        <Switch></Switch>
      </Router>
    </div>
  );
}

export default App;
