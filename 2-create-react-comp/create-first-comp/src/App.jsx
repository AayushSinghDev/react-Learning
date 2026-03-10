import KgButton from "./KgButton";
import Hello from "./Hello";
import Random from "./Random";
function App() {
  let number = Math.round(Math.random() * 100);
  return (
    <>
      <h1>Hello World !</h1>
      {/* <button>Suscribe...</button> */}
      <KgButton></KgButton>
      <p>This is the best React Course.</p>
      <Hello></Hello>
      <Random></Random>
      <Random></Random>
      <Random></Random>
      <Random></Random>
      <Random></Random>
    </>
  );
}

export default App;
