import css from "./Button.module.css";
const Button = ({ item }) => {
  return (
    <>
      <button className={css.button}>{item}</button>
    </>
  );
};

export default Button;
