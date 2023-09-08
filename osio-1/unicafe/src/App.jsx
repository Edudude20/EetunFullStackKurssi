/* eslint-disable react/prop-types */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import fullStackLogo from "./assets/fullstack.svg";
import "./App.css";

const Button = (props) => {
  //console.log(props);
  const { handleClick, text } = props;
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  if (text === "positive") {
    return (
      <table>
        <tbody>
          <tr>
            <td>{text}</td>
            <td>{value} %</td>
          </tr>
        </tbody>
      </table>
    );
  }

  return (
    <table>
      <tbody>
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
      </tbody>
    </table>
  );
};

const Statistics = (props) => {
  console.log(props);
  const { good, bad, neutral, total } = props;

  if (total === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <div>
      <h2>Statistics</h2>
      <StatisticLine text="good" value={good}></StatisticLine>
      <StatisticLine text="neutral" value={neutral}></StatisticLine>
      <StatisticLine text="bad" value={bad}></StatisticLine>
      <StatisticLine text="all" value={total}></StatisticLine>
      <StatisticLine
        text="average"
        value={(good - bad) / total}
      ></StatisticLine>
      <StatisticLine
        text="positive"
        value={(100 * good) / total}
      ></StatisticLine>
    </div>
  );
};

function App() {
  //#region MUUTTUJAT
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const anectodes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
const [selected, setSelected] = useState(0);
  //#endregion

  const handleGoodClick = () => {
    //console.log("good before", good);
    const updatedGood = good + 1;
    setGood(updatedGood);
    //console.log("updated good", updatedGood);
    setTotal(total + 1);
    //console.log("total:", total);
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
  const handleRandomSelectedAnectode = () => {

    
    const min = 0;
    const max = anectodes.length;
    //console.log(max);
    const randomSelection = Math.floor(Math.random() * (max - min)) + min;
    console.log(randomSelection);
    setSelected(randomSelection);

  }

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
      <Button handleClick={handleGoodClick} text="good 1+"></Button>
      <Button handleClick={handleNeutralClick} text="neutral 0"></Button>
      <Button handleClick={handleBadClick} text="bad -1"></Button>
      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        total={total}
      ></Statistics>
      <Button handleClick={handleRandomSelectedAnectode} text="random anectode"></Button>
      <div>
        {anectodes[selected]}
      </div>
    </>
  );
}

export default App;
