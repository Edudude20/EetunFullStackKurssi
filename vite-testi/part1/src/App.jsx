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

const Display = ({ counter }) => {
  return <div>{counter}</div>;
};

const Nappi = ({ handleClick, text}) => {
  return <button onClick={handleClick}>
    {text}
    </button>;
};

const App = () => {
  const nimi = "Pekka";
  const ika = 10;
  const [counter, setCounter] = useState(0); //useState-hookin avulla luodaan sovellukselle laskurin tilan counter ja asettaa sen tilaksi 0
  //funktio palauuttaa taulukon jossa on kaksi alkiota. Alkiot otetaan taulukon destrukturointisyntaksilla talteen muuttujiin counter ja setCounter
  //Tilaa muuttavan funktion kutsuminen aiheuttaa komponentin uudelleenrenderöitymisen
  console.log("rendering with counter value", counter);

  /* TIMER COUNTER
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

  return (
    <>
      <Display counter={counter} />
      <Nappi handleClick={increaseByOne} text="plus" />
      <Nappi handleClick={setToZero} text="zero" />
      <Nappi handleClick={decreaseByOne} text="minus" />

      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={nimi} age={ika} />
    </>
  );
};

export default App;
