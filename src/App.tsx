import { useState } from "react";
import GlobalStyles from "./components/GlobalStyles";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Experience from "./components/Experience";
import Chef from "./components/Chef";
import Reservation from "./components/Reservation";
import Footer from "./components/Footer";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      <GlobalStyles />
      <Loading onDone={() => setLoaded(true)} />
      {loaded && (
        <>
          <Navbar />
          <div style={{ animation: "fadeUp .7s ease both" }}>
            <Hero />
            <About />
            <Menu />
            <Experience />
            <Chef />
            <Reservation />
            <Footer />
          </div>
        </>
      )}
    </>
  );
}