import css from "./Item.module.css";

const Item = ({ item, handelbuyButtonCllicked, bought }) => {
  // function handelbuyButtonCllicked(event) {
  //   console.log(event);
  //   console.log(`${item} being bought !`);
  // }
  return (
    <>
      <li className={`list-group-item ${css.item} ${bought && "active"}`}>
        {item}
        <button
          className={`btn btn-info ${css.button}`}
          onClick={(event) => handelbuyButtonCllicked(event, item)}
          // onClick={(event) => handelbuyButtonCllicked(event)}
        >
          Buy
        </button>
      </li>
    </>
  );
};

export default Item;
