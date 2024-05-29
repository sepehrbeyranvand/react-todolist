import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./firebasse/config";
import { Notify } from "notiflix";

export default function Cards() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const ref = collection(db, "todolist");
    let unsubscribe = onSnapshot(ref, (snapshot) => {
      let result = [];
      snapshot.docs.forEach((doc) => {
        result.push({ id: doc.id, ...doc.data() });
        setCards(result);
        setLoading(false);
      });
    });

    return () => {
      unsubscribe();
    };
  }, [setCards]);

  const rmItem = async (id) => {
    const ref = doc(db, "todolist", id);
    await deleteDoc(ref);
    setCards(
      cards.filter((e) => {
        return id !== e.id;
      })
    );
    Notify.failure("Your Task Deleted!");
  };
  if (loading) {
    return (
      <div className="text-center flex justify-center text-5xl items-center min-h-screen">
        <i className="fa fa-life-saver animate-spin text-5xl text-teal-500"></i>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {cards.map((e, index) => (
        <div
          style={{ backgroundColor: e.color }}
          className={
            "border border-1 border-teal-500 w-[90%] self-end rounded-md p-2 text-white"
          }
          key={index}
        >
          <div className="flex">
            <div className=" flex flex-col gap-y-4 basis-4/5">
              <h1 className="text-xl font-bold">{e.title}</h1>
              <hr className="w-[50%] bg-white" />
              <p>{e.description}</p>
              <p>DeadLine: {e.deadLine}</p>
            </div>
            <div className="basis-1/5 flex flex-col">
              <button
                onClick={() => rmItem(e.id)}
                className="text-white bg-red-600 p-2 lg:w-[50%] sm:w-[20%] self-end rounded-lg my-2 transition .4s ease-in-out duration-200 hover:bg-red-700"
              >
                Remove
              </button>
              {/* <button className="text-white bg-green-600 p-2 w-[50%] self-end rounded-lg my-2 transition .4s ease-in-out duration-200 hover:bg-green-700">
                Done
              </button> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
