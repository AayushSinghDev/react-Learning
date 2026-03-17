import css from "./App.module.css";
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import Container from "./components/Container";
import { useState } from "react";

import "./App.css";

function App() {
  const [calval, setcalval] = useState("");

  return (
    <>
      <Container>
        <Display calval={calval}></Display>
        <Buttons calval={calval} setcalval={setcalval}></Buttons>
      </Container>
    </>
  );
}

export default App;
