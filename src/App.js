import React from "react";
import JobList from "./components/job/JobList";
import MyNavbar from "./components/Navbar";
import HeroSection from "./components/hero/HeroSection";
function App() {
  return (
    <div className="App">
      <MyNavbar />
      <HeroSection />
      <JobList />
    </div>
  );
}

export default App;
