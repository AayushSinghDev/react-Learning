import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import TodoHeading from "./components/TodoHeading";

function App() {
  let todoItems = [
    { todoname: "Buy book", tododate: "23/03/2023" },
    { todoname: "Go to collage", tododate: "23/03/2023" },
    { todoname: "go to gym", tododate: "23/03/2023" },
  ];
  return (
    <>
      <div className="container text-center todoContainer">
        <TodoHeading />
        <AddTodo></AddTodo>
        <TodoItems todoItems={todoItems} />
      </div>
    </>
  );
}

export default App;
