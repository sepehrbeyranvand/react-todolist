import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "./firebasse/config";
import { Notify } from "notiflix";

export default function Form() {
  //Variables
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadLine, setDeadLine] = useState("");
  const [color, setColor] = useState("#7270C2");

  //Functions
  const resetAll = () => {
    setColor("");
    setDeadLine("");
    setDescription("");
    setTitle("");
  };

  const sendTODO = async (e) => {
    e.preventDefault();
    const doc = { title, description, deadLine, color };
    const ref = collection(db, "todolist");
    try {
      await addDoc(ref, doc);
      Notify.success("Your task added");
    } catch (err) {
      console.log(err);
    }
    resetAll();
  };
  return (
    <div>
      <form onSubmit={sendTODO} className="flex flex-col">
        <div className="flex flex-col">
          <label>Title</label>
          <input
            className="outline-none border border-1 border-neutral-300 rounded-md bg-neutral-50 ring-indigo-500 p-2 focus:ring-2 ring-offset-2 transition .4s ease-in-out duration-200 my-2"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col">
          <label>Description</label>
          <textarea
            className="outline-none border border-1 border-neutral-300 rounded-md bg-neutral-50 ring-indigo-500 p-2 focus:ring-2 ring-offset-2 transition .4s ease-in-out duration-200 my-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label>DeadLine</label>
          <input
            className="outline-none border border-1 border-neutral-300 rounded-md bg-neutral-50 ring-indigo-500 p-2 focus:ring-2 ring-offset-2 transition .4s ease-in-out duration-200 my-2"
            type="datetime-local"
            value={deadLine}
            onChange={(e) => setDeadLine(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col">
          <label>Color</label>
          <input
            className="outline-none w-full"
            type="color"
            name=""
            id=""
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button className="w-full bg-green-400 text-white p-2 rounded-md my-7 hover:bg-green-500 transition .4s ease-in-out duration-200">
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
}
