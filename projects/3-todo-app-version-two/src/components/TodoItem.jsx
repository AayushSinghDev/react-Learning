import css from "./TodoItem.module.css";
const TodoItem = ({ item }) => {
  return (
    <>
      <div className={`row ${css.customRow}`}>
        <div className="col-5">{item.todoname}</div>
        <div className="col-5">{item.tododate}</div>
        <div className="col-2">
          <button className={`btn btn-danger ${css.buttons}`}>Delete</button>
        </div>
      </div>
    </>
  );
};
export default TodoItem;
