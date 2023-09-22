/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
//import axios from "axios"; //funcionality moved to /services
import personService from "./services/personService";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("name");
  const [newNumber, setNewNumber] = useState("+123 456 7890");
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);

  // const result = persons.map((person) => person.name);
  // //console.log(result);

  useEffect(() => {
    console.log("effect");
    personService.getAll().then((initialPersons) => {
      console.log("promise fulfilled, request data:", initialPersons);
      setPersons(initialPersons);
    });
  }, []); //Will only run after the initial render (expect once in development)

  //console.log("render", persons.length, "notes");

  const handleNameChange = (event) => {
    //console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    //console.log(event.target.value);
    setNewNumber(event.target.value);
  };
  
  const addPerson = (event) => {
    event.preventDefault(); //estää lomakkeen lähetyksen oletusarvoisen toiminnan, joka aiheuttaisi mm. sivun uudelleenlatautumisen

    //console.log("new name:", newName);
    const personObject = {
      name: newName,
      number: newNumber,
    };
    // console.log(persons[0], personObject);
    // console.log(persons.some((element) => element.name === newName));

    if (persons.some((element) => element.name === newName)) {
      setMessageType('error');
      setMessage(`${newName} is already added to the phonebook`);
      setNewName("");
      setTimeout(() => {
        setMessage(null);
      }, 3000);
    } else {
      personService.create(personObject).then((returnedNote) => {
        setMessageType('add');
        setMessage(`${newName} added to the phonebook`);
        setNewName("");
        setTimeout(() => {
          setMessage(null);
        }, 3000);
        console.log(returnedNote);
        setPersons(persons.concat(returnedNote)); //concat luo uuden taulukon ja lisää siihen {returnedNote} olion
        setNewName(""); //tyhjennä name-input laatikko
        setNewNumber("");
      });
    }
  };

  const removePerson = (person) => {
    if (window.confirm(`delete ${person.name}`)) {
      setMessageType('remove');
      setMessage(`${person.name} removed from the phonebook`);
      setNewName("");
      setTimeout(() => {
        setMessage(null);
      }, 3000);
      // console.log(`remove person id: `, id);
      personService.removePerson(person.id).then((response) => {
        console.log("promise fulfilled, request data:", response);
        personService.getAll().then((initialPersons) => {
          console.log("promise fulfilled, request data:", initialPersons);
          setPersons(initialPersons);
        });
      });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
<Notification message={message} type={messageType}></Notification>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      ></PersonForm>
      <h2>Numbers</h2>
      <Persons persons={persons} removePerson={removePerson}></Persons>
    </div>
  );
};

export default App;
