import { useState } from "react";

export default function Form() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadLine, setDeadLine] = useState("");
  const [color, setColor] = useState("#7270C2");
  return (
    <div>
      <form className="flex flex-col">
        <div className="flex flex-col">
          <label>Title</label>
          <input className="outline-none border border-1 border-neutral-300 rounded-md bg-neutral-50 ring-indigo-500 p-2 focus:ring-2 ring-offset-2 transition .4s ease-in-out duration-200 my-2" type="text" />
        </div>
        <div className="flex flex-col">
          <label>Description</label>
          <textarea className="outline-none border border-1 border-neutral-300 rounded-md bg-neutral-50 ring-indigo-500 p-2 focus:ring-2 ring-offset-2 transition .4s ease-in-out duration-200 my-2"></textarea>
        </div>
        <div className="flex flex-col">
          <label>DeadLine</label>
          <input className="outline-none border border-1 border-neutral-300 rounded-md bg-neutral-50 ring-indigo-500 p-2 focus:ring-2 ring-offset-2 transition .4s ease-in-out duration-200 my-2" type="datetime" />
        </div>
        <div className="flex flex-col">
          <label>Color</label>
          <input className="outline-none w-full" type="color" name="" id="" value={color} onChange={(e)=>setColor(e.target.value)} />
          <button className="w-full">Add Task</button>
        </div>
      </form>
    </div>
  );
}
