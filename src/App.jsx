import React, { useRef, useState } from 'react'
import "./App.css"
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Work from './Components/Work/Work';
import Team from './Components/Team/Team';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  // const [cred, setCred] = useState({})
 
  const name = useRef();
  const pass = useRef();

  // console.log(cred)

  const toggleTheme = () => {
    setDarkMode(!darkMode);

    if (!darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    // <div>
    //   {loggedIn ? (
    //     <div>
    //       <Navbar toggleTheme={toggleTheme} darkMode={darkMode} setDarkMode={setDarkMode} setLoggedIn={setLoggedIn} />
    //       <Home darkMode={darkMode} />
    //       <Services />
    //       <Work />
    //       <Team />
    //       <Contact />
    //       <Footer />
    //     </div>
    //   ) : (
    //     <Login name={name} pass={pass} setLoggedIn={setLoggedIn} />
    //   )}
    // </div>
    <div>
      <Navbar toggleTheme={toggleTheme} darkMode={darkMode} setDarkMode={setDarkMode} setLoggedIn={setLoggedIn} />
      <Home  />
      <Services />
      <Work />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default App
