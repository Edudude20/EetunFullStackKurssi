import { useState } from "react";

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

const App = () => {
  const nimi = "Pekka";
  const ika = 10;
  const [counter, setCounter] = useState(0);

  setTimeout(() => {
    setCounter(counter + 1);
  }, 1000);

  //console.log('rendering...', counter);

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={nimi} age={ika} />
      <div>{counter}</div>
    </>
  );
};

export default App;
