/* eslint-disable react/prop-types */
import Button from './Button'

const Persons = ({ persons, removePerson }) => {
    //console.log(persons);
    return (
      <div>
        <ul>
          {persons.map((person) => (
            <li key={person.id}>
              {person.name} {person.number}
              <Button
                handleClick={() => removePerson(person)}
                label="remove"
              ></Button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  export default Persons;