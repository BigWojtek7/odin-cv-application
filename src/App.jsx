import { useState } from "react";
import { initial } from "./initialObj";
import CvOutput from "./cv-output";
import Form from "./cv-form";
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
      <>
        <CvOutput person={person} editHandler={editHandler} />
      </>
    );
  }

  return (
    <>
      <Form person={person} setPerson={setPerson} handleSubmit={handleSubmit} />
    </>
  );
}

export default App;
