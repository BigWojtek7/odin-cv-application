export default function Form({person, setPerson, handleSubmit}) {
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
