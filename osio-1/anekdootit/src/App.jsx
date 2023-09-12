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


function App() {
  //#region MUUTTUJAT
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
  const [mostVotes, setmostVotes] = useState(0);
  const [points, setPoints] = useState(new Array(anectodes.length).fill(0));
  //#endregion

  //#region TAPAHTUMANKÄSITTELIJÄT
  const handleRandomSelectedAnectode = () => {
    const min = 0;
    const max = anectodes.length;
    //console.log(max);
    const randomSelection = Math.floor(Math.random() * (max - min)) + min;
    console.log("selected anectode number: ", randomSelection);
    setSelected(randomSelection);
  };
  const handleVote = () => {
    console.log(selected);
    console.log("points array before: ", points);
    const copyPoints = [...points];
    console.log("copied points array before: ", copyPoints);
    copyPoints[selected] += 1;
    console.log("copied points array after: ", copyPoints);
    setPoints(copyPoints);


    let largest = copyPoints[0];
    let position = 0;
    for (let index = 0; index < copyPoints.length; index++) {
      if (copyPoints[index] > largest) {
        largest = copyPoints[index];
        position = index;
      }
    }
    console.log("largest number: ",largest, "position: ", position);
    const updatedPosition = position;
    setmostVotes(updatedPosition);
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
      <h2>Anectode of the day:</h2>
      <p>{anectodes[selected]}</p>
      <Button
        handleClick={handleRandomSelectedAnectode}
        text="next anectode"
      ></Button>
      <p>this anectode has {points[selected]} votes</p>
      <Button handleClick={handleVote} text="vote this anectode"></Button>
      <h2>Anectode with the most votes:</h2>
      <p>{anectodes[mostVotes]}</p>
    </>
  );
}

export default App;
