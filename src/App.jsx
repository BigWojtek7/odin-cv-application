import { useState } from "react";
import { initial } from "./initialObj";
import "./App.css";

function App() {
  const [person, setPerson] = useState(initial);
  const [status, setStatus] = useState("typing");

  // const handleChange = () => console.log("2222");

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("sent");
  }
  function editHandler(e) {
    e.preventDefault();
    setStatus("typing");
  }

  const isSent = status === "sent";

  if (isSent) {
    return (
      <div className="output">
        <h1>Your CV is:</h1>
        <h2>Personal Information:</h2>
        <p>
          Your name:{" "}
          <b>
            {person.firstName} {person.lastName}
          </b>
        </p>
        <p>
          Your e-mail: <b>{person.email}</b>
        </p>
        <p>
          Your phone number: <b>{person.phone}</b>
        </p>
        <h2>Education:</h2>
        <p>
          School name: <b>{person.schoolName}</b>
        </p>
        <p>
          Title of study: <b>{person.titleOfStudy}</b>
        </p>
        <p>
          Date of study: <b>{person.dateOfStudy}</b>
        </p>
        <h2>Practical experience:</h2>
        <p>
          Company name: <b>{person.companyName}</b>
        </p>
        <p>
          Position: <b>{person.positionTitle}</b>
        </p>
        <p>
          Main responsibilities: <b>{person.mainResponsibilities}</b>
        </p>
        <p>
          Date of work: <b>{person.dateOfWork}</b>
        </p>
        <button onClick={editHandler}>Edit</button>
      </div>
    );
  }

  return (
    <>
      <form className="cv-input" onSubmit={handleSubmit}>
        <h1>CV Application</h1>
        <h2>Personal Information:</h2>
        <label>
          First name:{" "}
          <input
            value={person.firstName}
            onChange={(e) =>
              setPerson({ ...person, firstName: e.target.value })
            }
          />
        </label>
        <label>
          Last name:{" "}
          <input
            value={person.lastName}
            onChange={(e) => setPerson({ ...person, lastName: e.target.value })}
          />
        </label>
        <label>
          E-mail:{" "}
          <input
            value={person.email}
            onChange={(e) => setPerson({ ...person, email: e.target.value })}
          />
        </label>
        <label>
          Phone number:{" "}
          <input
            value={person.phone}
            onChange={(e) => setPerson({ ...person, phone: e.target.value })}
          />
        </label>
        <h2>Educational experience:</h2>
        <label>
          School name:{" "}
          <input
            value={person.schoolName}
            onChange={(e) =>
              setPerson({ ...person, schoolName: e.target.value })
            }
          />
        </label>
        <label>
          Title of study:{" "}
          <input
            value={person.titleOfStudy}
            onChange={(e) =>
              setPerson({ ...person, titleOfStudy: e.target.value })
            }
          />
        </label>
        <label>
          Date of study:{" "}
          <input
            value={person.dateOfStudy}
            onChange={(e) =>
              setPerson({ ...person, dateOfStudy: e.target.value })
            }
          />
        </label>
        <h2>Practical Experience</h2>
        <label>
          Company name:{" "}
          <input
            value={person.companyName}
            onChange={(e) =>
              setPerson({ ...person, companyName: e.target.value })
            }
          />
        </label>
        <label>
          Position title:{" "}
          <input
            value={person.positionTitle}
            onChange={(e) =>
              setPerson({ ...person, positionTitle: e.target.value })
            }
          />
        </label>
        <label>
          Main responsibilities:{" "}
          <input
            value={person.mainResponsibilities}
            onChange={(e) =>
              setPerson({ ...person, mainResponsibilities: e.target.value })
            }
          />
        </label>
        <label>
          Date of work:{" "}
          <input
            value={person.dateOfWork}
            onChange={(e) =>
              setPerson({ ...person, dateOfWork: e.target.value })
            }
          />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
