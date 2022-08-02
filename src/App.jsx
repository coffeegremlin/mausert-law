import { useState, useEffect } from "react";
import { Nav } from "./components/nav";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Team } from "./components/theTeam";
import { Contact } from "./components/contact";
import { FAQ } from "./components/faq";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Nav />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Team data={landingPageData.Team} />
      <FAQ data={landingPageData.Faq} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
