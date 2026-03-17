import { Fragment } from "react";
import "./App.css";

function App() {
  let foodItem = ["Dal", "Green Vagitable", "Roti", "Salad", "Milk", "Ghee"];
  // let foodItem = [];

  // if (foodItem.length === 0) {
  //   return <h3>I am still hungry !</h3>;
  // }

  return (
    <Fragment>
      <h1>Healthy Food</h1>
      {/* {foodItem.length === 0 ? <h3> I am still hungry !</h3> : null} */}
      {foodItem.length === 0 && <h3> I am still hungry !</h3>}
      <ul className="list-group">
        {foodItem.map((item, index) => (
          <li className="list-group-item" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default App;
