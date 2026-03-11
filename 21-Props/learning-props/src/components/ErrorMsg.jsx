function ErrorMsg({ foodItem }) {
  return <>{foodItem.length === 0 && <h3>I am Still Hungry !</h3>}</>;
}

export default ErrorMsg;
