import Item from "./Item";

function FoodItems({ foodItem }) {
  return (
    <>
      <ul className="list-group">
        {foodItem.map((item, index) => (
          <Item item={item} key={index}></Item>
        ))}
      </ul>
    </>
  );
}

export default FoodItems;
