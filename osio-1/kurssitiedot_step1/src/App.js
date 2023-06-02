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
      <Part />
    </div>


  );
};

const Part = (props) => {
  return (
    <p>{props.name} {props.amount}</p>
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header courseName={course} />
      <Content part={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/>
      <Total amount={exercises1 + exercises2 + exercises3} />
    </div>
  )
};

export default App;