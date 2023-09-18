import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: "Arto Hellas",
      number: "+358 123412312"
    }
  ]);
  const [newName, setNewName] = useState("name");
  const [newNumber, setNewNumber] = useState("+123 456 7890");


  const result = persons.map((person) => person.name);
  //console.log(result);

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
    
    console.log("new name:", newName);
    const personObject = {
      name: newName,
      number: newNumber
    };
    console.log(persons[0], personObject);
    console.log(persons.some(element => element.name === newName));
    if (persons.some(element => element.name === newName)) {
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
      <form onSubmit={addPerson}>
        <div>
          name:
          <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number:
          <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.name}>{person.name} {person.number}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
