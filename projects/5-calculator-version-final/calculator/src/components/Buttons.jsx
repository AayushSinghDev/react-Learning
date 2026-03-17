import css from "./Buttons.module.css";
import Button from "./Button";

const Buttons = ({ calval, setcalval }) => {
  const buttonName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  const handelOnClick = (e) => {
    // console.log(e.target.innerHTML);
    const value = e.target.innerHTML;
    if (e.target.innerHTML === "C") {
      setcalval("");
    } else if (e.target.innerHTML === "=") {
      try {
        const result = eval(calval);
        setcalval(result);
      } catch {
        setcalval("Error");
      }
    } else {
      let newval = e.target.innerHTML;
      setcalval(calval + value);
    }
  };
  return (
    <>
      <div className={css.buttonContainer}>
        {buttonName.map((item, index) => (
          <Button
            key={index}
            item={item}
            handelOnClick={handelOnClick}
          ></Button>
        ))}
      </div>
    </>
  );
};

export default Buttons;
