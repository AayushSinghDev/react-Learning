function ErrorMessage({ foodItem }) {
  return <> {foodItem.length === 0 && <h3>I am Hungry !</h3>}</>;
}

export default ErrorMessage;
