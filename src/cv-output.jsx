export default function CvOutput({person, editHandler}){
  return(
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
          Date of work: From: <b>{person.dateOfWorkStart}</b> To:  <b>{person.dateOfWorkFinish}</b>
        </p>
        <button onClick={editHandler}>Edit</button>
      </div>
  )
}