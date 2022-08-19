import React from "react";
import Header from "./Components/Header/Header.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import About from "./Components/About me/Aboutme.jsx";
import Experience from "./Components/Experience/Experience.jsx";
import Contact from "./Components/Experience/Experience.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Latest from "./Components/Latest News/Latest.jsx";
import Testimonials from "./Components/Testimonials/Testimonials.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Header />

      {/*//line-height: 55%; making overlap errors*/}

      <About />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
