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
  //Lisätään % (prosentti) -merkki positiivisten painauksien suhdetta esittävään laskuriin
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
  } else {
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
  }
};

const Statistics = (props) => {
  //console.log(props);
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
  //#endregion

  //#region TAPAHTUMANKÄSITTELIJÄT
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
  //#endregion

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
    </>
  );
}

export default App;
