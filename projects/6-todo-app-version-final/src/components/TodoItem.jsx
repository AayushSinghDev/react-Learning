import css from "./TodoItem.module.css";
import { RiChatDeleteFill } from "react-icons/ri";
const TodoItem = ({ item, handelOnDelete }) => {
  return (
    <>
      <div className={`row ${css.customRow}`}>
        <div className="col-5">{item.todoname}</div>
        <div className="col-5">{item.tododate}</div>
        <div className="col-2">
          <button
            className={`btn btn-danger ${css.buttons}`}
            onClick={() => {
              handelOnDelete(item);
            }}
          >
            <RiChatDeleteFill />
          </button>
        </div>
      </div>
    </>
  );
};
export default TodoItem;
