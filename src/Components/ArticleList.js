const ArticleList = ({ handleDelete, handleUpdate, articles }) => {
  return (
    <div>
      <h2>Mes Articles</h2>
      <ul>
        {console.log(articles)}
        {articles &&
          articles.map((article) => (
            <li key={article.id}>
              {article.title} - {article.author}
              <button onClick={() => handleDelete(article.id)}>
                Supprimer
              </button>
              <button
                onClick={() =>
                  handleUpdate(article.id, {
                    title: "Updated Title",
                    author: "Updated Author",
                  })
                }
              >
                Update
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ArticleList;
