/* eslint-disable react/prop-types */
const Header = (props) => {
  //console.log(props);

  return (
    <>
      <h1>{props.course.name}</h1>
    </>

  );

};

const Content = (props) => {
  //console.log(props.parts[0].name);

  return (
    <div>
      <Part name={props.course.parts[0].name} amount={props.course.parts[0].exercises} />
      <Part name={props.course.parts[1].name} amount={props.course.parts[1].exercises} />
      <Part name={props.course.parts[2].name} amount={props.course.parts[2].exercises} />
    </div>
  );
};

const Part = (props) => {
  //console.log(props);
  return (
    <p>{props.name}: {props.amount}</p>
  )
};


const Total = (props) => {
  //console.log(props.amount.parts);

  let total = 0;

  props.amount.parts.forEach(element => {
    total += element.exercises;
  });

  //console.log(total);

  return (
    <p>
      Number of exercises total: {total}
    </p>
  );

};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
    ]
  };

  //const [first, second, third] = parts;

  //console.log(first, second, third);


  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total amount={course} />
    </div>
  )
};

export default App;