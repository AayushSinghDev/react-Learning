import css from "./AddTodo.module.css";
const AddTodo = () => {
  return (
    <>
      <div className={`row ${css.customRow}`}>
        <div className="col-5">
          <input type="text" placeholder="Enter Todo here..." />
        </div>
        <div className="col-5">
          <input type="date" />
        </div>
        <div className="col-2">
          <button className={`btn btn-success ${css.buttons}`}>Add</button>
        </div>
      </div>
    </>
  );
};

export default AddTodo;
