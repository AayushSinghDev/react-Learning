import css from "./FoodItem.module.css";
import Item from "./Item";

const FoodItem = ({ foodItem }) => {
  function handelbuyButtonCllicked(event, item) {
    // console.log(event);
    console.log(`${item} being bought !`);
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
          ></Item>
        ))}
      </ul>
    </>
  );
};

export default FoodItem;
