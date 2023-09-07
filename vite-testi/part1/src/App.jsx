import { Component, useState } from "react";

const Hello = ({ name, age }) => {
  //DESTRUKTUROINTI
  // const name = props.name;
  // const age = props.age;
  // const {name,age} = props;

  //console.log(name);

  const bornYear = () => new Date().getFullYear() - age;

  return (
    <>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </>
  );
};

const Display = (props) => {
  console.log(props);
  return <div></div>;
};

const Nappi = (props) => {
  console.log(props);
  const { handleClick, text } = props;
  return <button onClick={handleClick}>{text}</button>;
};

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }

  return <div>button press history: {props.allClicks.join("-")}</div>;
};

const App = () => {
  //#region 1a,b,c

  const nimi = "Pekka";
  const ika = 10;
  const [counter, setCounter] = useState(0);
  //useState-hookin avulla luodaan sovellukselle laskurin tilan counter ja asettaa sen tilaksi 0
  //funktio palauttaa taulukon jossa on kaksi alkiota. Alkiot otetaan taulukon destrukturointisyntaksilla talteen muuttujiin counter ja setCounter
  //Tilaa muuttavan funktion kutsuminen aiheuttaa komponentin uudelleenrenderöitymisen

  //console.log("rendering with counter value", counter);

  //TIMER COUNTER
  /*
  setTimeout(() => {
    setCounter(counter + 1);
  }, 1000);
  console.log('rendering...', counter);
  */

  //Tapahtumankäsittelijät:
  const increaseByOne = () => {
    console.log("increasing value, value before:", counter);
    setCounter(counter + 1);
  };
  const setToZero = () => {
    console.log("resetting to zero, value before:", counter);
    setCounter(0);
  };
  const decreaseByOne = () => {
    console.log("decreasing value, value before:", counter);
    setCounter(counter - 1);
  };

  //#endregion

  //#region 1d
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAllClicks] = useState([]);
  const [total, setTotal] = useState(0);
  const [value, setValue] = useState(10);

  /*
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0
  });
  Kaiken tilan pitäminen yhdessä oliossa on tämän sovelluksen kannalta huono ratkaisu; 
  etuja siinä ei juuri ole, mutta sovellus monimutkaistuu merkittävästi. 
  Onkin ehdottomasti parempi ratkaisu tallettaa nappien klikkaukset erillisiin tilan paloihin.
  */

  const handleLeftClick = () => {
    setAllClicks(allClicks.concat("L"));
    console.log("left before", left);
    const updatedLeft = left + 1;
    setLeft(updatedLeft);
    console.log("left after", updatedLeft);
    setTotal(updatedLeft + right);
  };

  const handleRightClick = () => {
    setAllClicks(allClicks.concat("R"));
    setRight(right + 1);
    setTotal(left + right);
  };

const setToValue = (newValue) => {
  setValue(newValue);
}

  //#endregion

  return (
    <>
      <Display counter={counter} />
      <Nappi handleClick={increaseByOne} text="plus" />
      <Nappi handleClick={setToZero} text="zero" />
      <Nappi handleClick={decreaseByOne} text="minus" />

      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={nimi} age={ika} />
      <div>
        <h2>osio 1d</h2>
        {left}
        <Nappi handleClick={handleLeftClick} text='left'/>
        <Nappi handleClick={handleRightClick} text='right'></Nappi>
        {right}
        <p>total: {total}</p>
        <History allClicks={allClicks}></History>
        <button onClick={() => console.log('clicked the button named button')}>button</button>
        <Nappi handleClick={() => setToValue(24)} text='set to 24'></Nappi>
      </div>
    </>
  );
};

export default App;
