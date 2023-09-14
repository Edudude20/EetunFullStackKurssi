/* eslint-disable react/prop-types */
const Header = ({ name }) => {
    //console.log(props);
  
    return (
      <>
        <h1>{name}</h1>
      </>
    );
  };
const Content = ({ part }) => {
    //console.log("Content props: ", part);
  
    return (
      <div>
        <li>
          <Part name={part.name} exercises={part.exercises}></Part>
        </li>
      </div>
    );
  };

  const Part = (props) => {
    //console.log("Part props: ", props);
    return (
      <p>
        {props.name}: {props.exercises}
      </p>
    );
  };
const Total = ({ course }) => {
    //console.log("Total: ", course.parts);
  
    const initialValue = 0;
    const totalWithInitial = course.parts.reduce(
      (previousValue, currentValue) => {
        console.log(
          "previous value: ",
          previousValue,
          "current value: ",
          currentValue.exercises
        );
        return previousValue + currentValue.exercises;
      },
      initialValue
    );
    console.log(totalWithInitial);
  
    return <p>Number of exercises total: {totalWithInitial}</p>;
  };

const Course = ({ course }) => {
    //console.log("Course props: ", course);
    return (
      <div>
        <Header name={course.name} />
        <h3>Parts:</h3>
        <ul>
          {course.parts.map((part) => {
            return <Content key={part.id} part={part}></Content>;
          })}
        </ul>
        <Total course={course}></Total>
      </div>
    );
  };

  export default Course;