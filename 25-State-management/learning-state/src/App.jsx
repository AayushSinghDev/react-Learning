import "./App.css";
import Heading from "./components/Heading";
import FoodItem from "./components/FoodItems";
import Container from "./components/Container";
import ErrorMsg from "./components/ErrorMsg";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  // if (foodItem.length === 0) {
  //   return (
  //     <>
  //       <h3>I am Hungry !</h3>
  //     </>
  //   );
  // }

  const [foodItem, setFoodItem] = useState(["roti", "sabji"]);

  let texttochange = "Food Item here..";

  const handelOnChange = (event) => {
    if (event.key === "Enter") {
      let newval = event.target.value;
      let newarr = [...foodItem, newval];
      setFoodItem(newarr);
      event.target.value = "";
    }
  };

  return (
    <>
      <Container>
        <Heading></Heading>
        {/* {foodItem.length === 0 ? <h2>I am Hungry!</h2> : null} */}
        {/* {foodItem.length === 0 && <h2>I am Hungry!</h2>} */}
        <FoodInput handelOnChange={handelOnChange}></FoodInput>
        <ErrorMsg foodItem={foodItem}></ErrorMsg>

        <FoodItem foodItem={foodItem}></FoodItem>
      </Container>
    </>
  );
}

export default App;
