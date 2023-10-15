import "./App.css";
import Contact from "./components/Contact";
import About from "./components/About";
import Services from "./components/Services";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Contact />
    </>
  );
}

export default App;
