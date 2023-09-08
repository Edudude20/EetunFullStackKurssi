/* eslint-disable react/prop-types */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import fullStackLogo from "./assets/fullstack.svg";
import "./App.css";

const Nappi = (props) => {
  //console.log(props);
  const { handleClick, text } = props;
  return <button onClick={handleClick}>{text}</button>;
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const handleGoodClick = () => {
    console.log("good before", good);
    const updatedGood = good + 1;
    setGood(updatedGood);
    console.log("updated good", updatedGood);
    setTotal(total + 1);
    console.log(total);
  };
  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    setTotal(total + 1);
    console.log(total);
  };
  const handleBadClick = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
    setTotal(total + 1);
    console.log(total);
  };
  
  return (
    <>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
        <img
          src={fullStackLogo}
          className="logo"
          alt="Fullstack -course logo"
        />
      </div>
      <h1>1d Unicafe</h1>
      <h2>Give feedback</h2>
      <Nappi handleClick={handleGoodClick} text="good"></Nappi>
      <Nappi handleClick={handleNeutralClick} text="neutral"></Nappi>
      <Nappi handleClick={handleBadClick} text="bad"></Nappi>


      <h2>Statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average: {(good - bad) / total}</p>
      <p>positive: {good / total}</p>
    </>
  );
}

export default App;
