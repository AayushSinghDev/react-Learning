import css from "./Button.module.css";
const Button = ({ item, handelOnClick }) => {
  return (
    <>
      <button
        className={css.button}
        onClick={(e) => {
          handelOnClick(e);
        }}
      >
        {item}
      </button>
    </>
  );
};

export default Button;
