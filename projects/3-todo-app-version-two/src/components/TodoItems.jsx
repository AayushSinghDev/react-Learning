import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems }) => {
  return (
    <>
      {todoItems.map((item, index) => (
        <TodoItem item={item} key={index}></TodoItem>
      ))}
    </>
  );
};

export default TodoItems;
