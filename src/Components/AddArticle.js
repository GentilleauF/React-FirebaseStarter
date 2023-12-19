// import { colRef } from "../firebase";
// import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

// const AddArticle = () => {
//   const [data, setData] = [];

//   function addNewBook() {}

//   //READ
//   getDocs(colRef)
//     .then((snapshot) => {
//       let books = [];
//       snapshot.docs.forEach((doc) => {
//         books.push({ ...doc.data(), id: doc.id });
//       });
//       console.log(books[0].title);
//     })
//     .then(setData([...books]));

//   return (
//     <div className="container text-center bg-light p-1">
//       <div>
//         <form>
//           <h1>Ajouter un Article</h1>
//           <div className="mb-3">
//             <label htmlFor="exampleFormControlInput1" className="form-label">
//               Titre de l'article
//             </label>
//             <input type="text" className="form-control" />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleFormControlTextarea1" className="form-label">
//               Description article
//             </label>
//             <textarea className="form-control" rows="3"></textarea>
//           </div>
//           <div className="mb-3">
//             <button
//               onClick={addNewBook}
//               type="button"
//               className="btn btn-outline-primary"
//             >
//               Ajouter un Article
//             </button>
//           </div>
//         </form>
//       </div>
//       <div>
//         <ul>
//           {console.log(data)}

//           {/* {books.forEach((item, index) => (
//           // Attention : forEach ne retourne pas de tableau
//           // Vous devriez utiliser map pour créer un tableau de composants React
//           <li key={index}>{item}</li>
//         ))} */}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default AddArticle;
