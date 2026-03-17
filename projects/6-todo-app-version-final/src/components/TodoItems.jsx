import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, handelOnDelete }) => {
  return (
    <>
      {todoItems.map((item, index) => (
        <TodoItem
          item={item}
          key={index}
          handelOnDelete={handelOnDelete}
        ></TodoItem>
      ))}
    </>
  );
};

export default TodoItems;
