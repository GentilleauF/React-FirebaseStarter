import React, { useState, useEffect } from "react";
import {
  createData,
  readData,
  deleteData,
  updateData,
} from "./Firebase/firebaseCRUD";
import AddArticle from "./Components/AddArticle";
import ArticleList from "./Components/ArticleList";
import FecthFromApi from "./Components/FecthFromApi";

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
      <AddArticle
        handleSubmit={handleSubmit}
        title={title}
        setTitle={setTitle}
        author={author}
        setAuthor={setAuthor}
      />
      {(
        <ArticleList
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
        articles={articles}
        />
      )}

      <FecthFromApi/>
    </div>
  );
}

export default App;
