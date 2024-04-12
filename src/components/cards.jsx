import React, { useState } from "react";

export default function Todo() {
  //Form variables and functions
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [color, setColor] = useState("#c85b5b");
  const colorio = (e) => {
    setColor(e.target.value);
  };
  const resetAll = () => {
    setName("");
    setDate("");
    setColor("");
  };
  const submitForm = (e) => {
    console.log(date);
    e.preventDefault();
  };
  const transferInfo=()=>{
    const UsersObj={
      name:name,
      date:date,
      color:color,
      id:Math.floor(Math.random()*10000)
    }
    setUsers((prevUser)=>{
      return [...prevUser,UsersObj]
    })
    resetAll()
  }
  const dlCard=(id)=>{
    setUsers(users.filter((e)=>{
      return id !==e.id
    }))
  }
  //Form variables and functions END here

  //Cards start here
  const [users,setUsers] = useState([])

  return (
    <div className="row">
      <form onSubmit={submitForm} className="d-flex flex-column gap-1 col-4">
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
          {" "}
          Date :
        </label>
        <input
          onChange={(e) => setDate(e.target.value)}
          value={date}
          className="form-control"
          id="Date"
          type="date"
        />
        <label className="label-control" htmlFor="Color">
          Color :
        </label>
        <input
          onChange={colorio}
          value={color}
          className="form-control w-25"
          id="Color"
          type="color"
        />
        <p style={{cursor:"pointer"}} onClick={resetAll} className="text-primary text-center">
          Reset All
        </p>
        <button onClick={transferInfo} className="btn btn-success rounded-3 ">Submit</button>
      </form>
      <div className="col-7">
    {
      users.map((e,index)=>(
        <div style={{background:e.color}} className="d-flex flex-column justify-content-center align-items-center p-2 border border-1 border-warning rounded-3 m-2">
          <h1 className="text-primary">Name :{e.name === '' ? 'Empty' : e.name}</h1>
          <p className="text-muted">Date :{e.date === ' ' ? 'Empty' : e.date}</p>
          <p className="text-muted">ID :{e.id}</p>
          <button onClick={()=> dlCard(e.id)} className="btn btn-danger rounded-3">Delete</button>
        </div>
      ))
    }
      </div>
    </div>
  );
}
