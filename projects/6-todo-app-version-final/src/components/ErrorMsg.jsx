import css from "./ErrorMsg.module.css";

const ErrorMsg = ({ todoItems }) => {
  return (
    <>
      {todoItems.length === 0 && (
        <h3 className={css.error}>Todo is Empty Add Todo !</h3>
      )}
    </>
  );
};

export default ErrorMsg;
