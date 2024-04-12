import React, { useState } from "react";

export default function Todo() {
  //Form variables and functions
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [date, setDate] = useState("");
  const [select, setSelect] = useState("");

  const resetAll = () => {
    setName("");
    setDate("");
    setSelect("");
  };
  const submitForm = (e) => {
    console.log(date);
    e.preventDefault();
  };
  const transferInfo = () => {
    const UsersObj = {
      name: name,
      date: date,
      select: select,
      details: details,
      id: Math.floor(Math.random() * 10000),
    };
    setUsers((prevUser) => {
      return [...prevUser, UsersObj];
    });
    resetAll();
  };
  const dlCard = (id) => {
    setUsers(
      users.filter((e) => {
        return id !== e.id;
      })
    );
  };
  //Form variables and functions END here

  //Cards start here
  const [users, setUsers] = useState([]);
  const Done =()=>{
    alert('Great !')
  }

  return (
    <div className="row">
      <form onSubmit={submitForm} className="d-flex flex-column gap-1 col-4 mx-2">
        <label className="label-control" htmlFor="Name">
          Name :
        </label>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="form-control"
          id="Name"
          type="text"
        />
        <label className="label-control" htmlFor="Date">
          Until :
        </label>
        <input
          onChange={(e) => setDate(e.target.value)}
          value={date}
          className="form-control"
          id="Date"
          type="datetime-local"
        />
        <label className="label-control" htmlFor="Select">
          Select :
        </label>
        <select
          className="form-select"
          onChange={(e) => setSelect(e.target.value)}
          value={select}
          name=""
          id="Select"
        >
          <option value="Important">Important</option>
          <option value="Mundane">Mundane</option>
          <option value="Not important">Not important</option>
        </select>
        <label htmlFor="Details">Details :</label>
        <textarea
          onChange={(e) => setDetails(e.target.value)}
          className="form-control"
          value={details}
          name=""
          id="Details"
          cols="10"
          rows="5"
        ></textarea>
        <p
          style={{ cursor: "pointer" }}
          onClick={resetAll}
          className="text-primary text-center"
        >
          Reset All
        </p>
        <button onClick={transferInfo} className="btn btn-success rounded-3 ">
          Submit
        </button>
      </form>


      {/* Cards */}

      <div className="col-5">
        {users.map((e, index) => (
          <div className="card p-1">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h1 className="card-title">{e.name}</h1>
              <h5 className="text-success">DeadLine : {e.date}</h5>
            </div>
            <div className="card-body">
              <p className="text-muted">{e.details}</p>
              <p className="text-info">{e.select}</p>
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center">
              <button
                onClick={() => dlCard(e.id)}
                className="btn btn-danger rounded-3"
              >
                Delete
              </button>
              <button onClick={Done} className="btn btn-success rounded-3">Done</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
