import { Fragment } from "react";
import "./App.css";
import ErrorMsg from "./components/ErrorMsg";
import FoodItems from "./components/FoodItems";

function App() {
  let foodItem = ["Roti", "Sabji", "Chaval", "Dal", "Milk", "panir  "];
  // let foodItem = [];

  // if (foodItem.length === 0) {
  //   return <h3>I am Still Hungry!</h3>;
  // }

  return (
    <Fragment>
      <h1>Healthy Foods</h1>
      {/* {foodItem.length === 0 ? <h3>I am Still Hungry! </h3> : null} */}
      <ErrorMsg foodItem={foodItem}></ErrorMsg>
      <FoodItems foodItem={foodItem}></FoodItems>
    </Fragment>
  );
}

export default App;
