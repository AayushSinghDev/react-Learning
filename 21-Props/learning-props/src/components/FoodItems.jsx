import Item from "./Item";

function FoodItems({ foodItem }) {
  return (
    <>
      <ul className="list-group">
        {foodItem.map((item, index) => (
          <Item key={index} item={item}></Item>
        ))}
      </ul>
    </>
  );
}

export default FoodItems;
