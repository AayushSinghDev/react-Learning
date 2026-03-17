import "./App.css";
import Heading from "./components/Heading";
import FoodItem from "./components/FoodItems";
import Container from "./components/Container";
import ErrorMsg from "./components/ErrorMsg";
import FoodInput from "./components/FoodInput";

function App() {
  let foodItem = [
    "Water",
    "Spinach",
    "Kale",
    "Broccoli",
    "Brussels sprouts",
    "Blueberries",
    "Raspberries",
    "Strawberries",
    // "Blackberries",
    // "Salmon",
    // "Tuna",
    // "Sardines",
    // "Trout",
    // "Almonds",
    // "Walnuts",
    // "Chia seeds",
    // "Flaxseed",
    // "Avocado",
    // "Quinoa",
  ];

  // if (foodItem.length === 0) {
  //   return (
  //     <>
  //       <h3>I am Hungry !</h3>
  //     </>
  //   );
  // }

  let texttochange = "Food Item here..";

  const handelOnChange = (event) => {
    // console.log("change");
    console.log(event.target.value);

    texttochange = event.target.value;
  };
  return (
    <>
      <Container>
        <Heading></Heading>
        {/* {foodItem.length === 0 ? <h2>I am Hungry!</h2> : null} */}
        {/* {foodItem.length === 0 && <h2>I am Hungry!</h2>} */}
        <ErrorMsg foodItem={foodItem}></ErrorMsg>
        <FoodInput handelOnChange={handelOnChange}></FoodInput>
        <h3>{texttochange}</h3>
        <FoodItem foodItem={foodItem}></FoodItem>
      </Container>

      <Container>
        My name is Aayush SIngh I was a student but now i am going to become an
        it employee.
      </Container>

      <Container>above are the list of healthy food !</Container>
    </>
  );
}

export default App;
