const FoodInput = ({ handelOnChange }) => {
  // const handelOnChange = (event) => {
  //   // console.log("change");
  //   console.log(event.target.value);
  // };
  return (
    <>
      <input
        type="text"
        placeholder="Enter Intem here..."
        className="display"
        // onChange={(event) => handelOnChange(event)}
        onChange={(event) => handelOnChange(event)}
      />
    </>
  );
};

export default FoodInput;
