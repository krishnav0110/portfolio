import { useState, useEffect, useCallback } from "react";

import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";

import "./App.css";

const letters = "aaḁ̴̽͗bbb̷̛̮̈́ccc̷̺͊̉ddd̴̹̔eeȇ̴ͅfff̴͓̫̐͌ggg̸̯̯̈hhh̵͖̟̾iii̸̺͝jjj̴̝̟̊̔kkk̶̻̝̉̔lll̷͉͝ͅmmm̸̟̈́̌ͅnnn̶͉͆͂ooo̴̮̖̚ppp̷͓̺̅qqq̷̢̉͝rrr̷̳͋ssṡ̴̹ttt̸̼̋uuu̴̱̕vvv̶̬̼̊www̵̥̽͠xxx̴̙̂̒yyy̶̯̽zzz̷̩̣̀";
const lettersLen = letters.length;

const titles = ["Developer", "Engineer", "Programmer"];
const titlesLen = titles.length;

function App() {
  const [targetTitle, setTargetTitle] = useState(titles[0]);
  const [title, setTitle] = useState(titles[0]);
  const [titleIndex, setTitleIndex] = useState(0);

  const GetText = useCallback(() => {
    const index = (titleIndex + 1) % titlesLen;
    setTitleIndex(index);
    return titles[index];
  }, [titleIndex]);

  const ChangeTitle = useCallback(() => {
    let iterations = 0;

    const intervalID = setInterval(() => {
      const text = targetTitle.split("").map((letter, index) => {
        if(index < iterations) {
          return targetTitle[index];
        } else {
          return letters[Math.floor(Math.random() * lettersLen)];
        }
      }).join("");

      setTitle(text);
      if(iterations >= targetTitle.length) {
        setTitle(targetTitle);
        clearInterval(intervalID);
      }
      iterations += 0.35;
    }, 50);
  }, [targetTitle]);

  useEffect(() => {
    setTimeout(() => {
      setTargetTitle(GetText());
      ChangeTitle();
    }, 5000);
  }, [GetText, ChangeTitle]);



  

  const siteProps = {
    name: "Krishna Vishwakarma",
    title: "Software " + title,
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
