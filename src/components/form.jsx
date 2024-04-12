// import { useState } from "react";

// export default function Form(props) {
//   const [name, setName] = useState("");
//   const [date, setDate] = useState("");
//   const resetAll = ()=>{
//     setDate('')
//     setName('')
//   }
//   const submitForm = (e)=>{
//     e.preventDefault()
//   }
//   const handleForm = ()=>{
//     const Users = {
//         name:name,
//         date:date,
//         id:Math.floor(Math.random()*10000)
//     }
//     props.addUse(Users)
    
//   }

//   return (
//     <>
//       <form onSubmit={submitForm} className="d-flex flex-column mx-3">
//         <label className="label-control" htmlFor="Name">
//           Name
//         </label>
//         <input
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="form-control w-25"
//           id="Name"
//           type="text"
//         />
//         <label className="label-control" htmlFor="Date">
//           Date
//         </label>
//         <input
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//           className="form-control w-25"
//           id="Date"
//           type="date"
//         />
//         <p onClick={resetAll} className="my-1 text-primary w-25 text-center">
//           Reset Form
//         </p>
//         <button onClick={handleForm} className="btn btn-success w-25 rounded-5 mt-3">Submit</button>
//       </form>
//       <p className="text-muted mx-3 my-2">{name}</p>
//       <p className="text-muted mx-3 my-2">{date}</p>
//     </>
//   );
// }
