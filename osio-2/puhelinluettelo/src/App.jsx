/* eslint-disable react/prop-types */
import { useState } from "react";

const PersonForm = (props) => {

  return (
    <form onSubmit={props.addPerson}>
      <div>
        name:
        <input value={props.newName} onChange={props.handleNameChange} />
      </div>
      <div>
        number:
        <input value={props.newNumber} onChange={props.handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

const Persons = ({ persons }) => {
  console.log(persons);
  return (
    <div>
      <ul>
        {persons.map((person) => (
          <li key={person.name}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: "Arto Hellas",
      number: "+358 123412312",
    },
  ]);
  const [newName, setNewName] = useState("name");
  const [newNumber, setNewNumber] = useState("+123 456 7890");

  // const result = persons.map((person) => person.name);
  // //console.log(result);

  const handleNameChange = (event) => {
    //console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    //console.log(event.target.value);
    setNewNumber(event.target.value);
  };
  const addPerson = (event) => {
    event.preventDefault();

    //console.log("new name:", newName);
    const personObject = {
      name: newName,
      number: newNumber,
    };
    // console.log(persons[0], personObject);
    // console.log(persons.some((element) => element.name === newName));
    if (persons.some((element) => element.name === newName)) {
      alert(`${newName} is already added to the phonebook`);
      setNewName("");
    } else {
      setPersons(persons.concat(personObject));
      setNewName("");
      setNewNumber("");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}></PersonForm>
      <h2>Numbers</h2>
      <Persons persons={persons}></Persons>
    </div>
  );
};

export default App;
