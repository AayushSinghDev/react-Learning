import css from "./App.module.css";
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import Container from "./components/Container";
import "./App.css";

function App() {
  return (
    <>
      <Container>
        <Display></Display>
        <Buttons></Buttons>
      </Container>
    </>
  );
}

export default App;
