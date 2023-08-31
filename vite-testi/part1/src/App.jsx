const Hello = (props) => {
  const bornYear = () => {	
    const yearNow = new Date().getFullYear();
    return yearNow - props.age;
  };


  return (
    <>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </>
  );
};

const App = () => {
  const nimi = 'Pekka';
  const ika = 10;

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={nimi} age={ika} />
    </>
  );
};

export default App;