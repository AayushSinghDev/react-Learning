import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import FoodHeading from "./components/FoodHeading";

function App() {
  let foodItem = [
    "Almonds",
    "Apples",
    "Avocados",
    "Bananas",
    "Beets",
    "Bell Peppers",
    "Blueberries",
    "Broccoli",
  ];

  // if (foodItem.length === 0) {
  //   return <h3>I am Hungry !</h3>;
  // }

  return (
    <>
      <FoodHeading></FoodHeading>
      {/* {foodItem.length === 0 ? <h3>I am Hungry !</h3> : null} */}
      {/* {foodItem.length === 0 && <h3>I am Hungry !</h3>} */}
      <ErrorMessage foodItem={foodItem}></ErrorMessage>
      <FoodItems foodItem={foodItem}></FoodItems>
    </>
  );
}

export default App;
