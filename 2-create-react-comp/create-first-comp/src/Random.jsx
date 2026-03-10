function Random() {
  let randomNumber = Math.random() * 100;
  return (
    <>
      <p style={{ backgroundColor: "#2343" }}>
        Hello this is Random {Math.round(randomNumber)}
      </p>
    </>
  );
}

export default Random;
