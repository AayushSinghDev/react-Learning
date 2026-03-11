import css from "./Buttons.module.css";

import Button from "./Button";

const buttons = () => {
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
  return (
    <>
      <div className={css.buttonContainer}>
        {buttonName.map((item, index) => (
          <Button key={index} item={item}></Button>
        ))}
      </div>
    </>
  );
};

export default buttons;
