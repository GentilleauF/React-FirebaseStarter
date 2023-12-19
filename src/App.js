import React, { useState, useEffect } from 'react';
import { createData, readData, deleteData, updateData } from './Firebase/firebaseCRUD'

function App() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
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
    setTitle('');
    setAuthor('');
    readData().then(data => setArticles(data));
  };

  const handleDelete = (id) => {
    deleteData(id);
    readData().then(data => setArticles(data));
  };

  const handleUpdate = (id, newData) => {
    updateData(id, newData);
    readData().then(data => setArticles(data));
  };

  return (
    <div>
      <h1>Article Management</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Author:
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </label>
        <button type="submit">Add Article</button>
      </form>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            {article.title} - {article.author}
            <button onClick={() => handleDelete(article.id)}>Delete</button>
            <button onClick={() => handleUpdate(article.id, { title: 'Updated Title', author: 'Updated Author' })}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

