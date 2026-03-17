const ErrorMsg = ({ foodItem }) => {
  return <>{foodItem.length === 0 && <h2>I am Hungry!</h2>}</>;
};

export default ErrorMsg;
