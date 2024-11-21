import React from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Details from "./components/Details";
import Footer from "./components/Footer";
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Profile />
      <Details />
      <Footer />
    </div>
  );
};

export default App;
