import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./firebasse/config";

export default function Cards() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const ref = collection(db, "todolist");
    let unsubscribe = onSnapshot(ref, (snapshot) => {
      let result = [];
      snapshot.docs.forEach((doc) => {
        result.push({ id: doc.id, ...doc.data() });
        setCards(result);
      });
    });
    return () => {
      unsubscribe();
    };
  }, [setCards]);
  return (
    <div>
      {cards.map((e, index) => (
        <div style={{backgroundColor:e.color}} className="border border-1 border-teal-500 rounded-md p-2 flex flex-col text-white" key={index}>
          <h1>{e.title}</h1>
          <p>{e.description}</p>
          <p>{e.deadLine}</p>
        </div>
      ))}
    </div>
  );
}
