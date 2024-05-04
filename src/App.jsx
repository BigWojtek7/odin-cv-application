import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Andrews",
    age: 100,
  });

  const handleFirstNameChange = () => console.log()
  const handleLastNameChange = () => console.log()

  const handleSubmit = () => console.log()
  return (
    <>
    <form className="cv-input" onSubmit={handleSubmit}>
      <h1>CV Application</h1>
      <h2>Personal Information:</h2>
      <label>
        First name:{" "}
        <input value={person.firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:{" "}
        <input value={person.lastName} onChange={handleLastNameChange} />
      </label>
      <label>
        E-mail:{" "}
        <input value={person.lastName} onChange={handleLastNameChange} />
      </label>
      <label>
        Phone number:{" "}
        <input value={person.lastName} onChange={handleLastNameChange} />
      </label>
      <h2>Educational experience:</h2>
      <label>
        School name:{" "}
        <input value={person.lastName} onChange={handleLastNameChange} />
      </label>
      <label>
        Title of study:{" "}
        <input value={person.lastName} onChange={handleLastNameChange} />
      </label>
      <label>
        Date of study:{" "}
        <input value={person.lastName} onChange={handleLastNameChange} />
      </label>
      <h2>Practical Experience</h2>
      <label>
        Company name:{" "}
        <input value={person.lastName} onChange={handleLastNameChange} />
      </label>
      <label>
        Position title:{" "}
        <input value={person.lastName} onChange={handleLastNameChange} />
      </label>
      <label>
        Main responsibilities:{" "}
        <input value={person.lastName} onChange={handleLastNameChange} />
      </label>
      <label>
        Date of work:{" "}
        <input value={person.lastName} onChange={handleLastNameChange} />
      </label>
      <button>Submit</button>

      <p>
        Your CV is: <b>{}</b>
      </p>
    </form>
    </>
  )
}

export default App
