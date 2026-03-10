function AddTodo() {
  return (
    <>
      <div className="container ">
        <div className="row kgRow">
          <div className="col-5">
            <input
              type="text"
              className="inputBox"
              placeholder="Enter Todo Here.."
            />
          </div>
          <div className="col-5">
            <input type="date" className="inputDate" />
          </div>
          <div className="col-2">
            <button className="btn btn-success kgButton">Add</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
