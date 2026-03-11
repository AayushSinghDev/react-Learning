function Item(props) {
  //destructring
  let { item } = props;
  return (
    <>
      <li className="list-group-item">{item}</li>
    </>
  );
}

export default Item;
