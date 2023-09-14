/* eslint-disable react/prop-types */
import Course from './components/Course';

const App = () => {
  const course = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  //const [first, second, third] = parts;

  //console.log(first, second, third);

  return (
    <>
      <div>
        <ul>
          {course.map((course) => {
            return <Course key={course.id} course={course}></Course>;
          })}
        </ul>
      </div>
    </>
  );
};

export default App;
