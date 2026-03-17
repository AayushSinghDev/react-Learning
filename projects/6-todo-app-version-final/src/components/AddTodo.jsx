import css from "./AddTodo.module.css";
import { useState } from "react";
import { AiTwotoneFolderAdd } from "react-icons/ai";
const AddTodo = ({ handelOnAdd }) => {
  const [getname, setname] = useState("");
  const [getdate, setdate] = useState("");
  const handelNametodo = (e) => {
    setname(e.target.value);
  };
  const handelDatetodo = (e) => {
    setdate(e.target.value);
  };
  const handelOnClickadd = () => {
    handelOnAdd(getname, getdate);
    setname("");
    setdate("");
  };

  return (
    <>
      <div className={`row ${css.customRow}`}>
        <div className="col-5">
          <input
            type="text"
            placeholder="Enter Todo here..."
            onChange={handelNametodo}
            value={getname}
          />
        </div>
        <div className="col-5">
          <input type="date" onChange={handelDatetodo} value={getdate} />
        </div>
        <div className="col-2">
          <button
            className={`btn btn-success ${css.buttons}`}
            onClick={handelOnClickadd}
          >
            <AiTwotoneFolderAdd />
          </button>
        </div>
      </div>
    </>
  );
};

export default AddTodo;
