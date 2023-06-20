const Header = (props) => {
  //console.log(props);

  return (
    <>
      <h1>{props.courseName}</h1>
    </>

  );

};

const Content = (props) => {
  //console.log(props.parts[0].name);

  return (
    <div>
      <Part name={props.parts[0].name} amount={props.parts[0].exercises} />
      <Part name={props.parts[1].name} amount={props.parts[1].exercises} />
      <Part name={props.parts[2].name} amount={props.parts[2].exercises} />
    </div>
  );
};

const Part = (props) => {
  console.log(props);
  return (
    <p>{props.name}: {props.amount}</p>
  )
};


const Total = (props) => {
  //console.log(props);
  let total = 0;

  props.amount.forEach(element => {
    total+=element.exercises;
  });

  //console.log(total);

  return (
    <p>
      Number of exercises total: {total}
    </p>
  );

};

const App = () => {
  const course = 'Half Stack application development'

  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ];

  const [first, second, third] = parts;

  //console.log(first, second, third);


  return (
    <div>
      <Header courseName={course} />
      <Content parts={parts}/>
      <Total amount={parts} />
    </div>
  )
};

export default App;