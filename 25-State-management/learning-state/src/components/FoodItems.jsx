import { useState } from "react";
import css from "./FoodItem.module.css";
import Item from "./Item";

const FoodItem = ({ foodItem }) => {
  const [getactive, setactive] = useState([]);

  function handelbuyButtonCllicked(event, item) {
    // console.log(`${item} being bought !`);

    if (getactive.includes(item)) {
      setactive(getactive.filter((i) => i !== item));
    } else {
      let newarr = [...getactive, item];
      setactive(newarr);
    }
  }
  return (
    <>
      <ul className={`list-group ${css.foodItems}`}>
        {foodItem.map((item, index) => (
          <Item
            item={item}
            key={index}
            // handelbuyButtonCllicked={() => {
            //   console.log(`${item} being bought !`);
            // }}

            handelbuyButtonCllicked={handelbuyButtonCllicked}
            bought={getactive.includes(item)}
          ></Item>
        ))}
      </ul>
    </>
  );
};

export default FoodItem;
