import React, { useState, useEffect } from "react";
import {
  createData,
  readData,
  deleteData,
  updateData,
} from "./Firebase/firebaseCRUD";

function App() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await readData();
      setArticles(data);
    };

    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    createData(title, author);
    setTitle("");
    setAuthor("");
    readData().then((data) => setArticles(data));
  };

  const handleDelete = (id) => {
    deleteData(id);
    readData().then((data) => setArticles(data));
  };

  const handleUpdate = (id, newData) => {
    updateData(id, newData);
    readData().then((data) => setArticles(data));
  };

  return (
    <div>
    <div className="container text-center bg-light p-1">
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Ajouter vos livres</h1>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Titre du livre:
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Description:
          </label>
          <textarea
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="form-control"
            rows="3"
          ></textarea>
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-outline-primary">
            Ajouter un Article
          </button>
        </div>
      </form>
    </div>
  </div>
  <ul>
    {articles.map(article => (
      <li key={article.id} >
        {article.title} - {article.author}
        <button onClick={() => handleDelete(article.id)} >Supprimer</button>
        <button onClick={() => handleUpdate(article.id, {title: 'Updated Title', author: 'Updated Author'})} >Update</button>
      </li>
      ))
      }
  </ul>
</div>
  );
}

export default App;
