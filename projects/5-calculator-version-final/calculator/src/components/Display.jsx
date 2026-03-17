import css from "./Display.module.css";
const Display = ({ calval }) => {
  return (
    <>
      <input
        type="text"
        name="diaplay"
        value={calval}
        className={css.display}
        readOnly
      />
    </>
  );
};

export default Display;
