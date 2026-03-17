import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import TodoHeading from "./components/TodoHeading";
import ErrorMsg from "./components/ErrorMsg";
import { useState } from "react";

function App() {
  const [gettodoitem, settodoitem] = useState([]);

  const handelOnAdd = (todoname, tododate) => {
    if (todoname.trim() === "" || tododate.trim() === "") {
      alert("Please enter both name and date");
      return; // yahin stop ho jayega
    }
    // console.log(todoname, tododate);
    const newval = [...gettodoitem, { todoname: todoname, tododate: tododate }];
    settodoitem(newval);
  };

  const handelOnDelete = (item) => {
    const isconfirm = confirm(
      "are you sure wants to delete item  " +
        item.todoname +
        " " +
        item.tododate,
    );

    if (isconfirm) {
      const newval = gettodoitem.filter((i) => i.todoname !== item.todoname);
      settodoitem(newval);
    }
  };
  return (
    <>
      <div className="container text-center todoContainer">
        <TodoHeading />
        <AddTodo handelOnAdd={handelOnAdd}></AddTodo>
        <ErrorMsg todoItems={gettodoitem}></ErrorMsg>
        <TodoItems todoItems={gettodoitem} handelOnDelete={handelOnDelete} />
      </div>
    </>
  );
}

export default App;
