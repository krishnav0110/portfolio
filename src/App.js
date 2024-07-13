import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";

import "./App.css";

function App() {
  const siteProps = {
    name: "Krishna Vishwakarma",
    title: "Software Engineer",
    email: "krishnavishwakarmamu@gmail.com",
    gitHub: "krishnav0110",
    linkedIn: "krishna-vishwakarma",
  };

  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Contact {...siteProps} />
      <Footer {...siteProps} />
    </div>
  );
}

export default App;
