import css from "./Item.module.css";
function Item({ item }) {
  return (
    <>
      <li className={`list-group-item ${css.kgItems}`}>
        <span className={css.kgSpan}>{item}</span>
      </li>
    </>
  );
}

export default Item;
