const Header = (props) => {
  //console.log(props);

  return (
    <>
      <h1>{props.courseName}</h1>
    </>

  );

};

const Content = (props) => {
  console.log(props);

  return (
    <div>
      <Part name={props.part} amount={props.part1Amount} />
      <Part name={props.part2} amount={props.part2Amount} />
      <Part name={props.part3} amount={props.part3Amount} />

    </div>
  );
};

const Part = (props) => {
  return (
    <p>{props.name}, exercises: {props.amount}</p>
  )
};


const Total = (props) => {
  //console.log(props);

  return (
    <p>
      Number of exercises {props.amount}
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

  return (
    <div>
      <Header courseName={course} />
      <Content part= {parts}
      />
      <Total amount={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
    </div>
  )
};

export default App;